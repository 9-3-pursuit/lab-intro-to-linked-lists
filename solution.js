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
    let length = 0;
    let node = this.head;
    while (node) {
      length++;
      node = node.next;
    }
    return length;
  }
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
  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head;
    if (!node) return null;
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
  getKth(kthElement) {
    let node = this.head;
    let count = 1;
    while (count !== kthElement && node.next) {
      count++;
      node.next;
    }
    return node;
  }
  getKthToLast(kthLastElement) {
    let node = this.head;
    let amtOfNodes = 0;
    while (node) {
      amtOfNodes++;
      node = node.next;
    }
    let countKth = 1;
    node = this.head;
    while (countKth < amtOfNodes - kthLastElement) {
      countKth++;
      node = node.next;
    }
    return node;
  }
  isEmpty() {
    return !this.head;
  }
  clear() {
    this.head = null;
  }
  toArray() {
    let node = this.head;
    let listToArr = [];
    while (node) {
      listToArr.push(node.data);
      node = node.next;
    }
    return listToArr;
  }
  containsDuplicates() {
    let node = this.head;
    let copy = {};
    while (node) {
      if (copy[node.data]) {
        return true;
      } else {
        copy[node.data] = 1;
      }
      node = node.next;
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};
