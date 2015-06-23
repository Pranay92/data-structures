

function QuickUnion(len) {
	
	this.id = [];

	for(var i = 0; i < len; i++) {
		this.id[i] = i;
	}

}


QuickUnion.prototype.root = function(i,log) {
	while(i !== this.id[i]) {
		if(log) {
			console.log('count');
		}
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

var qu = new QuickUnion(100);

qu.union(2,3);
qu.union(4,5);
qu.union(2,7);
qu.union(4,3);
qu.union(41,3);
qu.union(14,23);
qu.union(24,3);
qu.union(94,43);
qu.union(12,1);
qu.union(79,1);
qu.union(46,2);
qu.union(6,15);
qu.union(61,21);

console.log(qu.root(2));
console.log(qu.root(1));
console.log(qu.root(3,true));

// console.log(qu.connected(2,4));
// console.log(qu.connected(3,7));
// console.log(qu.connected(1,9));