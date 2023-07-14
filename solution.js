const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  setNext(val) {
    this.next = val;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
    this.tail = null;
  }
  insert(node) {
    let newNode = new Node(node);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.setNext(newNode);
    }
    this.head = newNode;
  }
}

module.exports = {
  Node,
  LinkedList,
};
