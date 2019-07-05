class Stack{
  constructor(){
    this.stack = [];
  }

  push(item){
    this.stack.push(item);
    return true;
  }

  pop(){
    if(this.isEmpty()){
      console.log('Stack Empty');
      return null;
    }
    return this.stack.pop();
  }

  peek(){
    if(this.isEmpty()){
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty(){
    return this.stack.length === 0;
  }

  printStack(){
    for(let item of this.stack){
      console.log(item);
    }
  }
}

module.exports = Stack;
