<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="display-3">注册</h1>
      <hr class="my-2" />
    </div>
    <div class="card">
      <div class="card-body">
        <div class="form-group">
          <label for="">姓名</label>
          <input
            type="text"
            class="form-control"
            aria-describedby="helpId"
            placeholder="输入姓名"
            v-model="u.name"
          />
        </div>
        <div class="form-group">
          <label for="">电话</label>
          <input
            type="text"
            class="form-control"
            aria-describedby="helpId"
            placeholder="输入电话"
            v-model="u.phone"
          />
        </div>
        <div class="form-group">
          <label for="">账号</label>
          <input
            type="text"
            class="form-control"
            aria-describedby="helpId"
            placeholder="输入账号"
            v-model="u.username"
          />
        </div>
        <div class="form-group">
          <label for="">密码</label>
          <input
            type="text"
            class="form-control"
            aria-describedby="helpId"
            placeholder="输入密码"
            v-model="u.pwd"
          />
        </div>
        <button
          type="button"
          @click="submit"
          class="btn btn-primary btn-md btn-block"
        >
          提交
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {},
  data() {
    return {
      u: [{ name: "", phone: "", username: "", pwd: "" }],
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    submit: function () {
      this.user.push(this.u);
      this.$router.push("/app");
      this.u = null;
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
</style>
