var Stack = require('../ds/Stack');

const reverse = function (array){
  let stack = new Stack();
  let result = [];
  for(let item of array){
    stack.push(item);
  }
  while(!stack.isEmpty()){
    result.push(stack.pop());
  }
  return result;
};

const sort = function(array,descending=true){
  let s1 = new Stack();
  let s2 = new Stack();
  let result = [];
  for(let item of array){
    if(s1.isEmpty()){
      s1.push(item);
    }
    else{
      if(s1.peek() <= item){
        s1.push(item);
      }
      else{
        while(s1.peek() > item){
          s2.push(s1.pop());
        }
        s1.push(item);
        while(!s2.isEmpty()){
          s1.push(s2.pop());
        }
      }
    }
  }
  while(!s1.isEmpty()){
    result.push(s1.pop())
  }
  if(!descending){
    result = reverse(result);
  }
  return result;
};

const Array = {
  reverse,
  sort
};

module.exports = Array;
