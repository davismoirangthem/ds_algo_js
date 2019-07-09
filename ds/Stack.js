// let SinglyLinkedList = require('./SinglyLinkedList');
let DoublyLinkedList = require('./DoublyLinkedList');

class Stack{
  constructor(){
    // this.list = new SinglyLinkedList();
    this.list = new DoublyLinkedList();
  }

  push(item){
    this.list.addAtStart(item);
    return true;
  }

  pop(){
    if(this.isEmpty()){
      console.log('Stack Empty');
      return null;
    }
    return this.list.removeFromStart();
  }

  peek(){
    return this.list.getDataAtIndex(0);
  }

  isEmpty(){
    return this.list.getSize() === 0;
  }

  printStack(){
    this.list.printList();
  }
}

module.exports = Stack;
