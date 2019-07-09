let SinglyLinkedList = require('./SinglyLinkedList');

class Queue{
  constructor(){
    this.list = new SinglyLinkedList();
  }

  enqueue(item){
    this.list.addAtEnd(item);
    return true;
  }

  dequeue(){
    if(this.isEmpty()){
      console.log('Empty Queue');
      return null;
    }
    return this.list.removeFromStart();
  }

  isEmpty(){
    return this.list.getSize() === 0;
  }

  printQueue(){
    this.list.printList();
  }
}

module.exports = Queue;
