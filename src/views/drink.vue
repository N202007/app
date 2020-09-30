<template>
  <div class="card-columns">
    <div class="card" v-for="(item, index) in carray" :key="index">
      <img :src="item.imgPath" class="card-img-top" height="270px" />
      <div class="card-body">
        <h5 class="card-title">{{ item.name }}</h5>
        <p class="card-text">饮品</p>
        <p class="card-text">￥{{ item.money }}</p>
      </div>
      <div class="card-footer">
        <a class="btn btn-primary" @click="save(item.name)">+</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["goods", "carts"]),
    carray: function () {
      let arr = [];
      let count = 0;
      this.goods.forEach((v) => {
        if (v.type == "饮品") {
          arr[count++] = v;
        }
      });
      return arr;
    },
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    ...mapActions(["createAction"]),
    save: function (name) {
      this.goods.forEach((v) => {
        if (v.name == name) {
          let g = { count: 1, good: v };
          this.createAction(g);
        }
      });
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
</style>
