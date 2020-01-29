<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ comment.name }}</h5>
      <p class="card-text">{{ comment.body }}</p>
      <blockquote class="blockquote mb-0">
        <footer class="blockquote-footer">{{ comment.email }}</footer>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: ["comment"]
};
</script>

<style>
.card {
  margin: 30px 60px;
  text-align: start;
}
</style>
