var SinglyLinkedList = require('./ds/SinglyLinkedList');

let list = new SinglyLinkedList();
list.add(20);
// list.add(4);
// list.add(15);
// list.add(35);
// list.add(42);
// list.add(44);
// list.add(54);
// list.add(64);
// list.add(14);
// list.add(74);
// list.add(104);
// list.add(114);
// list.formLoop();
// list.printList();
console.log(list.detectLoop());
