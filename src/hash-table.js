/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax, LinkedList } = require('./hash-table-helpers');

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  resize() {
    this.limit *= 2;
    const oldStorage = this.storage;
    this.storage = new LimitedArray(this.limit);
    oldStorage.each((bucket) => {
      if (!bucket) return;
      bucket.forEach((pair) => {
        this.insert(pair[0], pair[1]);
      });
    });
  }

  capacityIsFull() {
    let fullCells = 0;
    this.storage.each((bucket) => {
      if (bucket !== undefined) fullCells++;
    });
    return fullCells / this.limit >= 0.75;
  }

  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    /*
    Haha. Ok so to whomever is reading this, you poor poor thing. Alright so here was my thinking.
    I began with wondering if I should nuke the whole LimitedArray class altogether and rewrite absolutely everything. But I don't think that idea would have held up because I need to keep so much else preserved. Then the notion hit me that I'm only changing the buckets, not the rest of the code... So all that jazz that isn't specifically a bucket was probably fine to stay, right?

    So maybe, right? I have to move forward with Something Eventually. So I went down the mental path of taking the original line39's bucket variable and changing it to a new LinkedList() constructor. Then I can start using the push function to build out the LinkedList using the LinkedList.addToTail() function.

    In my mind, IF this is the right branch to walk out on and it doesn't snap in a couple more steps, I could see this working by extrapolating the idea out to the rest of the code with a full refactor pass through that lense alone. 

    This has been CodeyThoughts by Austin. Thank you for watching! Please remember to hit like and subscribe.
    */
    if (this.capacityIsFull()) this.resize();
    const index = getIndexBelowMax(key.toString(), this.limit);
    let bucket = new LinkedList();

    bucket = bucket.filter(item => item[0] !== key);
    bucket.push(LinkedList.addToTail(index));
    this.storage.set(index, bucket);
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    let bucket = this.storage.get(index);

    if (bucket) {
      bucket = bucket.filter(item => item[0] !== key);
      this.storage.set(index, bucket);
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const index = getIndexBelowMax(key.toString(), this.limit);
    const bucket = this.storage.get(index);
    let retrieved;
    if (bucket) {
      retrieved = bucket.filter(item => item[0] === key)[0];
    }

    return retrieved ? retrieved[1] : undefined;
  }
}

module.exports = HashTable;
