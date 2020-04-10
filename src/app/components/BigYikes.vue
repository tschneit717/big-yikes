<template>
  <div id="app" @mousemove="getCoordinates">
    <div id="tilt-container" :style="{ perspectiveOrigin: `${x}% ${y}%`}">
        <p>That's gonna be a big</p>
        <h1 class="square">YIKES</h1>
        <p>from me dog</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: "BigYikes",
    data() {
      return {
        x: 0,
        y: 0
      }
    },
    methods: {
      init() {

      },
      getCoordinates(e) {
        this.x = e.clientX / 10;
        this.y = e.clientY / 10;
      }
    },
    mounted() {
      this.init();
    }
  }
</script>
<style lang="scss" scoped>
  #app {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
  }
  h1 {
    font-size: 200px;
    font-family:fantasy;
  }
  #tilt-container {
    position: relative;
    height: 100%;
    width: 60%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    perspective: 200px;
    transform: translateZ(0);
    backface-visibility: hidden;
  }
  .square {
    width: 100%;
    text-align: center;
    position: relative;
    transform: translateY(1px) rotateX(1deg);
  }
</style>