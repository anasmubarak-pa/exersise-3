function getQueue()
{
    return {
        queue:[],
        enQueue: function(val){
            this.queue.push(val)
        },
        deQueue: function(val){
            return this.queue.shift(val)
        },
        peek: function(val){
            return this.queue[0]
        },
        isEmpty: function(val){
            return this.queue.length==0
        }
    }
}

const myQueue = getQueue()
console.log(myQueue)
myQueue.enQueue('1')
myQueue.enQueue('2')
console.log(myQueue)
console.log(myQueue.deQueue())
console.log(myQueue.peek())
console.log(myQueue.isEmpty())