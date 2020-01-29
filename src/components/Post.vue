<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }} <font-awesome-icon v-on:click="favorite = !favorite" v-bind:class="{ favorite: favorite }" icon="heart" /></h5>
      <p class="card-text">{{ post.body }}</p>
      <router-link
        v-if="post"
        :to="{
          name: 'comments',
          params: { postId: post.id, postTitle: post.title }
        }"
        >Comments</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["post"],
  data() {
    return {
      favorite: false
    };
  }
};
</script>

<style>
.card {
  margin: 30px 60px;
  text-align: start;
}
.favorite {
    color: brown;
}
</style>
