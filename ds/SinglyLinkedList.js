class Node{
  constructor(data,next){
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(head){
    this.head = null;
    this.lastNode = null;
  }

  add(data){
    let node = new Node(data);
    if(this.lastNode){
      this.lastNode.next = node;
      this.lastNode = node;
    }
    else{
      this.head = node;
      this.lastNode = node;
    }
  }

  addAtStart(data){
    let node = new Node(data);
    if(this.head){
      node.next = this.head;
      this.head = node;
    }
    else{
      this.head = node;
      this.lastNode = node;
    }
  }

  removeData(data){
    if(this.head){
      let currentNode = this.head, nextNode = this.head.next;
      if(currentNode.data === data){
        this.head = nextNode;
        currentNode = null;
        return true;
      }
      while(nextNode){
        if(nextNode.data === data){
          currentNode.next = nextNode.next;
          return true;
        }
        currentNode = nextNode;
        nextNode = nextNode.next;
      }
      console.log(`${data} Not Found`);
    }
    else{
      console.log('List is Empty');
    }
  }

  search(data,currentNode=this.head){
    if(currentNode){
      if(currentNode.data === data){
        console.log(`${data} Found`);
        return true;
      }
      return this.search(data,currentNode.next);
    }
    console.log(`${data} Not Found`);
    return false;
  }

  getSize(currentNode=this.head,counter=0){
    if(currentNode){
      return this.getSize(currentNode.next,counter+1);
    }
    return counter;
  }

  getDataAtIndex(index,currentNode=this.head,counter=0){
    if(!currentNode){
      return null;
    }
    if(counter === index){
      return currentNode.data;
    }
    return this.getDataAtIndex(index,currentNode.next,counter+1);
  }

  getNthFromLast(n){
    let currentNode = this.head, referenceNode = this.head, counter = 0;
    while(counter < n){
      referenceNode = referenceNode.next;
      counter += 1;
    }
    while(referenceNode){
      currentNode = currentNode.next;
      referenceNode = referenceNode.next;
    }
    return currentNode.data;
  }

  printMiddle(){
    let size = this.getSize();
    if(size > 0){
      if(size % 2 === 0){
        console.log(this.getDataAtIndex(parseInt(size/2 - 1)),this.getDataAtIndex(parseInt(size/2)));
      }
      else{
        console.log(this.getDataAtIndex(parseInt(size/2)));
      }
    }
    else{
      console.log('Empty List');
    }
  }

  formLoop(){
    this.lastNode.next = this.head.next;
  }

  detectLoop(firstNode=this.head,secondNode=null){
    if(!firstNode || !firstNode.next){
      return false;
    }
    if(secondNode && !secondNode.next){
      return false;
    }
    secondNode = secondNode ? secondNode.next.next : firstNode.next.next;
    if(firstNode === secondNode){
      return true;
    }
    return this.detectLoop(firstNode.next,secondNode);
  }

  printList(){
    let currentNode = this.head;
    while(currentNode){
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

module.exports = SinglyLinkedList;
