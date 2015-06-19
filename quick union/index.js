

function QuickFind(N) {
	this.arr = [];
	for(var i = 0; i < N; ++i) {
		this.arr[i] = i;
	}
}

QuickFind.prototype.connected = function(a,b) {
	return this.arr[a] == this.arr[b];
}

QuickFind.prototype.union = function(a,b) {
	var len = this.arr.length;
	var aid = this.arr[a];
	var bid = this.arr[b];

	while(len--) {
		if(this.arr[len] == aid) {
			this.arr[len] = bid;
		}
	}
}


var path = new QuickFind(10);

path.union(1,4);
path.union(5,6);
path.union(8,9);
path.union(4,9);

console.log(path.connected(1,9));
console.log(path.connected(8,4));
console.log(path.connected(1,5));