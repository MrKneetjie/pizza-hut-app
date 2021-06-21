<template>
  <div class="body">
    <img src="../../public/assets/party_swipe.png" alt="">
    <div class="item" id="firstImage" @click="$router.push('../partybox')">
      <h1>Party box</h1>
      <div class="info-wrapper">
        <img class="invert" src="../../public/assets/icons/infomdpi.png" alt="">
        <h1>New!</h1>
      </div>
    </div>
    <div class="item" id="secondImage" @click="$router.push('../giant')">
      <h1>GIANT pizza</h1>
      <div class="info-wrapper">
        <img class="invert" src="../../public/assets/icons/infomdpi.png" alt="">
        <h1>New!</h1>
      </div>
    </div>
    <div class="item" id="thirdImage" @click="$router.push('../diy')">
      <h1>Do it yourself</h1>
      <div class="info-wrapper">
        <img class="invert" src="../../public/assets/icons/infomdpi.png" alt="">
        <h1>New!</h1>
      </div>
    </div>
    <img src="../../public/assets/party_surprise.png" alt="" id="surprise" @click="random">
  </div>
</template>

<script>
export default {
  name: 'Party',
  methods: {
    random: function() {
      switch(Math.floor(Math.random() * 3) + 1) {
        case 1:
          this.$router.push({ path:'../partybox', params: { type: true}})
          break;
        case 2:
          this.$router.push({ path:'../giant', params: { type: true}})
          break;
        case 3:
          this.$router.push({ path:'../diy', params: { type: true}})
          break;
      }
    }
  },
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
}

.item {
  width: 375px;
  height: 100px;
  
  border-radius: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 14px;
}

.item h1 {
  margin-left: 10px;
  font-size: 30px;
}

.info-wrapper {
  width: 100px;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
}

.info-wrapper img {
  margin-top: 7px;
  margin-right: 7px;
  margin-bottom: 10px;

  width: 30px;
  height: 30px;
}

.info-wrapper h1 {
  height: 36px;
  width: 79px;
  
  color: red;
  background-color: hsla(0, 0%, 100%, 0.7);

  text-align: center;
  vertical-align: middle;
}

#firstImage {
  background-image: url("../../public/assets//party_box.png");
}

#secondImage {
  background-image: url("../../public/assets//party_giant.png");
}

#thirdImage {
  background-image: url("../../public/assets//party_diy.png");
}

#surprise {
  margin-top: 31px;
}

.invert {
  filter: invert(100%);
}
</style>
