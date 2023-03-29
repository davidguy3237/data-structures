var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var keys = Object.keys(this.storage);
  if (keys.length > 0) {
    this.storage[keys[keys.length - 1] + 1] = value;
  } else {
    this.storage['0'] = value;
  }
};

Queue.prototype.dequeue = function() {
  var keys = Object.keys(this.storage);
  if (keys.length > 0) {
    var output = this.storage[keys[0]];
    delete this.storage[keys[0]];
    return output;
  } else {
    return;
  }
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};