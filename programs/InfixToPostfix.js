var Stack = require('../ds/Stack');
const operators = ['^','*','/','+','-'];

const infixToPostFix = function(expression){
  let result = '';
  const precedence = {
    '^': 3, '*': 2, '/': 2, '+': 1, '-': 1
  };
  let s1 = new Stack()
  for(let item of expression){
    if(operators.includes(item)){
      if(s1.isEmpty() || s1.peek() === "(" || precedence[s1.peek()] < precedence[item]){
        s1.push(item);
      }
      else if(precedence[s1.peek()] >= precedence[item]){
        while(precedence[s1.peek()] >= precedence[item]){
          result += s1.pop();
        }
        s1.push(item);
      }
    }
    else if(item === "("){
      s1.push(item);
    }
    else if(item === ")"){
      while(s1.peek() !== "("){
        result += s1.pop();
      }
    }
    else{
      result += item;
    }
  }
  if(!s1.isEmpty()){
    result += s1.pop();
  }
  return result;
};

const InfixtoPostfix = {
  infixToPostFix
};

module.exports = InfixtoPostfix;
