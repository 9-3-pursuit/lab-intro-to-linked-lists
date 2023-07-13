const { nums, words } = require('./data/data.js');


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }


  insert(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode; 
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  
  size() {
    let length = 0;
    let currentNode = this.head;
    while (currentNode) {
      length++;
      currentNode = currentNode.next;
    }
    return length;
  }

  
  delete(data) {
    let count = 0;
    let node = this.head;
    while (node.data !== data && node.next) {
      count++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < count; i++) {
      node = node.next;
    }
    node.next = foundNode.next;
  }

  
  getFirst() {
    return this.head;
  }


  getLast() {
    let node = this.head;
    if (!this.head) return null;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  
  search(key) {
    let node = this.head;
    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }

  
  getKth(k) {
    let count = 1;
    let currentNode = this.head;

    while (currentNode !== null && count < k) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  
  getKthToLast(k) {
    let indx = this.size() - k;
    return this.getKth(indx);
  }

  
  isEmpty() {
    return this.head === null;
  }

  
  clear() {
    this.head = null;
  }

  
  toArray() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return arr;
  }

  
  containsDuplicates() {
    //Create an array:
    let arr = this.toArray();
    
    let unique = new Set(arr);
    return unique.size !== arr.length ? true : false;
  }
}


module.exports = {
  Node,
  LinkedList,
};
