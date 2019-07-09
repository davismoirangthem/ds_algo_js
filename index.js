var DoublyLinkedList = require('./ds/DoublyLinkedList');

let list = new DoublyLinkedList();
list.addAtEnd(1);
list.addAtEnd(2);
list.addAtEnd(2);
list.addAtEnd(2);
list.addAtEnd(2);
list.addAtEnd(3);
list.addAtEnd(4);
list.addAtEnd(5);
list.addAtEnd(6);
list.addAtEnd(6);
list.addAtEnd(8);
list.addAtEnd(9);

list.printList();
console.log('---------------');
list.findAndRemoveAll(2);
list.findAndRemoveAll(6);
list.printList();
