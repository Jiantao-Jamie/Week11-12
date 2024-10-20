<template>
    <div>
        <h1>Books with ISBN > 1000</h1>
        <ul>
            <li v-for ="book in books" :key ="book.id">
                {{  book.name }} - ISBN: {{  book.isbn }}
            </li>
        </ul>
    </div>
</template>

<script>

import { ref, onMounted } from 'vue';
import db from '../firebase/init.js'; // Firestore initialization
import { query, where, orderBy, limit, getDocs, collection } from 'firebase/firestore'; // Firestore functions

export default {
  setup() {
    const books = ref([]);  // A reactive array to store books

    // Function to fetch books from Firestore
    const fetchBooks = async () => {
      try {
        // Create a query to fetch books where the ISBN is greater than 1000
        const q = query(
            collection(db, 'books'),
            where('isbn', '>', 1000),
            orderBy('isbn', 'asc'), 
            limit(10)
        );
        
        // Execute the query and get a snapshot of documents
        const querySnapshot = await getDocs(q);
        
        // Create an array to store the books
        const booksArray = [];
        
        // Iterate over the snapshot and push each document's data into the booksArray
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() });
        });
        
        // Update the reactive books array with the fetched data
        books.value = booksArray;
      } catch (error) {
        console.error('Error fetching books: ', error);  // Log any errors
      }
    };

    // Automatically fetch books when the component is mounted
    onMounted(() => {
      fetchBooks();
    });

    return {
      books,  // Return books so it can be used in the template
    };
  },
};
</script>