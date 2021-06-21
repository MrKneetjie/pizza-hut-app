<template>
  <div class="body">
    <img src="../../public/assets/logo.png" alt="Logo" id="logo">
    <p>Belgium</p>
    <div class="buttons">
      <button @click="$router.push('../home')">
        <h1>LOGIN</h1>
      </button>
      <button @click="$router.push('../home')">
        <h1>SIGN UP</h1>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  background-image: url("../../public/assets/login_background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  height: 812px;
  width: 375px;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
}

#logo {
  margin-top: 65px;
}

p {
  margin-top: 0px;
  margin-bottom: 90px;
  font-size: 15px;
  font-family: 'Hot Pizza';
}

.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 34px;

  font-family: 'blockbe';
}

button {
  color: white; 

  width: 200px;
  height: 70px;

  border-radius: 20px;
  border: none;
  background-color: #BA0024;

  margin-bottom: 5px;
}
</style>
