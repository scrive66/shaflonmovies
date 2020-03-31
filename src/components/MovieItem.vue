<template>
  <div class="movie">
    <blockquote class="twitter-tweet" data-lang="ja" data-conversation="none">
      <a :href="url"></a>
    </blockquote>
  </div>
</template>

<script>
export default {
  props: {
    url: String
  }
};
</script>

<style scoped>
.movie {
  display: inline-block;
  width: 100%;
  max-width: 500px;
}
</style>
