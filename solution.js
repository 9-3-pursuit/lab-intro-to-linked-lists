const { nums, words } = require("./data/data.js");

class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor (head = null) {
    this.head = head
  }
  insert (data) {
    this.data = data
    if (!this.head) {
      this.head = new Node(this.data);
      return this.head;
    }
    let currentNode = this.head;

    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(this.data);
  }
  size () {
    let length = 0;
    let currentNode = this.head;
    while(currentNode){
      length++
      currentNode = currentNode.next;
    }
    return length;
  }
}

module.exports = {
  Node,
  LinkedList,
};
