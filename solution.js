const { nums, words } = require("./data/data.js");

// create a Node class w/ properties
// properties of data & next
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// create a linked list w/ properties
// properties of head
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // Linked Liast Methods

  // insert() method - add to the linked list using an insert method
  // can create a new node, new linked list
  insert(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  // size() - count the length of the linked list
  size() {
    let sizeCount = 0;
    let node = this.head;
    while (node) {
      sizeCount++;
      node = node.next;
    }
    return sizeCount;
  }
  
  // delete() - by key from the linked list
  delete(key) {
    let node = this.head;
    let counter = 0;
    while (node.data !== key && node.next) {
      counter++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < counter; i++) {
      node = node.next;
    }
    node.next = foundNode.next;
  }
}
module.exports = {
  Node,
  LinkedList,
};
