const animalsService = require("../services/animalsService");

class AnimalController {
  constructor(animalsService) {
    this.animalsService = animalsService;
  }

  getAnimals = async (req, res) => {
    const animals = await this.animalsService.getAll();
    res.json({
      status: 200,
      message: 'Successfully retrieved all animals!',
      data: animals,
    });
  }
  
  getAnimalById = async (req, res, next) => {
    const { animalId } = req.params;
    const animal = await this.animalsService.getOneById(animalId);
    res.json({
      status: 200,
      message: 'Successfully retrieved animal!',
      data: animal,
    });
  }; 
  
  createAnimal = async (req, res) => {
    console.log(req.body)
    const animal = await this.animalsService.create(req.body)
    res.json({
      status: 201,
      message: 'Successfully created an animal!',
      data: animal, });
  }
  
  updateAnimal = async (req, res) => {
    const { animalId } = req.params;
    const { body } = req;

    const animal = await this.animalsService.updateById(animalId, body);
    res.json({
      status: 200,
      message: 'Successfully updated an animal!',
      data: animal,
    });
  };

    deleteAnimal = async (req, res) => {
    const { animalId } = req.params;

    const animal = await this.animalsService.deleteById(animalId);
    res.json({
      status: 200,
      message: 'Successfully deleted an animal!',
      data: animal,
    });
  };
}

const animalController = new AnimalController(animalsService);

module.exports = animalController; 