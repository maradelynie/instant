const express = require('express');
const controller = require('../services/recordsServices');

const recordsRouter = express.Router();

recordsRouter.get('/:user/:yearMonth', controller.read);
recordsRouter.post('/', controller.create);
recordsRouter.delete('/:id', controller.deleteOne);
recordsRouter.put('/:id', controller.edit);

module.exports = recordsRouter;