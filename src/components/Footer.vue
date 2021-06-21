<template>
  <div class="footer-body">
    <router-link to="/home" class="icon-group">
      <img src="../../public/assets/icons/homeldpi.png" alt="back" class="icon">
      <p>HOME</p>
    </router-link> 
    <router-link to="/basket" class="icon-group">
      <img src="../../public/assets/icons/cartldpi.png" alt="back" class="icon">
      <p>MY BASKET</p>
    </router-link> 
    <router-link to="" class="icon-group">
      <img src="../../public/assets/icons/userldpi.png" alt="back" class="icon">
      <p>MY ACCOUNT</p>
    </router-link> 
    <router-link to="/map" class="icon-group">
      <img src="../../public/assets/icons/findahutldpi.png" alt="back" class="icon">
      <p>FIND A HUT</p>
    </router-link> 
    <router-link to="" class="icon-group">
      <img src="../../public/assets/icons/pizzapointsldpi.png" alt="back" class="icon">
      <p>HUT REWARD</p>
    </router-link> 
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-body {
  font-family: futuraBookRegular;
  
  width: 345px;
  height: 74px;

  background-color: #000;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 15px;
  padding-right: 15px;

  position: fixed;
  left: 0;
  bottom: 0;
}

.icon-group {
  width: 66px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  text-decoration: none;
  font-size: 9px;
}

p {
  margin-top: 7.5px;
}

img {
  filter: invert(100%);
}
</style>
