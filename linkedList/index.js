/**
 * created by chunbao.cai
 * 链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。
 * 主要实现以下几个方法来理解链表
 * 1.查找某一节点 find(item)
 * 2.插入新节点 insert(newItem, item)
 * 3.尾部添加节点 append(item)
 * 4.删除节点 remove(item)
 * 5.修改节点 edit(item, newItem)
 * 6.打印所有节点 display
*/

function Node(element){
    this.element = element
    this.next = null
}

class LinkedList {
    constructor(){
        this.head = new Node('head')
    }

    // 查找节点
    find(item){
        let currentNode = this.head
        while (currentNode.element != item) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    // 插入节点
    insert(newItem, item){
        let newNode = new Node(newItem)
        let currentNode = this.find(item)
        newNode.next = currentNode.next
        currentNode.next = newNode
    }

    // 尾部插入节点
    append(item){
        let newNode = new Node(item)
        let currentNode = this.head

        while(currentNode.next){
            currentNode = currentNode.next
        }

        currentNode.next = newNode
    }

    // 删除节点
    remove(item){
        let removeNode = this.find(item)
        let previousNode
        let nextNode
        let currentNode = this.head

        while (currentNode != removeNode) {
            previousNode = currentNode
            currentNode = currentNode.next
            nextNode = currentNode.next
        }

        previousNode.next = nextNode

    }

    // 修改节点
    edit(item, newItem){
        let currentNode = this.find(item)
        currentNode.element = newItem
    }

    // 显示所有节点
    display(){
        let currentNode = this.head

        while (!(currentNode.next == null)) {
            currentNode = currentNode.next
            console.log(currentNode.element)
        }
    }
}

let myLinkedList = new LinkedList()

let oneNode = {a:1}

myLinkedList.insert(oneNode, 'head')

myLinkedList.insert({a:2}, oneNode)

myLinkedList.display()
