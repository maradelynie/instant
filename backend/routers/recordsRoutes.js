const express = require('express');
const controller = require('../services/recordsServices');

const recordsRouter = express.Router();

recordsRouter.get('/:user/:page?', controller.read);
recordsRouter.post('/', controller.create);
recordsRouter.delete('/:id', controller.deleteOne);
recordsRouter.patch('/:id', controller.edit);

module.exports = recordsRouter;
