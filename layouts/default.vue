<template>
  <div class="warp ow-h pos-re">
    <div class="background-canvas pos-ab">
      <canvas id="canvas" class="canvas" />
    </div>
    <nuxt />
  </div>
</template>

<style>
html,
body,
.warp {
  width: 100vw;
  height: 100vh;
  background: black;
}
.background-canvas {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
