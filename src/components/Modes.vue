<template>
  <div class="body">
    <router-link to="/normalorder" id="first">
      <img src="../../public/assets/modes_first.png" alt="back">
    </router-link> 
    <router-link to="/party" id="second">
      <img src="../../public/assets/modes_second.png" alt="back">
    </router-link> 
    <router-link to="/truck" id="third">
      <img src="../../public/assets/modes_third.png" alt="back">
    </router-link> 
  </div>
</template>

<script>
export default {
  name: 'Modes',
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

#first {
  margin-top: 151px;
  position: relative;
}

#second {
  margin-top: 203px;
  margin-right: 37px;
  position: absolute;
}

#third {
  margin-top: 112px;
}
</style>
