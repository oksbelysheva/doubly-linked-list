const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let node = new Node(data);
        if(!this._head){
            this._head = node;
            this._tail = node; 
        }else{
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head && this._head.data;
    }

    tail() {
        return this._tail && this._tail.data;
    }

    at(index) {
        let currentNode = this._head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode.data;
    }

    insertAt(index, data) {
        let current = this._head;
        let counter = 1;
        let node = new Node(data);
        if (this.length == 0){
            return this.append(data);
        }
        if (index == 0){
            this._head.prev = node;
            node.next = this.head;
            this.head = node;
        } else {
            while (current){
                current = current.next;
                if (counter == index){
                    node.prev = current.prev;
                    current.prev.next = node;
                    node.next = current;
                    current.prev = node;
                    break;
                }
                counter++;
            }
        }
        this.length++;
    }

    isEmpty() {
        return this.length == 0;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let current = this._head;
        let counter = 1;
        if ( this.length == 1){
            return this.clear();
        } else{
        if( index == 0){
            this._head = this._head.next;
            this._head.prev = null;
        } else{
            while (current){
                current = current.next;
                if (current == this._tail){
                    this._tail = this._tail.prev;
                    this._tail.next = null;
                } else if (counter == index){
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                    break;
                }
                counter++;
            }
        }
    }
        this.length--;
        return this;
    }

    reverse() {
        let current = this._head;
        let prev = null;
        while (current){
            let next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        }
        this._tail = this._head;
        this._head = prev;
        return this;
    }

    indexOf(data) {
        let currentNode = this._head;
        for (let i = 0; i < this.length; i++) {
            if (currentNode.data == data) return i;
            currentNode = currentNode.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
