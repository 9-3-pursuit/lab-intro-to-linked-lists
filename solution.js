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
    this.data = data;
    if (!this.head) {
      this.head = new Node(this.data);
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(this.data);
  }
  size() {}
  delete() {}
  getFirst() {}
  getLast() {}
  search() {}
  getKth() {}
  getKthToLast() {}
  isEmpty() {}
  clear() {}
  toArray() {}
  containsDuplicates() {}
}

module.exports = {
  Node,
  LinkedList,
};
