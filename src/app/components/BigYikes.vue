<template>
  <div id="app" @mousemove="getCoordinates">
    <div id="tilt-container" :style="{ perspectiveOrigin: `${x}% ${y}%`}">
        <p>That's gonna be a big</p>
        <h1 :data-heading=text class="square">{{text}}</h1>
        <p>from me dog</p>
    </div>
    <a class="portfolio" href="https://github.com/tschneit717" target="_blank"><i class="fab fa-github"></i> I'm sorry</a>
  </div>
</template>
<script>
  export default {
    name: "BigYikes",
    data() {
      return {
        text: 'YIKES',
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
  $red: #fe4560;
  $blue: #98b5cc;
  $fontFamily: 'Kaushan Script';
  #app {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow: hidden;
    &:before {
        content: "";
        position: absolute;
        width: 300%;
        height: 300%;
        top: -100%;
        left: -100%;
        z-index: -1;    
        background: rgb(255,94,94);
        background: radial-gradient(circle at 80%, rgba(255,94,94,1) 0%, rgba(212,68,196,1) 50%);
  -webkit-animation: rotating 3s linear infinite;
  -moz-animation: rotating 3s linear infinite;
  -ms-animation: rotating 3s linear infinite;
  -o-animation: rotating 3s linear infinite;
  animation: rotating 3s linear infinite;
    }
  }
  @-webkit-keyframes rotating /* Safari and Chrome */ {
      from {
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes rotating {
      from {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  p {
    font-family: $fontFamily;
    font-size:4vw
  }
  h1 {
    font-family:$fontFamily;
    white-space: nowrap;
    font-family: 'CoreCircus', sans-serif;
    text-transform: uppercase;
    font-size: 18vw;
    text-align: center;
    line-height: 1;
    font-weight: normal;
    margin: 0;
    color: $red;
    position: relative;
    letter-spacing: -0.8rem;
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white, 1px 0px 0px $blue, 0px 1px 0px $blue, 2px 1px 0px $blue, 1px 2px 0px $blue, 3px 2px 0px $blue, 2px 3px 0px $blue, 4px 3px 0px $blue, 3px 4px 0px $blue, 5px 4px 0px $blue, 4px 5px 0px $blue, 6px 5px 0px $blue, 5px 6px 0px $blue, 7px 6px 0px $blue, 8px 7px 0px white, 9px 8px 0px white;
    
    &:before {
      content: attr(data-heading);
      position: absolute;
      padding-top:4px;
      color: white;
      font-family: 'CoreCircus2DDot1';
      text-shadow: none;
      transform: translateY(-2px);
    }
  }

  h1 {
    &:focus {
      outline: none;
    }
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
  @font-face {
	font-family: 'CoreCircus2DDot1';
	src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_1_0.eot');
	src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_1_0.eot?#iefix') format('embedded-opentype'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_1_0.woff2') format('woff2'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_1_0.woff') format('woff'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_1_0.ttf') format('truetype');
}

@font-face {
	font-family: 'CoreCircus';
	src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_8_0.eot');
	src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_8_0.eot?#iefix') format('embedded-opentype'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_8_0.woff2') format('woff2'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_8_0.woff') format('woff'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_8_0.ttf') format('truetype');
}
.portfolio {
  position: fixed;
  bottom:0;
  padding:10px;
  opacity:0.4;
  text-decoration: none;
  font-size: 10px;
}
</style>