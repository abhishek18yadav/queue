class node{
    val;
    next;
    prev;
    constructor(val){
        this.val= val;
        this.next=null;
        this.prev=null;
    }
};
class deque{
    head;
    tail;
    constructor(){

    }
    addatHead(val){
        let temp = new node(val);
        if(this.head==null){
            this.head=temp;
            this.tail=temp;
            this.head.next = null;
            this.tail.next=null;
            this.head.prev = null;
            this.tail.prev=null;
        }else{
            temp.next= this.head;
            this.head.prev = temp;
            this.head=temp;
        }
    }
    addatTail(val){
        let temp= new node(val);
        if(this.head==null){
            this.head=temp;
            this.tail=temp;
            this.head.next = null;
            this.tail.next=null;
            this.head.prev = null;
            this.tail.prev=null;
        }else{
            this.tail.next=temp;
            temp.prev = this.tail;
            this.tail= this.tail.next;
        }
    }
    removeatHead(){
        let temp= this.head;
        if(this.head== null)return ;
        // if size is 1
        if(this.head.next==null){
            this.head= null;
            this.tail=null;
        }
        else{
            this.head= this.head.next;
            temp.next= null;
            this.head.prev= null;
        }
    }
    removeatTail(){
        let temp= this.tail;
        if(this.tail== null)return ;
        if(this.head.next==null){
            this.head= null;
            this.tail=null;
        }
        this.tail= this.tail.prev;
        this.tail.next= null;
        temp.prev = null;
    }
    display(){
        let temp = this.head;
        while(temp){
            console.log(temp.val)
            temp= temp.next;
        }
    }
};
var dq = new deque();
dq.addatHead(3);
dq.addatHead(4);
dq.addatTail(8);
dq.addatHead(6);
dq.addatTail(9);
dq.addatHead(7);
dq.removeatHead();
dq.display();