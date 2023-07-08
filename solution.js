const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    this.data = data
    this.next = next
    
  }
 
}

class LinkedList{
  constructor(head = null, tail = null) {
    this.head = head
    this.tail = tail 
  }

  insert(data) {
    this.data = data
    let newNode = new Node(this.data)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
      return this.head
    }

    let start = this.head

    while (start.next) {
      start = start.next
    }
    
    start.next = new Node(this.data)
    this.tail = start.next
    // console.log('data:', this.data)
  }


  size() {
    let count = 0

    let current = this.head

    while (current !== undefined) {
      count++
      current = current.next
    }
      return count
  }


  delete(key) {
    let foundData = this.head

    if (foundData === null) {
     return ''
    }
    
    if (foundData.data === key) {
      foundData = foundData.next
      if (foundData === null) {
        this.tail = null
      }
      return ''
    }

    let previous = null

    while (foundData !== null) {
      if (foundData.data === key) {
        previous.next = foundData.next
        if (foundData === this.tail) {
          this.tail = previous
        }
        return ''
      }
      previous = foundData
      foundData = foundData.next
    }
  }

  getFirst() {
    return this.head 

  }

  getLast() {
    return this.tail
  }

  search(key) {

    let foundData = this.head

    while (foundData.next != null) {
      if (foundData.data === key) {
        return foundData
      }
      foundData = foundData.next
    }
    
  }

  getKth(index) {

    let count = 0
    let foundData = this.head

    while (foundData.next != null) {
      count++
      foundData = foundData.next

      if (count === index) {
        return foundData
      }
    }

  }

  getKthToLast(k) {

    let count = 0
    let foundData = this.head
     
    while (foundData != null) {
      foundData = foundData.next
      count++
    }
    
    if (count < k) {
      return null
    }

    foundData = this.head

    for (let i = 1; i < count - k + 1; i++){
      foundData = foundData.next
    }

    return foundData

  }
  
  
  

  isEmpty() {
    if (this.head === null || this.tail === null) {
      return true
    }
    return false
  }

  clear() {
    this.head = null
    this.tail = null
  }

  toArray() {
    let array = []
    let foundData = this.head
    while (foundData) {
      array.push(foundData.data)
      foundData = foundData.next
    }
    
    console.log('array:', array)
    return array.reverse()
  }

  containsDuplicates() {
  
    let foundData = this.head

    while (foundData != null) {
      while (foundData.next != null) {
        if (foundData.data === foundData.next.data) {
          return true
        }
        foundData.next = foundData.next.next
      }
      foundData = foundData.next
    }

    return false
    
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


    // wordList.insert()
    // console.log('test:',wordList)

module.exports = {
  Node,
  LinkedList,
};
