const { nums, words } = require("./data/data.js");
 
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(data){
    let newNode = new Node(data);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  size(){
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next
    }
    return count;
  }

  delete(data){
    let node = this.head;
    let counter = 0;
    while (node.data !== data && node.next){
      counter++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for(let i = 1; i < counter; i++){
      node = node.next
    }
    node.next = foundNode.next;
  }

  getFirst(){
    return this.head;
  }

  getLast(){
    return this.tail;
  }

  search(key){
    let node = this.head;
    while (node !== null && node.data !== key){
      node = node.next;
    }
    return node;
  }

  getKth(k) {
    let node = this.head;
    let index = 0;
    while (node && k !== index) {
      node = node.next;
      index++;
    }
    return node;
  }

  getKthToLast(k) {
    let node = this.tail;
    let index = 0;
    while (node) {
      if ((this.size() - k) !== index) return node
      node = node.next;
      index++;
    }
  }

  isEmpty(){
    return (this.head === null && this.tail === null);
  }

  clear(){
    this.head = null;
    this.tail = null;
  }

  toArray(){
    let node = this.head;
    let arr = []
    while (node !== null){
      arr.unshift(node.data);
      node = node.next
    }
    return arr;
  }

  containsDuplicates(){}

}
module.exports = {
  Node,
  LinkedList,
};
