<template>
    <div>
        <h1>Add Book</h1>
        <form @submit.prevent="addBook">
            <div>
                <label for = "isbn">ISBN: </label>
                <input type = "text" v-model="isbn" id = "isbn" required />
            </div>
            <div>
                <label for = "name">Name: </label>
                <input type = "text" v-model="name" id = "name" required />
            </div>
            <button type = "submit">Add Book</button>
        </form>

        <BookList />
    </div>
</template>

<script>
import { ref } from 'vue';
import db from '../firebase/init.js';
import { collection, addDoc } from 'firebase/firestore';
import BookList from '../components/BookList.vue';

export default {
  setup() {
    const isbn = ref('');  // ISBN input reference
    const name = ref('');  // Book name input reference

    const addBook = async () => {
      try {
        const isbnNumber = Number(isbn.value);  // Convert the ISBN input to a number
        if (isNaN(isbnNumber)) {  // Check if the ISBN is a valid number
          alert('ISBN must be a valid number');
          return;
        }

        // Add book data to Firestore
        await addDoc(collection(db, 'books'), {
          isbn: isbnNumber,
          name: name.value,
        });

        // Clear the input fields
        isbn.value = '';
        name.value = '';
        alert('Book added successfully!');
      } catch (error) {
        console.error('Error adding book: ', error);  // Log errors if the book addition fails
      }
    };

    return {
      isbn,
      name,
      addBook,
    };
  },
  components : {
    BookList
  }
};
</script>