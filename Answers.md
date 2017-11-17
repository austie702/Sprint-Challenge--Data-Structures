# Questions
## 1. What are the order of insertions/removals for the following data structures?
   - **Stack**
   .push / .pop, respectively. This is a LiLo order. Like a stack of books, you can add to the very top (the end) of the stack, but you can't pick up half the stack and add to the middle. For the same reason, you cannot pull a book from the middle of the stack. You can only remove whichever book is on the very top of the stack, one at a time.

   - **Queue**
   .push / .shift, respectively. This is a FiFo order. Like a line to an amusement park ride, the first person to get in line (queue), is also the first one to pass through and leave the line (queue). 

## 2. What is the retreival time complexity for the following data structures?
   - **Linked List**
   Linked lists are of low complexity to implement. It's a linear path from beginning to end. When searching for something, this is a simple but potentially highly inefficient search algorithm.

   Linked lists have a time complexity of O(1) for inserts and O(N) for lookups.

   - **Hash Table**
   A hash table has a high complexity to implement but lookups are much faster, averaging O(1). Inserts, being essentially the same process, also share an average time complexity of O(1), constant time.

   - **Binary Search Trees**
   Of medium complexity to implement, both inserts and lookups are O(logN) complexity. 

## 2. What are some advantages to using a Hash Tables over an array in JavaScript?
   Hash tables are faster because they operate like a valet you leave your car with. You don't need to worry about the location of something, so long as you know the ticket number / key name to give to the valet (hash table black box). This is much faster than climbing one rung at a time of the ladder of an array.

   Hash tables are higher complexity to implement but the inserts and lookups are both O(1) on average.

## Challenge
If you take a look at the hash-table.js file you'll notice that it has solution code in it. You'll also notice that if you run the tests, they all pass. Your job is to refactor this hash table solution to use **linked lists** for buckets instead of arrays. You're welcome to add another class to the helper file, following the pattern used with LimitedArray.