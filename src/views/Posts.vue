<template>
  <div>
    <div v-if="loading">Loading Posts...</div>

    <div v-if="!loading">
      <h4>Posts by {{ $route.params.userName }}</h4>
      <post v-for="post in posts" v-bind:key="post" :post="post"></post>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post.vue";
import axios from "axios";

export default {
  name: "posts",
  data() {
    return {
      loading: false,
      posts: []
    };
  },
  components: {
    Post
  },
  mounted() {
    this.loading = true;

    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts?userId=" +
          this.$route.params.userId
      )
      .then(({ data }) => {
        this.posts = data;
        this.loading = false;
      });
  }
};
</script>
