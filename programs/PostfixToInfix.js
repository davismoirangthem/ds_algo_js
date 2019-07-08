var Stack = require('../ds/Stack');
const operators = ['^','*','/','+','-'];

const postfixToInfix = function(expression){
  let s1 = new Stack(), str= '';
  for(let item of expression){
    if(operators.includes(item)){
      let op1 = s1.pop(), op2 = s1.pop();
      str = `(${op2}${item}${op1})`;
      s1.push(str);
    }
    else{
      s1.push(item);
    }
  }
  return s1.pop();
};

module.exports = postfixToInfix;
