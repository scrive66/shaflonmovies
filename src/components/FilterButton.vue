<template>
  <a v-bind:class="isActive" v-bind:href="href">{{ text }}</a>
</template>

<script>
export default {
  props: {
    filter: String,
    text: String
  },
  computed: {
    isActive() {
      const urlVars = getUrlVars();
      if (!urlVars.category) {
        urlVars.category = "recommend";
      }
      return {
        active: this.filter == urlVars.category
      };
    },
    href() {
      return "?category=" + this.filter;
    }
  }
};

function getUrlVars() {
  let vars = [],
    max = 0,
    hash = "",
    array = "";
  const url = window.location.search;
  hash = url.slice(1).split("&");
  max = hash.length;
  for (let i = 0; i < max; i++) {
    array = hash[i].split("=");
    vars.push(array[0]);
    vars[array[0]] = array[1];
  }
  return vars;
}
</script>

<style scoped>
a {
  text-align: center;
  padding: 3px;
  margin: 3px;
  min-width: 100px;
  text-decoration: none;
  color: black;
  border: 2px solid #555555;
  transition-duration: 0.3s;
}

a:hover {
  background-color: #555555;
  color: white;
}

.active {
  background-color: #555555;
  color: white;
}
</style>
