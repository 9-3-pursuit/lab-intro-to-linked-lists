const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    (this.data = data), (this.next = next);
  }
}

class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  insert(data) {
    this.data = data;
    if (!this.head) {
      this.head = new Node(this.data);
      return this.head;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(this.data);
    this.tail = currentNode.next;
  }

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode !== undefined) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  delete() {}

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;
    while (currentNode.next != null) {
      // != null or !== undefined, but cannot have strictly !== null tests fail
      currentNode = currentNode.next;
    }
    return currentNode;
    // return this.tail // both above code and this works, long way short way
  }

  search(key) {
    let currentNode = this.head;
    while (currentNode.next !== undefined) {
      if (currentNode.data === key) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }
  
  getKth() {}
  getKthToLast() {}
  isEmpty() {}
  clear() {}
  toArray() {}
  containsDuplicates() {}
}

wordList = new LinkedList();
for (let word of words) {
  wordList.insert(word);
}
numList = new LinkedList();
for (let num of nums) {
  numList.insert(num);
}

console.log(numList.size());

module.exports = {
  Node,
  LinkedList,
};
