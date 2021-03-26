const controller = require('../controllers/controllers');

module.exports = app => {
    //C
    app.post('/api/pets', controller.createPet);
    //R
    app.get('/api/pets', controller.getAllPets);
    app.get('/api/pets/:id', controller.getOnePet);
    //U
    app.patch('/api/pets/:id', controller.updatePet);
    //D
    app.delete('/api/pets/:id', controller.deletePet)
}