/* NODE LIST (LINKED LIST) */

var LinkedList = function(){
  this.list = new Object(null);
  this.positions = 0; //refers to order of nodes in the list 
};
LinkedList.prototype.addNode = function(node){
  node.position = this.positions;
  this.list[node.position] = node;
  this.positions++;
  if(this.getNodeByPos(node.position-1)){
    node._prev = this.getNodeByPos(node.position-1);
  }else{
    this.first = node;
  }
  if(this.getNodeByPos(node.position-2)){
    this.getNodeByPos(node.position-1)._next = node;
  }else if(this.getNodeByPos(node.position-1)){
    this.getNodeByPos(node.position-1)._next = node;
  }
};
LinkedList.prototype.addNodes = function(arr){
  for(var i = 0; i < arr.length; i++){
    this.addNode(arr[i]);
  }
};
LinkedList.prototype.getNodeByPos = function(pos){
  return this.list[pos];
};
LinkedList.prototype.display = function(p){
  console.log(list.getNodeByPos(p));
};

var Node = function(name, x, y){
  this.list = list;
  this.name = name;
  this.x = x;
  this.y = y;
};
Node.prototype.self = function(){
  //console.log(this);
};
Node.prototype.prev = function(){
  //console.log(this._prev);
  return this._prev;
};
Node.prototype.next = function(){
  //console.log(this._next);
  return this._next;
};
Node.prototype.draw = function(list,ctx){
  var _self = this;
  if(this.prev() == undefined){
    ctx.moveTo(this.x,this.y);
  }
  dot(this,ctx);
  function dot(node, ctx){
    //draw node dot 
    ctx.arc(node.x, node.y, 3, 0, 2 * Math.PI, false);
    //text
    ctx.fillText(node.name, node.x, node.y-8);
  }
  //call lineTo recursively until you reach a node with 
  //no 'next()' ..then access the 'list' and find the
  //first node, and stroke/lineTo it. 
  function lineTo(nxt, ctx){
    if(nxt != undefined){
      dot(nxt, ctx);
      ctx.lineTo(nxt.x, nxt.y);
      ctx.stroke();
      lineTo(nxt.next(), ctx);
    }else{
      ctx.lineTo(list.first.x,list.first.y);
      ctx.stroke();
    }
  }
  lineTo(this.next(), ctx);
};

//canvas to draw nodes 
var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
ctx.font = "12px monospace";
//ctx.lineWidth = 2;
//nodes 
var list = new LinkedList();
var n1 = new Node('node1', 20, 50);
var n2 = new Node('node2', 150, 20);
var n3 = new Node('node3', 350, 80);
var n4 = new Node('node4', 340, 380);
var n5 = new Node('node5', 80, 300);
list.addNodes([n1,n2,n3,n4,n5]);
//display info about nodes
n2.prev();
n2.self();
n2.next();

n1.draw(list,ctx);
//console.log(n1.next().next().next());

//n1.line(ctx);
