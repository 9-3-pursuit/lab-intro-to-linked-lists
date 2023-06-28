const { nums, words } = require("./data/data.js");

class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor (head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }
  insert (data) {
    this.data = data
    if (!this.head) {
      this.head = new Node(this.data);
      return this.head
    }
    let currentNode = this.head;

    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(this.data);
    this.tail = currentNode.next
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
  delete (key) {
    let temp = this.head;
    let currentNode = this.head;
    while(currentNode.next){
      if (currentNode.data === key) {
        if (currentNode === this.head) {
           this.head = this.head.next;
           currentNode = currentNode.next
        } else {
          temp.next = currentNode.next;
          currentNode = currentNode.next;
        }
        return this.head
      } else {
        temp = currentNode
        currentNode = currentNode.next;
      }
    }
  }
  getFirst () {
    return this.head
  }
  getLast () {
    return this.tail
  }
  search (key) {
    let currentNode = this.head;
    while(currentNode.next){
      if (currentNode.data === key) {
        return currentNode
      }
      currentNode = currentNode.next;
    }
  }
  getKth (kth) {
    let currentNode = this.head;
    let index = -1; 
    while(currentNode){
      index++
      if (kth === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }
  getKthToLast (kth) {
    let currentNode = this.head;
    let index = -1; 
    while(currentNode){
      index++
      if (this.size() - kth === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }
}

let numList = new LinkedList();
for (let num of nums) {
  numList.insert(num);
}
wordList = new LinkedList();
for (let word of words) {
  wordList.insert(word);
}

console.log(numList.size());

module.exports = {
  Node,
  LinkedList,
};
