const router = require('express').Router();

//importing functionality and hook it to routes
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
  } = require('../../controllers/pizza-controller');

//Set up GET all and POST at /api/pizzas
router
.route('/')
.get(getAllPizza)
.post(createPizza);

//Set up GET one, PUT, and DELETE at api/pizza/:id
router
.route('/:id')
.get(getPizzaById)
.put(updatePizza)
.delete(deletePizza);

module.exports = router;
