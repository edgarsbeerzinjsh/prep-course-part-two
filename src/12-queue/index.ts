/**
 * Queue
 *
 * Create a queue data structure. The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed.
 *
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.remove(); // returns 1
 */

 class Queue {
  myQ: number[] = [];
  add(n: number) {
    this.myQ.push(n)
  }

  remove() {
    return this.myQ.shift()
  }
}
// let myQ: number[] = [];
// class Queue {
//   add(n: number) {
//     let addedN = myQ.push(n)
//     return addedN
//   }

//   remove() {
//     let removed = myQ.shift()
//     return removed
//   }
// }

export { Queue };
