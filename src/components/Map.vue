<template>
  <div class="body">
    <div class="search">
      <input type="text" placeholder="Find a hut">
      <img src="../../public/assets/icon_find.png" alt="">
    </div>
    <div class="icon-group" id="first">
      <img src="../../public/assets/map_takeout.png" alt="back">
    </div> 
    <div class="icon-group">
      <img src="../../public/assets/map_delivery.png" alt="back">
    </div> 
  </div>
</template>

<script>
export default {
  name: 'Map',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  background-image: url("../../public/assets/modes_background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  min-height: 600px;
  width: 375px;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
}

.search {
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: hsla(348, 100%, 36%, 0.5);
  margin-top: 93px;
  margin-bottom: 69px;
}

input {
  width: 200px;
  height: 30px;

  border: none;
  border-radius: 9px;

  text-align: center;
  font-size: 18px;

  margin-left: 88px;
  margin-right: 18px;
}

#first {
  margin-bottom: 6px;
}
</style>
