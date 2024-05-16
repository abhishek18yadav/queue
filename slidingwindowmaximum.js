/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
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
    front(){
        if(this.head==null)return null;
        else return this.head.val;
    }
    back(){
        if(this.tail==null)return null;
        else return this.tail.val;
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
            this.head= temp.next;
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
        else {
            this.tail = temp.prev;
            this.tail.next= null;
            temp.prev= null;
        }
    }
    display(){
        let temp = this.head;
        while(temp){
            console.log(temp.val)
            temp= temp.next;
        }
    }
    empty(){
        return this.head==null;
    }
};
var maxSlidingWindow = function(nums, k) {
    var dq = new deque();
    let arr = [];
    for(let i=0; i<k ; i++){
        if(dq.empty()){
            dq.addatHead(i);
            continue;
        }
        while(!dq.empty() && nums[i]>nums[dq.back()]){
            dq.removeatTail();
        }
        dq.addatTail(i);
    }

    arr.push(nums[dq.front()]);
    let size = nums.length;
    for(let j=k; j<size; j++){
        while(!dq.empty() && dq.front()<= j-k){
            dq.removeatHead();             
        }  

        while(!dq.empty() && nums[j]>nums[dq.back()]){
            dq.removeatTail();
        }
        dq.addatTail(j);
        arr.push(nums[dq.front()]);
    }
    return arr;
};
