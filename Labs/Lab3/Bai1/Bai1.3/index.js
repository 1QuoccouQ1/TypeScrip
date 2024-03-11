const hobbies = ['Sports', 'Cooking'];
const activehobbies = ['Hiking'];
activehobbies.push(hobbies);
activehobbies.push(hobbies[0], hobbies[1]);
activehobbies.push(...hobbies);
console.log(activehobbies);
