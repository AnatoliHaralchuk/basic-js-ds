// const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {

  root() {
    return (this.data === null||this.data === undefined)? null : this
  }

  add(data) {
    if (this.data === null||this.data === undefined){
      this.data = data;
      this.left = null;
      this.right = null;
    } else {addData(this, data)}
    
    function addData(node, data){
      if (!node) {node = new Node(data)}
      else if (node.data === data){node = node}
      else if (node.data < data){node.right = addData(node.right, data)}
                      else {node.left = addData(node.left, data)}
      return node
    }
  }

  has(data) {
    return searchData(this, data)
    function searchData(node, data){
      if (!node){return false}
      if (node.data === data){return true}
      if (node.data < data) {return searchData(node.right, data)}
                  else {return searchData(node.left, data)}
    }
  }

  find(data) {
    return findData(this, data)
    function findData(node, data){
      if (!node){return null}
      if (node.data === data){return node}
      if (node.data < data){return  findData(node.right, data)}
                      else {return  findData(node.left, data)}
      
  }

}

  remove( data ) {
    removeData(this,data)
    function removeData(node, data){
      if (!node) {return null}
      if (node.data > data){
        node.left = removeData(node.left, data)
        return node
      }
      else if (node.data > data){
        node.right = removeData(node.right, data)
        return node
      } else {
        if (!node.right&&!node.left) return null
        if (!node.right){
          node = node.left;
          return node
        }
        if (!node.left){
          node = node.right;
          return node
        }
        let minRight = node.right
        while(minRight.left){
          minRight = minRight.left
        }
        node.data = minRight.data
        node.right = removeData(node.right,minRight.data)
        return node
      } 
    }
  }

  min() {
    if (!this.data){return}
    let node = this
    while(node.left){
      node = node.left
    }
    return node.data
  }

  max() {
    if (!this.data){return}
    let node = this
    while(node.right){
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};