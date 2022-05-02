const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  root() {
    return (this.data === null||this.data === undefined)? null : this.root
  }

  add(data) {
    if (this.data === null||this.data === undefined){
      this.data = data;
      this.left = null;
      this.right = null;
    } else {addData(this, data)}
    
    function addData(node, data){
      if (!node) {return new Node(data)}
      if (node.data === data){return node}
      if (node.data < data){node.right = addData(node.right, data)}
                      else {node.left = addData(node.left, data)}
      return node
    }
  }

  has(data) {
    return searchData(this, data)
    function searchData(node, data){
      if (!node){return false}
      if (node.data === data){return true}
      return (node.data < data)?
                  node.right = searchData(node.right, data):
                  node.left = searchData(node.left, data)
    }
  }

  find(data) {
    return findData(this.root, data)
    function findData(node, data){
      if (!node){return null}
      if (node.data === data){return node}
      if (node.data < data){node.right = findData(node.right, data)}
                      else {node.left = findData(node.left, data)}
      return node
  }
}

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};