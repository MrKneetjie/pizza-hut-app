<template>
  <div class="body">
    <div class="wrapper" @click="increaseIndex">
      <h1 id="title">Track & Trace</h1>
      <div class="row">
        <div class="column">
          <h4>Delivering</h4>
          <img src="../../public/assets/tracktrace_4.png" alt="" class="pizza" id="one" v-bind:class="(this.index < 3) ? 'transparent' : ''">
          <img src="../../public/assets/tracktrace_3.png" alt="" class="pizza" id="two" v-bind:class="(this.index < 2) ? 'transparent' : ''">
          <h4>Ready</h4>
        </div>
        <div class="column">
          <h4 class="right">Preparing</h4>
          <img src="../../public/assets/tracktrace_1.png" alt="" class="pizza" id="three">
          <img src="../../public/assets/tracktrace_2.png" alt="" class="pizza" id="four" v-bind:class="(this.index < 1) ? 'transparent' : ''">
          <h4 class="right">In the oven</h4>
        </div>
      </div>
      <h1 v-if="this.index === 0" id="status">Still not in the oven?</h1>
      <h1 v-if="this.index === 1" id="status">Bake it real good!</h1>
      <h1 v-if="this.index === 2" id="status">Bring it here!</h1>
      <h1 v-if="this.index === 3" id="status">I can't wait!</h1>
      <p v-if="this.index === 3" id="waiting">Altough I've been waiting for: 26min.</p>
    </div>
    <div v-if="this.index === 4" class="wrapper overlay">
      <h1 class="overlay-text">Arrived!</h1>
      <h1 class="overlay-text">Enjoy ur food!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrackTrace',
  data: function() {
      return {
          index: 0
      }
  },
  methods: {
    increaseIndex: function() {
      this.index++;
    } 
  }
}
</script>

<style>
.home {
  background-image: url("../../public/assets/wood_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  min-height: 600px;
  width: 375px;

  color: white;
  text-align: start;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
}

.pizza {
  width: 121px;
  height: 121px;
}

.wrapper {
  background-color: hsla(0, 0%, 0%, 0.5);
  width: 343px;
  height: 598px;

  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.overlay {
  justify-content: center;
  position: absolute;
}

#title {
  font-size: 45px;

  margin-top: 5px;
  margin-bottom: 75px;
}

h4 {
  font-size: 20px;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.column {
  display: flex;
  flex-direction: column;
}

.right {
  text-align: right;
}

#one {
  margin-bottom: 7.5px;
  margin-right: 3.5px;
}

#two {
  margin-right: 3.5px;
}

#three {
  margin-bottom: 7.5px;
  margin-left: 3.5px;
}

#four {
  margin-left: 3.5px;

}

#status {
  margin-top: 80px;
}

#waiting {
  margin-top: 5px;
}

.transparent {
  opacity: 0.1;
}
</style>
