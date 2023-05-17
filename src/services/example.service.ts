import exampleUtility from '../utilities/example';

export default class ExampleService {
  public static async helloWork(UUID: string) {
    return await exampleUtility.helloWork(UUID);
  }
}
