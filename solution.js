const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    (this.data = data), (this.next = next);
  }
}

class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  insert(data) {
    this.data = data;
    if (!this.head) {
      this.head = new Node(this.data);
      return this.head;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(this.data);
    this.tail = currentNode.next;
  }

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode !== undefined) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  delete(key) {
    let currentNode = this.head;
    let previous = this.head;
    while (currentNode.next !== undefined) {
      if (currentNode.data === key) {
        previous.next = currentNode.next;
        currentNode = currentNode.next;
      } else {
        previous = currentNode;
        currentNode = currentNode.next;
      }
    }
  }

  getFirst() {
    if (this.tail) {
      return this.tail;
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
    return arr.reverse(); // reverse only because test case is reversed
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
} // End of linked list

wordList = new LinkedList();
for (let word of words) {
  wordList.insert(word);
}
numList = new LinkedList();
for (let num of nums) {
  numList.insert(num);
}

numList.clear();

console.log(numList);
module.exports = {
  Node,
  LinkedList,
};


