<template>
  <div id="app">
    <div class="container">
      <div>
        <div class="col-2">
          <index />
        </div>
        <div class="col-10">

        </div>
      </div>
    </div>
  </div>
</template>


<script>
import index from "./views/index.vue";

export default {

  
  name: "App",
  components: {
    index,
  },
};
</script>

<style>
</style>
