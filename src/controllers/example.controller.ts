import { Request, Response, Router } from 'express';
import { uuid } from 'uuidv4';
import exampleService from '../services/example.service';
import config from '../config';

const exampleController = Router();

const endpoint = '/';
exampleController.get(
  endpoint,
  async (request: Request, response: Response) => {
    try {
      const UUID = uuid();
      const message = await exampleService.helloWorld(UUID);
      response.status(200).send({ message });
    } catch (error) {
      response.status(500).send(error);
    }
  },
);

export default exampleController;
