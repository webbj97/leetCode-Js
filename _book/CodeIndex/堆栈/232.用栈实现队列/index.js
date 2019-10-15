/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stackOne = [],
    this.stackTwo = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    var len = this.stackOne.length
    this.stackOne[len] = x
};
MyQueue.prototype.peek = function() {
    var lenOne = this.stackOne.length
    var lenTwo = this.stackTwo.length
    while(lenOne > 0){
        this.stackTwo[lenTwo] = this.stackOne[lenOne-1]
        lenOne--
        lenTwo++
    }
    return this.stackTwo[lenTwo-1]
};
var queue = new MyQueue()
queue.push('1')
queue.push('2')
queue.push('3')
console.log()
queue.pop()
/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */


/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    
};

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.aStack = []
    this.bStack = []   
  };
  
  /**
   * Push element x to the back of queue. 
   * @param {number} x
   * @return {void}
   */
  MyQueue.prototype.push = function(x) {
    this.aStack.push(x)
  };
  
  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  MyQueue.prototype.pop = function() {
    if(this.bStack.length){
      return this.bStack.pop()
    }
    while(this.aStack.length){
      this.bStack.push(this.aStack.pop())
    }
    return this.bStack.pop()
  };
  
  /**
   * Get the front element.
   * @return {number}
   */
  MyQueue.prototype.peek = function() {
    if(this.bStack.length){
      return this.bStack[this.bStack.length-1]
    }
    while(this.aStack.length){
      this.bStack.push(this.aStack.pop())
    }
    return this.bStack[this.bStack.length-1]
  };
  
  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  MyQueue.prototype.empty = function() {
    while(this.aStack.length){
      this.bStack.push(this.aStack.pop())
    }
    return this.bStack.length <= 0
  
  };