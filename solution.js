// - Create a linked list with properties
//   - head

const { nums, words } = require("./data/data.js");

// - Create a Node class with properties
//   - data
//   - next
class Node {
  constructor(data, next) {
    (this.data = data), (this.next = next);
  }
}
// - Create a linked list with properties
//   - head

// - Linked List Methods
//   - `insert`
//   - `size`
//   - `delete` by key
//   - `getFirst` element
//   - `getLast` element
//   - `search` an element by key and return data
//   - `getKth` retrieve kth element
//   - `getKthToLast` retrieve kth from last element
//   - `isEmpty` check if list is empty
//   - `clear` the linked list
//   - `toArray`convert data from linked list to an array
//   - `containsDuplicates` check for duplicates - return true if contains duplicates, false if not

class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }
  insert(data) {
    this.data = data;
    if (!this.head) {
      this.head = new Node(this.data);
      return this.head; // if the head is empty, set the value as new node & pass data
    }
    let currentNode = this.head; // if the current node is the head, point to the next node
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(this.data); // continue pointing to the next node until you get to the tail
    this.tail = currentNode.next;
  }
  size() {
    let count = 0; // let count start at zero
    let currentNode = this.head;
    while (currentNode !== undefined) {
      // start at the head & while it is not undef increment
      count++;
      currentNode = currentNode.next; // point to the next node
    }
    return count; // return value of count
  }
  delete(key) {
    let currentNode = this.head;
    let previous = this.head; // start at head node & reassign pointer to next node in prep for deletion if value is not empty
    while (currentNode.next !== undefined) {
      if (currentNode.data === key) {
        // while there is a value
        previous.next = currentNode.next; // set the prior node as next (move everything up one)
        currentNode = currentNode.next;
      } else {
        previous = currentNode; // otherwise set value to current node & move it up one
        currentNode = currentNode.next;
      }
    }
  }
  getFirst() {
    if (this.tail) {
      return this.tail; // if there is a value in tail return it otherwise return null
    }
    return null;
  }

  getLast() {
    if (this.head) {
      return this.head;
    }
    return null;
  }
  search(key) {
    let currentNode = this.head;
    while (currentNode.next !== undefined) {
      if (currentNode.data === key) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  getKth(num) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode !== undefined) {
      if (count === this.size() - num) {
        return currentNode;
      }
      count++;
      currentNode = currentNode.next;
    }
  }

  getKthToLast(num) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode.next !== undefined) {
      count++;
      currentNode = currentNode.next;
      if (count === num) {
        return currentNode;
      }
    }
  }

  isEmpty() {
    if (this.head === null && this.tail === null) {
      return true;
    } else {
      return false;
    }
  }

  clear() {
    this.head = null;
    this.tail = null;
    return this.head;
  }

  toArray() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== undefined) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return arr.reverse();
  }

  containsDuplicates() {
    let currentNode = this.head;
    while (currentNode !== undefined) {
      let nextNode = currentNode.next;
      while (nextNode !== undefined) {
        if (currentNode.data === nextNode.data) {
          return true;
        }
        nextNode = nextNode.next;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

wordList = new LinkedList();
for (let word of words) {
  wordList.insert(word);
}
numList = new LinkedList();
for (let num of nums) {
  numList.insert(num);
}

numList.clear();

module.exports = {
  Node,
  LinkedList,
};
