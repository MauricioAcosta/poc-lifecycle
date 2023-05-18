import { Request, Response, Router } from 'express';
import { uuid } from 'uuidv4';
import exampleService from '../services/example.service';

const exampleController = Router();
const endpoint = '/V1/hello';
exampleController.get(
  endpoint,
  async (request: Request, response: Response) => {
    try {
      const UUID = uuid();
      const message = await exampleService.helloWork(UUID);
      response.status(200).send({ message });
    } catch (error) {
      response.status(500).send(error);
    }
  },
);

const endpoint2 = '/';
exampleController.get(
  endpoint2,
  async (request: Request, response: Response) => {
    try {
      const UUID = uuid();
      response.status(200).send({ message: UUID });
    } catch (error) {
      response.status(500).send(error);
    }
  },
);

export default exampleController;
