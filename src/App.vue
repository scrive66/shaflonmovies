<template>
  <div id="app">
    <div id="header">
      <h1>
        <span>しゃふろんの演奏動画</span>
        <wbr />
        <span>
          まとめ
          <a href="https://twitter.com/scrive66">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </span>
      </h1>
    </div>
    <div id="footer">
      <a href="#header" class="fix">
        トップへ戻る
        <font-awesome-icon icon="arrow-up" />
      </a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTwitter, faArrowUp);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

export default {
  name: 'App',
  components: {
  }
}
</script>

<style scoped>
#header {
  margin-bottom: 20px;
  padding: 1px;
  background: #555555;
  color: white;
  white-space: nowrap;
}

#footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  background: #555555;
  color: white;
  padding: 10px;
}

#footer > * {
  margin: 5px;
}

a {
  color: white;
  text-decoration: none;
}
</style>
