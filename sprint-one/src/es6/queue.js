class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    var keys = Object.keys(this.storage);
    if (keys.length > 0) {
      this.storage[keys[keys.length - 1] + 1] = value;
    } else {
      this.storage['0'] = value;
    }
  }

  dequeue() {
    var keys = Object.keys(this.storage);
    if (keys.length > 0) {
      var output = this.storage[keys[0]];
      delete this.storage[keys[0]];
      return output;
    } else {
      return;
    }
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
