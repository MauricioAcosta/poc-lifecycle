import exampleUtility from '../utilities/example';

export default class ExampleService {
  public static helloWorld(UUID: string) {
    return exampleUtility.helloWorld(UUID);
  }
}
