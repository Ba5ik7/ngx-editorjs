import { TestingService } from './testing/testing-again';


export class TestingComponent {

  testingService = new TestingService();

  firstMethod(): void {
    console.log('firstMethod'); // Do NOT follow this method because it's part of the Javascript API
    const secondMethod = this.secondMethod(); // Follow this method
    if (secondMethod && this.fourthMethod()) { // Follow this method
      console.log('firstMethod: secondMethod and fourthMethod are true'); // Do NOT follow this method because it's part of the Javascript API
    }
  }

  secondMethod(): boolean {
    console.log('secondMethod'); // Do NOT follow this method because it's part of the Javascript API
    const thirdMethod = this.testingService.callA() // Follow this method
    return thirdMethod; // return this value
  }

  thirdMethod(): boolean {
    console.log('thirdMethod'); // Do NOT follow this method because it's part of the Javascript API
    return this.fourthMethod(); // Follow this method and follow the return value after following the method
  }

  fourthMethod(): boolean {
    console.log('fourthMethod'); // Do NOT follow this method because it's part of the Javascript API
    return this.testingService.callC(); // return this value and return to the parent method
  }
}