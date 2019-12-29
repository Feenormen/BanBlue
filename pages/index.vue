<template>
  <div class="container d-flex-al-bt-wp">
    <div class="akm" style="color:red;">
      building
    </div>
    <div class="icp">
      <a href="http://beian.miit.gov.cn">粤ICP备18015369号</a>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$helpers.test('akm')
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  .akm {
    color: $deep_yellow;
  }
  .icp {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99999999;
    width: 100vw;
    text-align: center;
    color: white;
  }
}
</style>
