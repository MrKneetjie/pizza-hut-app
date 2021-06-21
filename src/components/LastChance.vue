<template>
  <div class="body">
    <h1 class="title">All the last chances</h1>
    <LastChanceItem path="" src="../../public/assets/food_fourcheese.png" name="Four Cheese" price="12.85" discount="9.85" id="1" type="item" sub="Last Chance (4 left)"/>
    <LastChanceItem path="" src="../../public/assets/food_meatballs.png" name="Meatballs" price="12.85" discount="9.85" id="2" type="item" sub="Last Chance (4 left)"/>
    <LastChanceItem path="" src="../../public/assets/food_ceaser.png" name="Ceaser Salad" price="12.85" discount="9.85" id="3" type="item" sub="Last Chance (4 left)"/>
    <LastChanceItem path="" src="../../public/assets/food_spareribs.png" name="Spareribs" price="12.85" discount="9.85" id="4" type="item" sub="Last Chance (4 left)"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LastChanceItem from '@/components/LastChanceItem.vue'

export default {
  name: 'LastChance',
  components: {
    LastChanceItem,
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
}

.title {
  margin-bottom: 30px;
  margin-left: 20px;
}
</style>
