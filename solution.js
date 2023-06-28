const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    (this.data = data), (this.next = next);
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(data) {
    this.data = data; //data = 1
    if (!this.head) {
      this.head = new Node(this.data);
      return this.head;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(this.data);
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
  getLast() {}
  search() {}
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
