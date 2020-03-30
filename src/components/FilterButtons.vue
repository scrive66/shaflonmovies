<template>
  <div class="filters">
    <FilterButton v-for="item in items" v-bind:filter="item.filter" v-bind:text="item.text" />
  </div>
</template>

<script>
import FilterButton from "@/components/FilterButton.vue";

export default {
  data() {
    return {
      items: [
        {
          filter: "all",
          text: "全て"
        },
        {
          filter: "recommend",
          text: "おすすめ"
        },
        {
          filter: "fingerstyle",
          text: "ソロギター"
        },
        {
          filter: "song",
          text: "歌"
        },
        {
          filter: "instrumental",
          text: "インスト"
        },
        {
          filter: "other",
          text: "その他"
        }
      ]
    };
  },
  components: {
    FilterButton
  }
};
</script>

<style scoped>
.filters {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>