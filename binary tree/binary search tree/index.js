function Node(data,left,right) {
  this.data = data;
  this.left  = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

function BST(data) {
  this.root = null;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
  this.removeNode = removeNode;
  if(data) {
    this.root = new Node(data,null,null)  
  }
  this.insert = insert;
}

function getMin(node) {
  var current = this.root
  if(current == null) {
    return null;
  }

  while(current.left !== null) {
    current = current.left;
  }

  return current.data;
}

function getMax(node) {
  var current = this.root
  if(current == null) {
    return null;
  }

  while(current.right !== null) {
    current = current.right;
  }

  return current.data;
}


function inOrder(node) {
  if(node !== null) {
    inOrder(node.left);
    console.log(node.show() + ' ');
    inOrder(node.right);
  }
}

function find(data, node) {

  var current = node || this.root;
  
  if(data == current.data) {
    return current;
  }

  if(data < current.data) {
    current = current.left;
  } else {
    current = current.right;
  }

  if(current == null) {
    return null;
  }

  return find(data,current);

}

function removeNode(data, node) {
  
  var current = node || this.root,
      temp;
  if(current.data == data) {
    
    if(current.left == null && current.right == null) {
      current = null
      return;
    }

    if(current.left == null) {
      current = current.right;
      return;
    }

    if(current.right == null) {
      current = current.left;
      return;
    }

  }

  if(data < current.data) {   
    while(true) {
      current = current.left;
      if(current == null) {
        break;
      }
      if(current.data == data) {
        removeNode(data,current);
        break;
      }
    }
  }

  if(data > current.data) {
    while(true) {
      current = current.right;
      if(current == null) {
        break;
      }
      if(current.data == data) {
        removeNode(data,current);
        break;
      }
    }
  }

}

function insert(data) {
  var n = new Node(data,null,null),
    current = this.root,
    parent;

  if(this.root === null){
    this.root = n;
    return;
  }

  while(true) {
    parent = current;
    if(data < current.data) {
      current = current.left;
      if(current == null) {
        parent.left = n;
        break;
      }
    } else {
      current = current.right;
      if(current === null) {
        parent.right = n;
        break;
      }
    }
  }
}


var tree = new BST(2);

tree.insert(12);
tree.insert(14);
tree.insert(33)
tree.insert(1);
tree.insert(7);

//inOrder(tree.root);
//console.log(tree.getMax());
tree.removeNode(12);
console.log(tree);