import exampleUtility from '../utilities/example';

export default class exampleService {
  constructor() {}

  public static async helloWork(UUID: string) {
    return await exampleUtility.helloWork(UUID);
  }
}
