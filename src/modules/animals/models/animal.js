const { nanoid } = require('nanoid');

class Animal {
  constructor(payload) {
    this.id = nanoid();
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
    this.name = payload.name;
    this.age = payload.age;
    this.isVaccinated = payload.isVaccinated;
    this.gender = payload.gender;
    this.species = payload.species;
  }
}

// const animalSchema = new Schema({
//   name: String,
//   age: Number,
//   isVaccinated: { type: Boolean, default: false },
//   gender: { type: String, enum: ['male', 'female'] },
//   species: String,
// })
// return Animal;

module.exports = Animal;