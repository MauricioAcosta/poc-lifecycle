import { Request, Response, Router } from 'express';
import { uuid } from 'uuidv4';
import config from '../config';
import exampleService from '../services/example.service';

const exampleController = Router();

const endpoint = '/';
exampleController.get(endpoint, (request: Request, response: Response) => {
  try {
    const UUID = uuid();
    const message = exampleService.helloWorld(UUID);
    response.status(200).send({ message });
  } catch (error) {
    response.status(500).send(error);
  }
});

export default exampleController;
