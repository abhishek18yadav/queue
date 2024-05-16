// class node{
//     val;
//     next;
//     constructor(val){
//         this.val=val;
//         next=null;
//     }
// };
// class linkedlist{
//     head;
//     tail;
//     constructor(){
//     }
// }
var node = function(val){
    this.val=val;
    this.next=null
}
var queue= function(){
    this.head ;
    this.tail;
}
queue.prototype.push = function(val){
    let temp = new node(val);
    if(this.head==null)return this.head=this.tail = temp;
    else {this.tail.next=temp;
           this.tail=this.tail.next;
    }
}
queue.prototype.pop = function(){
    if(this.head==null)return;
    else{
        let temp= this.head;
        this.head= this.head.next;
        temp.next=null;
    }
}
queue.prototype.front = function(){
    if(this.head==null)return undefined;
    else return this.head.val;
}
var qu = new queue();
qu.push(2);
qu.push(3);
qu.push(4);
qu.push(5);
qu.push(6);
qu.push(7);
qu.pop();
console.log(qu.front());



