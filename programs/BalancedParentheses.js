var Stack = require('../ds/Stack');
const open = ["(","{","["];
const close = [")","}","]"];
const mapping = {
  ")":"(",
  "}":"{",
  "]":"["
};

const balancedParentheses = function(expression){
  let stack = new Stack();
  for(let item of expression){
    if(open.includes(item)){
      stack.push(item);
    }
    else if(close.includes(item)){
      if(stack.peek() === mapping[item]){
        stack.pop();
      }
      else{
        return false;
      }
    }
  }
  return true;
};

module.exports = balancedParentheses;
