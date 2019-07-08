var Stack = require('../ds/Stack');
var infixToPostFix = require('./infixToPostFix');

const infixToPrefix = function(expression){
  let s1 = new Stack(), expr = '', result = '';
  for(let item of expression){
    s1.push(item);
  }
  while(!s1.isEmpty()){
    let temp = s1.pop();
    if(temp === "("){
      expr += ")";
    }
    else if(temp === ")"){
      expr += "("
    }
    else{
      expr += temp;
    }
  }
  let postfix = infixToPostFix(expr);
  for(let char of postfix){
    s1.push(char);
  }
  while(!s1.isEmpty()){
    result += s1.pop();
  }
  return result;
}

module.exports = infixToPrefix;
