<template>
  <div class="container">
    <masonry :cols="{default: 3, 1250: 2, 750: 1}" :gutter="5">
      <MovieItem v-for="item in displayedItems" :url="item.url" :key="item.id" />
      <InfiniteLoading @infinite="infiniteHandler" />
    </masonry>
  </div>
</template>

<script>
import Vue from "vue";
import MovieItem from "@/components/MovieItem.vue";
import axios from "axios";
import InfiniteLoading from "vue-infinite-loading";
import VueMasonry from "vue-masonry-css";

Vue.use(VueMasonry);

let readyForTwitterLoad = false;

export default {
  data() {
    return{
      items : null,
      filteredItems : null,
      displayedItems : []
    }
  },
  async created() {
    this.displayedItems = []
    const res = await axios.get(
      "https://raw.githubusercontent.com/scrive66/shaflonmovies/master/src/urls.json"
    );
    this.items = res.data;
    const urlVars = getUrlVars();
    if (!urlVars.category) {
      urlVars.category = "recommend";
    }
    if (urlVars.category == "all") {
      this.filteredItems = this.items;
    } else if (urlVars.category == "other") {
      this.filteredItems = this.items.filter(item =>
        item.category.includes(urlVars.category) 
        || item.category.includes("practice")
      );
    } else {
      this.filteredItems = this.items.filter(item =>
        item.category.includes(urlVars.category)
      );
    }
    this.displayedItems.push(this.filteredItems[0]);
    twitterLoad();
  },
  methods: {
    infiniteHandler($state) {
      const iId = setInterval(() => {
        if (readyForTwitterLoad) {
          clearInterval(iId);
          readyForTwitterLoad = false;
          if (this.displayedItems.length < this.filteredItems.length) {
            this.displayedItems.push(
              this.filteredItems[this.displayedItems.length]
            );
            window.twttr.widgets.load();
            $state.loaded();
          } else {
            window.twttr.widgets.load();
            $state.complete();
          }
        }
      }, 100);
    }
  },
  components: {
    MovieItem,
    InfiniteLoading
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

function twitterLoad() {
  window.twttr = (function(d, s, id) {
    let t,
      js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
    return (
      window.twttr ||
      (t = {
        _e: [],
        ready: f => {
          t._e.push(f);
        }
      })
    );
  })(document, "script", "twitter-wjs");

  window.twttr.ready(twttr => {
    twttr.events.bind("loaded", () => {
      readyForTwitterLoad = true;
    });
  });
}
</script>

<style scoped>
.container {
  margin: 0px auto;
  clear: both;
  max-width: 1600px;
}
</style>