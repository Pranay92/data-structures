module.exports = list;


function list() {
  
  this.node = {
    data : null,
    next : null,
    end : null
  };

  this.add = function(data) {
    
    if (this.node.data && !this.node.next) {
      this.node.next = makeNode(data);
      this.node.end =  this.node.next;
      return;
    }

    if(!this.node.data) {
      this.node.data = data;
      return;
    }

    this.node.end.next = makeNode(data);
    this.node.end = this.node.end.next;

  };

  var makeNode = function(data) {
    var node = {
      data : data,
      next :  null
    };

    return node;
  }

  this.remove = function() {

  };
}