<template>
  <div class="warp">
    <div class="background-canvas">
      <canvas id="canvas" />
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
  overflow: hidden;
  background: black;
  position: relative;
}
.background-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
