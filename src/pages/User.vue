<script>
import { useUserStore } from '../stores/useUserStore';

export default {
  setup() {
    return { userStore: useUserStore() };
  },
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.user = this.userStore.user;
  },
};
</script>

<template>
  <div class="user-profile">
    <div class="profile-header">
      <img :src="user.image" alt="Profile Picture" class="profile-img">
    </div>
    <div class="profile-details">
      <h1>{{ user.firstName }} {{ user.lastName }}</h1>
      <ul class="details-list">
        <li><strong>Username:</strong> {{ user.username }}</li>
        <li><strong>Gender:</strong> {{ user.gender }}</li>
        <li><strong>Email:</strong> {{ user.email }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.user-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: auto;
  padding: 30px;
  border: 1px solid #444;
  border-radius: 10px;
  background: #222;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: white;
}

.profile-header {
  margin-bottom: 20px;
}

.profile-img {
  width: 150px;
  /* Larger image */
  height: 150px;
  /* Larger image */
  border-radius: 50%;
  border: 4px solid #007BFF;
  object-fit: cover;
}

.profile-details h1 {
  margin: 0;
  color: #fff;
  /* White font */
  font-size: 28px;
  /* Larger font size */
}

.details-list {
  list-style: none;
  padding: 0;
  font-size: 18px;
  /* Larger font size */
  color: #ddd;
  /* Lighter grey font for less important text */
}

.details-list li {
  margin-bottom: 8px;
  /* Increased spacing */
}
</style>
