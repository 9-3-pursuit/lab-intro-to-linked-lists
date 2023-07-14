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
  size() {
    if (!this.head) {
      return 0;
    }
    let curr = this.tail;
    let count = 1;
    while (curr.next) {
      count++;
      curr = curr.next;
    }
    return count;
  }
  delete(key) {
    let curr = this.tail;
    let next = this.tail.next;
    while (next.data != key || !next) {
      curr = curr.next;
      next = curr.next;
    }
    curr.setNext(next.next);
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    return this.tail;
  }
  search(key) {
    let curr = this.tail;
    while (curr.data != key || !curr.next) {
      curr = curr.next;
    }
    return curr;
  }
  isEmpty() {
    return !this.head;
  }
  clear() {
    this.head = null;
  }
  getKth(k) {
    let size = this.size();
    let curr = this.tail;
    for (let i = 0; i < size - k; i++) {
      curr = curr.next;
    }
    return curr;
  }
  getKthToLast(k) {
    let curr = this.tail;
    for (let i = 0; i < k; i++) {
      curr = curr.next;
    }
    return curr;
  }
  toArray() {
    let accum = [];
    let curr = this.tail;
    while (curr) {
      accum.unshift(curr.data);
      curr = curr.next;
    }
    return accum;
  }
  containsDuplicates() {
    const set = new Set(this.toArray());
    return this.toArray().length !== set.size;
  }
}

module.exports = {
  Node,
  LinkedList,
};
