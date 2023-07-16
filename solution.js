const { nums, words } = require("./data/data.js");

// console.log(nums);
// console.log(words)

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}


class LinkedList {
  constructor(head = null){
   
    this.head = head
  }
  insert(data){
    const newData = new Node(data)
    newData.next = this.head;
    this.head = newData;
  }
  size(){
    let count = 0;
    let node = this.head;
    while (node){
      count ++;
      node = node.next
    }
      return count;
    }
  
  delete(){
    if (this.head == null) {
      throw new Error("Empty")
    }
    let item = this.head;
    if (item){
      let newItem = item.next;
      this.head = newItem;
      return item
    }
  }
  getFirst(){
    return this.head;
  }
  getLast(){
    let last = this.head;
    if (last){
      while (last.next){
        last = last.next;

      }
    }
    return last;
  }
  search(x) {
    let current = this.head;
    while (current !== null) {
      if (current.data === x) {
        console.log(current.data)
        return current; 
      } else {
        current = current.next;
      }
    }
    return null; 
  }
  
  getKth(k){
    if (k < 0 || k >= this.size()) {
      throw new Error("Invalid index");
    }
    let count = 0;
    let current = this.head;
    while (count < k) {
      current = current.next;
      count++;
    }
    return current.data;
  }
  getKthToLast(){}
  isEmpty(){
    if (this.head == null){
      return true;
    } 
    return false;
  }
  clear(){
    this.head = null;
  }
  toArray(){
    const array = [];
    let current = this.head;
    while (current) {
      array.push(current.data);
      current = current.next;
    }
    return array;


    
  }
  containsDuplicates(){}
}
 let numList = new LinkedList();
 for (let i = 0; i < nums.length; i++){
  numList.insert(nums[i])
 }

 const { inspect } = require("util");
console.log(inspect(numList, {colors: true, depth: 11}));
numList.size();
numList.search(5);
numList.clear();
numList.getFirst();
numList.getLast()
numList.toArray(numList.head)
module.exports = {
  Node,
  LinkedList,
};
