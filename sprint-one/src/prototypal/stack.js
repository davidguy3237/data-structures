var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(stackMethods);
  newInstance.storage = {};
  return newInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var keys = Object.keys(this.storage);
  if (keys.length > 0) {
    this.storage[keys[keys.length - 1] + 1] = value;
  } else {
    this.storage['0'] = value;
  }
};

stackMethods.pop = function() {
  var keys = Object.keys(this.storage);
  if (keys.length > 0) {
    var output = this.storage[keys[keys.length - 1]];
    delete this.storage[keys[keys.length - 1]];
    return output;
  } else {
    return;
  }
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};