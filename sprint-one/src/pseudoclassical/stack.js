var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};


Stack.prototype.push = function(value) {
  var keys = Object.keys(this.storage);
  if (keys.length > 0) {
    this.storage[keys[keys.length - 1] + 1] = value;
  } else {
    this.storage['0'] = value;
  }
};

Stack.prototype.pop = function() {
  var keys = Object.keys(this.storage);
  if (keys.length > 0) {
    var output = this.storage[keys[keys.length - 1]];
    delete this.storage[keys[keys.length - 1]];
    return output;
  } else {
    return;
  }
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};