class Node{
  constructor(data){
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.lastNode = null
  }

  addAtStart(data){
    let node = new Node(data);
    if(this.head){
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    else{
      this.head = node;
      this.lastNode = node;
    }
  }

  addAtEnd(data){
    let node = new Node(data);
    if(this.lastNode){
      this.lastNode.next = node;
      node.prev = this.lastNode;
      this.lastNode = node;
    }
    else{
      this.head = node;
      this.lastNode = node;
    }
  }

  removeFromStart(){
    if(this.isEmpty()){
      console.log('Empty List');
      return null;
    }
    let currentNode = this.head;
    this.head = currentNode.next;
    this.head.prev = null;
    currentNode.next = null;
    return currentNode.data;
  }

  removeFromEnd(){
    if(this.isEmpty()){
      console.log('Empty List');
      return null;
    }
    let currentNode = this.lastNode;
    this.lastNode = currentNode.prev;
    this.lastNode.next = null;
    currentNode.prev = null;
    return currentNode.data;
  }

  findAndRemove(data){
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.data === data){
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
        currentNode = null;
        return true;
      }
      currentNode = currentNode.next;
    }
    console.log(`${data} Not Found`);
    return false;
  }

  findAndRemoveAll(key,currentNode=this.head){
    if(!currentNode){
      return true;
    }
    let cursor = currentNode.next;
    if(key === currentNode.data){
      currentNode.prev.next = cursor;
      cursor.prev = currentNode.prev;
      currentNode = null;
    }
    return this.findAndRemoveAll(key,cursor)
  }

  search(data,currentNode=this.head){
    if(!currentNode){
      return false;
    }
    if(currentNode.data === data){
      return true;
    }
    return this.search(data,currentNode.next);
  }

  printList(currentNode=this.head){
    while(currentNode){
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  printReverse(currentNode=this.lastNode){
    while(currentNode){
      console.log(currentNode.data);
      currentNode = currentNode.prev;
    }
  }

  reverse(currentNode=this.head){
    if(!currentNode){
      return currentNode;
    }
    let tempNode = null;
    while(currentNode){
      tempNode = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = tempNode;
      currentNode = currentNode.prev;
    }
    this.head = tempNode.prev;
  }

  findPair(sum,forwardNode=this.head,backwardNode=this.lastNode){
    if(forwardNode === backwardNode){
      return null;
    }
    if(forwardNode.data + backwardNode.data < sum){
      return this.findPair(sum,forwardNode.next,backwardNode);
    }
    else if(forwardNode.data + backwardNode.data > sum){
      return this.findPair(sum,forwardNode,backwardNode.prev);
    }
    else if(forwardNode.data + backwardNode.data === sum){
      console.log(`(${forwardNode.data},${backwardNode.data})`);
      return this.findPair(sum,forwardNode.next,backwardNode);
    }
  }

  removeDuplicate(currentNode=this.head){
    if(!currentNode || !currentNode.next){
      return null;
    }
    let nextPointer = currentNode.next;
    while(currentNode.data === nextPointer.data){
      nextPointer = nextPointer.next;
    }
    currentNode.next = nextPointer;
    nextPointer.prev = currentNode;
    return this.removeDuplicate(currentNode.next);
  }

  getSize(currentNode=this.head,counter=0){
    if(!currentNode){
      return counter;
    }
    return this.getSize(currentNode.next,counter+1);
  }

  isEmpty(){
    return this.getSize() === 0;
  }
}

module.exports = DoublyLinkedList;
