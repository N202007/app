<template>
  <div>
    <div class="jumbotron">
      <h1 class="display-3">欢迎使用在线点单平台</h1>
      <p class="lead">
        <span class="badge badge-pill badge-success">在线点单</span>
      </p>
      <hr class="my-2" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label for="">账号</label>
            <input
              type="text"
              class="form-control"
              aria-describedby="helpId"
              placeholder="输入账号"
              v-model="username"
            />
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label for="">密码</label>
            <input
              type="password"
              class="form-control"
              aria-describedby="helpId"
              placeholder="输入密码"
              v-model="pwd"
            />
          </div>
        </div>
        <div class="col-12">
          <div v-if="flag" class="alert alert-danger" role="alert">
            账号或者密码错误
          </div>
        </div>
        <div class="col-12">
          <button
            type="button"
            @click="login"
            class="btn btn-success btn-lg btn-block"
          >
            登录
          </button>
          <a
            class="btn btn-primary btn-block btn-lg"
            href="/register"
            role="button"
            >注册</a
          >
        </div>
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
      username: "",
      pwd: "",
      flag: false,
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    login: function () {
      this.user.forEach((v) => {
        console.log(this.user);
        if (v.username == this.username) {
          if (v.pwd == this.pwd) {
            this.$router.push("/foot");
            this.flag = false;
          }
        } else this.flag = true;
      });
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
</style>
