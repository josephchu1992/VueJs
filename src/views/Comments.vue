<template>
  <div>
    <div v-if="loading">Loading Comments...</div>

    <div v-if="!loading">
      <h4>Comments on {{ $route.params.postTitle }}</h4>
      <comment
        v-for="comment in comments"
        v-bind:key="comment"
        :comment="comment"
      ></comment>
    </div>
  </div>
</template>

<script>
import Comment from "../components/Comment.vue";
import axios from "axios";

export default {
  name: "comments",
  data() {
    return {
      loading: false,
      comments: []
    };
  },
  components: {
    Comment
  },
  mounted() {
    this.loading = true;

    axios
      .get(
        "https://jsonplaceholder.typicode.com/comments?postId=" +
          this.$route.params.postId
      )
      .then(({ data }) => {
        this.comments = data;
        this.loading = false;
      });
  }
};
</script>
