const { nums, words } = require("./data/data.js");

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
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  delete(data) {
    let node = this.head;
    let counter = 0;
    while (node.data !== data && node.next) {
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

  getFirst() {
    return this.head;
  }

  getLast() {
    let current = this.head;
    while (current.next) {
      current = current.next
    }
    return current;
  }

  search(key) {
    let node = this.head;
    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }

  getKth(k) {
    let node = this.head;
    for (let i = 1; i < k; i++) {
      node = this.next
    }
    return node;
  }

  getKthToLast(k) {
    let totalElements = this.size();
    let target = totalElements - k;
    let node = this.head;
    for (let i = 1; i < target; i++) {
      node = node.next
    }
    return node;
  }

  isEmpty() {
    if (!this.head) {
      return true
    } else {
      return false
    }
  }

  clear() {
    this.head = null;
  }

  toArray() {
    let totalElements = this.size();
    let newArray = [];
    let node = this.head;
    for (let i = 0; i < totalElements; i++) {
      newArray.push(node.data)
      node = node.next;
    }
    return newArray;
  }

  containsDuplicates() {
    let node = this.head;
    let nodeDataArray = [];
    while (node) {
      if (nodeDataArray.includes(node.data)) {
        return true
      } else {
        nodeDataArray.push(node.data);
        node = node.next
      }
    }
    return false;
  }
}


module.exports = {
  Node,
  LinkedList,
};
