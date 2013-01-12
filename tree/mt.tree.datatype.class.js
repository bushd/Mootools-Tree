/* Tree Datatpye */
Tree = BBTree = new Class({

	rootNode: undefined,

	initialize: function(key, value) {

		if (typeof(key) === 'undefined') {
			this.rootNode = new BBTreeNode('root', undefined);
		}
		else this.rootNode = new BBTreeNode(key, value);
		
	},

	getSubtreeByNode: function(node) {
		console.log(node);

		var subtree = new BBTreeNode();
		subtree.rootNode = node;

		return subtree;
	},

	setRoot: function(node) {
		this.rootNode = node;
	},

	setNodeAsRoot: function(node) {
		var children = this.rootNode.getChildren();
		this.rootNode = node;
		this.rootNode.setChildren(children);
	},

	addNodeTo: function(child, parent) {
		parent.addChild(child);
	},

	createAndAddNodeAt: function(key, value, parent) {
		if (typeof(parent) === 'undefined') parent = this.rootNode;

		var node = new BBTreeNode(key, value);
		node.setParent = parent;
		parent.addChild(node, parent);

		return node;
	}
});


/* Node Element */
TreeNode = BBTreeNode = new Class({

	key: 'undefined',
	value: undefined,
	children: [],
	parent: undefined,

	initialize: function(key, value) {
		this.key = key;
		this.value = value;
	},

	addChild: function(node) {
		this.children.push(node);
	},

	removeChild: function(node) {
		this.children = this.children.erase(node);
	},

	removeChildByKey: function(key) {
		var self = this;

		this.children = this.children.filter(function (node, index) {
			if (node.key === key) return false;
			else return true;
		}, this);
	},

	setValue: function(value) {
		this.value = value;
	},

	getParent: function() {

	},

	setParent: function(node) {
		this.parent = node;
	},

	isRoot: function() {

	},

	hasChildren: function() {
		if (this.children.length > 0) return true;
		else return false;
	},

	getChildren: function() {
		return this.children;
	},

	setChildren: function(children) {
		this.children = children;
	} 
});