const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    (this.data = data), (this.next = next);
  }
}
// how to get last element of the array = array.length - 1

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

  delete() {}

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;
    while (currentNode.next != null) {
      // != null or !== undefined, but cannot have strictly !== null tests fail
      currentNode = currentNode.next;
    }
    return currentNode;
    // return this.tail // both above code and this works, long way short way
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
    while (currentNode.next !== undefined) {
      count++;
      currentNode = currentNode.next;
      if (count === num) {
        return currentNode;
      }
    }
  }

  getKthToLast(num) {
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
  /* explanation for above get kth to last problem

  imagine the nodes are 1, 2, 3, 4, 5 so size = 5 or count + 1
  kth to last will never be 0th
  1st to last means last = 5
  2nd to last means last minus one = 4
  so kth is always last + 1
  size - kth = answer
  check if count = size - kth
  return current node with that count

*/

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

  toArray() {}
  containsDuplicates() {}
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
