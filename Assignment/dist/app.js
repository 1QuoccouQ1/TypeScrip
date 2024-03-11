



class PokemonFetcher {
    async fetchData(url) {
        const response = await fetch(url);
        const data = await response.json();
        const pokemons = [];

        for (let i = 0; i < data.results.length; i++) {
            const pokemonData = await this.fetchPokemon(data.results[i].url);
            pokemons.push({
                id: pokemonData.id,
                name: pokemonData.name,
                image: pokemonData.sprites.front_default,
                type: pokemonData.types[0].type.name
            });
        }

        return pokemons;
    }

    async fetchPokemon(url) {
        const response = await fetch(url);
        return response.json();
    }

    shuffle(array) {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    async displayPokemon(name) {
        const pokemons = await this.fetchData('https://pokeapi.co/api/v2/pokemon?limit=10');
        const doubledPokemons = pokemons.concat(pokemons); // Double the array
        const shuffledPokemons = this.shuffle(doubledPokemons);
        const container = document.getElementById('pokemonContainer');

        if (container) {
            container.innerHTML = ''; // Clear previous content

            shuffledPokemons.forEach((pokemon) => {
                const card = document.createElement('div');
                card.classList.add('pokemon-card');
                card.innerHTML = `
                    <img src="${pokemon.image}" alt="${pokemon.name}">
                    <div class="pokemon-info">
                        <p>ID: ${pokemon.id}</p>
                    </div>
                `;
                container.appendChild(card);
            });
        }
    }
}



function validateName(name) {
    // Kiểm tra tên không được rỗng
    if (name.trim() === '') {
        return false;
    }

    // Kiểm tra tên không chứa ký tự đặc biệt
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (specialChars.test(name)) {
        return false;
    }

    // Kiểm tra tên không chỉ gồm 1 ký tự
    if (name.length === 1) {
        return false;
    }

    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    let score = 0; // Biến lưu trữ điểm
    const scoreDisplay = document.getElementById('scoreDisplay');
    const gameInput = document.getElementById('gameInput');
    const gamediv = document.getElementById('game');
    const nameInputContainer = document.getElementById('nameInputContainer');
    const playButton = document.getElementById('playButton');
    const resetButton = document.getElementById('reset');
    const logoutButton = document.getElementById('logout');
    

    let flippedCards = []; // Mảng lưu trữ các thẻ đang được lật
    let matchedCards = []; // Mảng lưu trữ các cặp thẻ giống nhau

    playButton.addEventListener('click', () => {
        const gameName = gameInput.value.trim().toLowerCase();
        if (gameName === 'pokemon') {
            nameInputContainer.style.display = 'block';
            playButton.style.display = 'none';
            gamediv.style.display = 'none';
        } else {
            alert("Tên game không đúng");
        }
    });


    const startButton = document.getElementById('startButton');
    const nameInput = document.getElementById('nameInput');

    startButton.addEventListener('click', async () => {
        const name = nameInput.value.trim();
        if (validateName(name)) {
            const pokemonFetcher = new PokemonFetcher();
            await pokemonFetcher.displayPokemon(name);

            // Thêm logic khi chọn một thẻ
            function flipCard(card) {
                card.classList.add('flipped');
                flippedCards.push(card);
                if (flippedCards.length === 2) {
                    const [firstCard, secondCard] = flippedCards;
                    if (firstCard.dataset.id === secondCard.dataset.id) {
                        matchedCards.push(firstCard, secondCard);
                        score += 10; // Tăng điểm khi tìm được một cặp thẻ giống nhau
                        updateScoreDisplay();
                        if (matchedCards.length === 20) {
                            alert('Chúc mừng! Bạn đã hoàn thành trò chơi!');
                        }
                    } else {
                        setTimeout(() => {
                            firstCard.classList.remove('flipped');
                            secondCard.classList.remove('flipped');
                        }, 1000);
                    }
                    flippedCards = [];
                }
            }

            // Thêm sự kiện khi click vào một thẻ
            const cards = document.querySelectorAll('.pokemon-card');
            console.log(cards)
            cards.forEach(card => {
                card.addEventListener('click', () => {
                    console.log(card)
                    if (!card.classList.contains('flipped') && flippedCards.length < 2) {
                        flipCard(card);
                    }
                });
            });
        } else {
            alert('Vui lòng nhập tên, không dùng các ký tự đặc biệt hoặc để trống');
        }
    });

    resetButton.addEventListener('click', () => {
        gamediv.style.display = 'block';
        nameInputContainer.style.display = 'none';
        gameInput.value = '';
        nameInput.value = '';
        score = 0; // Đặt lại điểm về 0
        updateScoreDisplay(); // Cập nhật hiển thị điểm
    });

    logoutButton.addEventListener('click', () => {
        gamediv.style.display = 'block';
        nameInputContainer.style.display = 'none';
    });

    function updateScoreDisplay() {
        scoreDisplay.textContent = `Điểm: ${score}`;
    }
});