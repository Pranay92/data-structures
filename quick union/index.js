

function QuickUnion(len) {
	
	this.id = [];

	for(var i = 0; i < len; i++) {
		this.id[i] = i;
	}

}


QuickUnion.prototype.root = function(i) {
	while(i !== this.id[i]) {
		i = this.id[i]
	}

	return i;
};

QuickUnion.prototype.connected = function(p,q) {
	return (this.root(p) == this.root(q));
};


QuickUnion.prototype.union = function(p,q) {
	var i = this.root(p);
	var j = this.root(q);
	this.id[i] = j
};

var qu = new QuickUnion(10);

qu.union(2,3);
qu.union(4,5);
qu.union(2,7);
qu.union(4,3);

console.log(qu.root(2));
console.log(qu.root(1));
console.log(qu.root(3));

console.log(qu.connected(2,4));
console.log(qu.connected(3,7));
console.log(qu.connected(1,9));