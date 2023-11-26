<template>
  <div>
    <button @click="toggleLike" class="like-button">
      <img v-if="liked" src="@/assets/thumb-up.png" alt="Liked" />
      <img v-else src="@/assets/thumb-up.png" alt="Like" />
      {{ likes }} Likes
    </button>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      required: true,
    },
  },
  computed: {
    liked() {
      return this.$store.state.postLikes[this.author] > 0;
    },
    likes() {
      return this.$store.state.postLikes[this.author] || 0;
    },
  },
  methods: {
    toggleLike() {
      this.$store.dispatch('toggleLike', this.author);
    },
  },
};
</script>

<style scoped>
.like-button {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
}
.like-button img {
  width: 20px;
  margin-right: 5px;
}
</style>
