var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var keys = Object.keys(storage);
    if (keys.length > 0) {
      storage[Number(keys[keys.length - 1]) + 1] = value;
    } else {
      storage['0'] = value;
    }
  };

  someInstance.dequeue = function() {
    var keys = Object.keys(storage);
    var output = storage[keys[0]];
    delete storage[keys[0]];
    return output;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
