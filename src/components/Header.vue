<template>
  <div class="body" :class="{'normal': !transparent}">
    <img @click="$router.go(-1)" class="invert" src="../../public/assets/icons/arrow-backmdpi.png" alt="back" id="back">
    <img @click="$router.push('../home')" src="../../public/assets/logo_large.png" alt="logo">
    <div class="buttons">
      <img src="../../public/assets/partymode_button.png" alt="party mode" id="partymode">
      <img src="../../public/assets/points_button.png" alt="points" id="points">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    transparent: Boolean,
    },
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  width: 375px;
  height: 138px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.normal {
  background-color: #000;
}

#back {
  margin-left: 26px;
}

.buttons {
  height: 140px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

#partymode {
  width: 45px;
  height: 45px;
  margin-top: 15px;
}

#points {
  margin-top: 23px;
  margin-right: 16px;
}

.invert {
  filter: invert(100%);
}
</style>
