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

  // getFirstElement() of the linked list
  getFirst() {
    return this.head;
  }
  // getLastElement() of thr linked list
  getLast() {
    let node = this.head;
    if (!this.head) return null;
    while (node.next) {
      node = node.next;
    }
    return node;
  }
  // search() - find a element by key & return data
  search(findKey) {
    let node = this.head;
    while (node !== null && node.data !== findKey) {
      node = node.next;
    }
    return node;
  }

  // getKth() - retrieve kth element
  getKth(kthElement) {
    let node = this.head;
    let count = 1;
    while (count !== kthElement && node.next) {
      count++;
      node.next;
    }
    return node;
  }

  // getKthToLast() -  retrieve kth from last element
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
  // isEmpty() - check if the list is empty
  isEmpty() {
    return !this.head;
  }

  // clear() - clear the linked list
  clear() {
    this.head = null;
  }

  // toArray() - convert the given data from a linked list into an array
  toArray() {
    let node = this.head;
    let listToArr = [];
    while (node) {
      listToArr.push(node.data);
      node = node.next;
    }
    return listToArr;
  }
}
module.exports = {
  Node,
  LinkedList,
};
