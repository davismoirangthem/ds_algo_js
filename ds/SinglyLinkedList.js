class Node{
  constructor(data,next){
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(head){
    this.head = null;
  }

  addData(data){
    let node = new Node(data);
    if(this.head){
      let currentNode = this.head;
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    else{
      this.head = node;
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

  search(data){
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.data === data){
        console.log(`${data} Found.`);
        return true;
      }
      currentNode = currentNode.next;
    }
    console.log(`${data} Not Found`);
    return false;
  }

  searchRecursive(data,currentNode=this.head){
    if(currentNode){
      if(currentNode.data === data){
        console.log(`${data} Found`);
        return true;
      }
      return this.searchRecursive(data,currentNode.next);
    }
    console.log(`${data} Not Found`);
    return false;
  }

  getSize(){
    let currentNode = this.head, counter = 0;
    while(currentNode){
      counter += 1;
      currentNode = currentNode.next;
    }
    return counter;
  }

  getSizeRecursive(currentNode=this.head,counter=0){
    if(currentNode){
      return this.getSizeRecursive(currentNode.next,counter+1);
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

  printList(){
    let currentNode = this.head;
    while(currentNode){
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

module.exports = SinglyLinkedList;
