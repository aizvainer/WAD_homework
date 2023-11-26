<template>
  <button @click="resetLikes" class="reset-likes-button">Reset Likes</button>
</template>

<script>
export default {
  methods: {
    resetLikes() {
      this.$store.commit('resetAllLikes');
    },
  },
};
</script>

<style scoped>
.reset-likes-button {
  background-color: #3498db;
  color: #ffffff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.reset-likes-button:hover {
  background-color: #2980b9; /* Darker shade of blue on hover */
}
</style>
