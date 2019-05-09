<template>
  <div class="container d-flex-al-bt-wp">
    <div class="akm">
      1111
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
    color: $white;
  }
}
</style>
