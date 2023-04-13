export class TestingService {
  callA(): boolean {
    console.log('callA'); // Do NOT follow this method because it's part of the Javascript API
    const callB = this.callB(); // Follow this method
    return callB === this.callC(); // Follow this method
  }

  callB(): boolean {
    console.log('callB'); // Do NOT follow this method because it's part of the Javascript API
    const callD = this.callD(); // Follow this method
    return callD; // return this value
  }

  callC(): boolean {
    console.log('callC'); // Do NOT follow this method because it's part of the Javascript API
    return true; // Follow this method and follow the return value after following the method
  }

  callD(): boolean {
    console.log('callD'); // Do NOT follow this method because it's part of the Javascript API
    return true; // return this value and return to the parent method
  }
}