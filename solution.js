const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data, 
    this.next = null
  }
}
class LinkedList {
  constructor(head) {
    this.head = head;
  }
  insert(new_data) {
    let new_node = new Node(new_data);
    if (this.head === null) {
      this.head = new_node; //the new_node also only node is the head
      this.tail = new_node; // and also the tail
    } else {
      new_node.next = this.head; //the next inserted node becomes the head
      this.head = new_node; // the new_node is now the head and the previous node is now the tail
    }
  }
  //create new node/ new LinkedList tests do not pass unless insert()method is created.
  // }
  size() {
    //this code passes but my research has shown me that should have passed is this
    /* let count = 0;
    let temp = this.head;
    while (temp !== null) {
      count++;
      temp = temp.next
    }
      return count;
  }
  */

    let count = 0;
    let temp = this.head;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }

  delete(key) {
    let current = this.head;
    let previous = null;

    while (current !== null && current.data !== key) {
      previous = current;
      current = current.next;
    }
    if (current === null) {
      return "Key not found!";
    } else {
      previous.next = current.next;
    }
  }

  getFirst() {
    return this.head;
  }
  getLast() {
    let current = this.head;
    if (!this.head) return null;
    while (current.next) {
      current = current.next;
    }
    return current;
  }
  search(key) {
    let current = this.head;
    while (current !== null && current.data !== key) {
      current = current.next;
    }

    return current;
  }
  getKth(k) {
    this.k = k;
    let current = this.head;
    
    for (let i = 0; i < this.data; i++) {
      if (current !== null && current === k) {
        return current;
      }else {
        current = current.next;

      }
      
    }
    
  


        // let current = this.head;
    // let index = 0;
    // while (current !== null && index !== k) {
    //   current = current.next;
    //   index++;
    // }
    // if (current === null) {
    //   return null;
    // }
    // return current;
  
  // let linkedList = new LinkedList();
  // let kth = linkedList.getKth(k);

 } getKthToLast(k) {
    //find the kth to the last node in a singly linked list
    let current = this.head;
    let end = this.head;
    for (let i = 0; i < k; i++) {
      if (current === null) {
        return null;
      }
      current = current.next;
    }
    while (current.next !== null) {
      end = end.next;
      current = current.next;
    }
    return end;

    
    // let current = this.head;
    // let end = this.head;
    // for (let i = 0; i < k; i++) {
    //   if (current === null) {
    //     return null;
    //   }
    //   current = current.next;
    // }if (current === null) {
    //   return null
    // }
    // while (current.next !== null) {
    //   end = end.next;
    //   current = current.next;
    // }
    // return end;
  }
  isEmpty() {
    if (this.head) {
      return false;
    } else {
      return true;
    }

  }
  clear() {
 
    this.head = null

  }
  toArray() {
    let result = []
    let current = this.head
    while (current) {
      result.push(current.data)
      current = current.next
    }
    return result;
  }
}
// getkthToLast()
const firstNode = new Node();
// const secondNode = new Node(2);
// firstNode.next = secondNode;

// console.log(firstNode);
module.exports = {
  Node,
  LinkedList,
};
