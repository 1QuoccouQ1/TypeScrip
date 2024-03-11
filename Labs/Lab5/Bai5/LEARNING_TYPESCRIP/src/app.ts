interface Pokemon {
    id: number;
    name: string;
    image: string;
    type: string;
}

class PokemonFetcher {
    async fetchData(url: string): Promise<Pokemon[]> {
        const response = await fetch(url);
        const data = await response.json();
        const pokemons: Pokemon[] = [];

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

    private async fetchPokemon(url: string): Promise<any> {
        const response = await fetch(url);
        return response.json();
    }

    private shuffle(array: any[]): any[] {
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

    async displayPokemon() {
        const pokemons = await this.fetchData('https://pokeapi.co/api/v2/pokemon?limit=10');
        const doubledPokemons = pokemons.concat(pokemons); // Double the array
        const shuffledPokemons = this.shuffle(doubledPokemons);
        const container = document.getElementById('pokemonContainer');

        if (container) {
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

const pokemonFetcher = new PokemonFetcher();
pokemonFetcher.displayPokemon();
