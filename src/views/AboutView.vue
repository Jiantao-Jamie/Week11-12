<template>
    <div class="about">
      <h1>About Our Library</h1>
      <p>Welcome to our digital library! We're dedicated to providing a vast collection of books and resources to our community.</p>
    </div>
    <div class="user-info">
      <h2 class="mb-0">Welcome, user</h2>
      <button @click="logout" class="btn btn-outline-secondary ms-3">Logout</button>
    </div>
</template>
  
<script setup>
  // No script needed for now
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const auth = getAuth();
const router = useRouter();

const logout = () => {
  signOut(auth)
    .then(() => {
      console.log("User signed out successfully.");
      router.push("/FireLogin"); 
      console.log(auth.currentUser); // To check the current User signed in
    })
    .catch((error) => {
      console.error("Sign-out error: ", error);
    });
};
</script>

  
<style>
.user-info {
  position: absolute;
  top: 35px;
  right: 20px;
  display: flex;
  align-items: center;
}

.user-info h2 {
  font-size: 1.25rem;
  margin: 0;
}

.user-info .btn {
  margin-left: 10px;
}
</style>