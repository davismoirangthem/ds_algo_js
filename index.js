var SinglyLinkedList = require('./ds/SinglyLinkedList');

let list = new SinglyLinkedList();
list.addData(21);
list.addData(31);
list.addData(11);
list.addData(42);
// list.printList();
// console.log('---------------');
console.log(list.getDataAtIndex(1));
