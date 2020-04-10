<template>
  <div>
    <p>That's gonna be a big</p>
    <h1>YIKES</h1>
    <p>from me dog</p>
  </div>
</template>
<script>
  export default {
    name: "BigYikes",
    methods: {
      init() {

      }
    },
    mounted() {
      this.init();
    }
  }
</script>
<style lang="scss" scoped>
  div {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>