import exampleUtility from '../utilities/example';

export default class ExampleService {
  public static async helloWorld(UUID: string) {
    return await exampleUtility.helloWorld(UUID);
  }
}
