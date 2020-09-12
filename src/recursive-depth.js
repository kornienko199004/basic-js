const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      if (arr.length === 0) {
        arr.push(1);
      }
      const children = arr.map((item) => this.calculateDepth(item));
      return 1 + Math.max(...children);
    }
    return 0;

  }

  calculateDepth1(arr) {
    console.log('arr = ', arr);
    if (Array.isArray(arr)) {
      const children = arr.map((item) => this.calculateDepth(item));
      return 0 + Math.max(...children);
    }
    return 0;
    // return Array.isArray(arr) ? 
    // 1 + Math.max(...arr.map.bind(this, this.calculateDepth)) :
    // 0;
    // const [item, ...rest] = arr;
    // if (arr.length === 0) {
    //   return this.maxDepth;
    // }

    // if (Array.isArray(item)) {
    //   const instance = new DepthCalculator();
    //   instance.currentDepth = this.currentDepth + 1;
    //   instance.calculateDepth(item);
    //   console.log(instance);
    //   console.log('this.maxDepth', this.maxDepth);
    //   if (this.maxDepth < instance.currentDepth) {
    //     this.maxDepth = instance.currentDepth;
    //   }
    // }
    // return this.calculateDepth(rest);
    //   // const fn = (arr, count) => {
    //   //   let newCount = count;
    //   //   for (let item of arr) {
    //   //     if (Array.isArray(item)) {
    //   //       const nestedCount = fn(item, 1);
    //   //       if (nestedCount + count > newCount) {
    //   //         newCount += nestedCount;
    //   //       }
    //   //     }
    //   //   }
    //   //   return newCount;
    //   // }

    //   // return fn(arr, 1);
  }
};