const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    this.data = data; 
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = null;
  }

  insert(data) {
    this.data = data;
    if (!this.head) {
      this.head = new Node(this.data);
      return this.head;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(this.data);
    this.tail = current.next;
  }

  size() {
    let count = 0;
    let curr = this.head;
    while (curr !== undefined) {
      count++;
      curr = curr.next;
    }
    return count;
  }

  delete(key) {
    let current = this.head;
    let previous = this.head;
    while (current.next !== undefined) {
      if (current.data === key) {
        previous.next = current.next;
        current = current.next;
      } else {
        previous = current;
        current = current.next;
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
    let current = this.head;
    while (current.next !== undefined) {
      if (current.data === key) {
        return current;
      }
      current = current.next;
    }
  }

  getKth(num) {
    let currentEl = this.head;
    let count = 0;
    while (currentEl !== undefined) {
      if (count === this.size() - num) {
        return currentEl;
      }
      count++;
      currentEl = currentEl.next;
    }
  }

  getKthToLast(num) {
    let currentEl = this.head;
    let count = 0;
    while (currentEl.next !== undefined) {
      count++;
      currentEl = currentEl.next;
      if (count === num) {
        return currentEl;
      }
    }
  }


  isEmpty() {
    if (!this.head  && !this.tail) {
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
    let current = this.head;
    while (current !== undefined) {
      arr.push(current.data);
      current = current.next;
    }
    return arr.reverse();
  }

  containsDuplicates() {
    let current = this.head;
    while (current !== undefined) {
      let nextNode = current.next;
      while (nextNode !== undefined) {
        if (current.data === nextNode.data) {
          return true;
        }
        nextNode = nextNode.next;
      }
      current = current.next;
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

console.log(numList);
module.exports = {
  Node,
  LinkedList,
};