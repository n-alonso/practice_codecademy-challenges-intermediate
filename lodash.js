const lodash = {
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end = 0) {
    if (start > end) [start, end] = [end, start];
    return (number >= start && number < end) ? true : false;
  },
  words(string) {
    const words = string.split(/\W/g);
    return words;
  },
  pad(string, length) {
    const padNeeded = length - string.length;
    if (padNeeded <= 0) {return string}; 
    const padStart = ' '.repeat(Math.floor(padNeeded / 2));
    const padFinish = ' '.repeat(Math.ceil(padNeeded / 2));
    return `${padStart}${string}${padFinish}`;
  },
  has(object, key) {
    const hasValue = typeof object[key] !== 'undefined';
    return hasValue;
  },
  invert(object) {
    const newObject = {};
    for (key in object) {
      newObject[object[key]] = key;
    }
    return newObject;
  },
  findKey(object, callback) {
    for (key in object) {
      if (callback(object[key])) {return key}
    }
    return undefined;
  },
  drop(array, number = 1) {
    let counter = 0;
    while (counter < number) {
      counter++;
      array.shift();
    }
    return array;
  },
  dropWhile(array, predicate) {
    const dropNumber = array.findIndex((element,index) => {
      return !predicate(element, index, array);
    });
    const droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, size = 1) {
    let counter = 0;
    const resultArray = [];
    do {
      resultArray.push(array.slice(counter, counter + size));
      counter += size;
    } while (counter < array.length);
    return resultArray;
  }
};

// Do not write or modify code below this line.
module.exports = lodash;
