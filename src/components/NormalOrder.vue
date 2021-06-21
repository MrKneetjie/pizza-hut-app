<template>
  <div class="body">
    <h1 class="title">Normal order</h1>
    <LastChanceItem path="/lastchance" src="../../public/assets/food_lastchances.png" name="Last chances" class="marginbot" type="menu"/>
    <LastChanceItem path="" src="../../public/assets/food_menu.png" name="Menu" class="marginbot" type="menu"/>
    <LastChanceItem path="" src="../../public/assets/food_pizza.png" name="Pizza" class="marginbot" type="menu"/>
    <LastChanceItem path="" src="../../public/assets/food_pasta.png" name="Pasta" class="marginbot" type="menu"/>
    <LastChanceItem path="" src="../../public/assets/food_salad.png" name="Salad" class="marginbot" type="menu"/>
    <LastChanceItem path="" src="../../public/assets/food_special.png" name="Special" class="marginbot" type="menu"/>
    <LastChanceItem path="" src="../../public/assets/food_appetizer.png" name="Appetizer" class="marginbot" type="menu"/>
    <LastChanceItem path="" src="../../public/assets/food_dessert.png" name="Dessert" class="marginbot" type="menu"/>
    <LastChanceItem path="" src="../../public/assets/food_drinks.png" name="Drinks" class="marginbot" type="menu"/>
    <LastChanceItem path="" src="../../public/assets/food_aperitif.png" name="Aperitif" class="marginbot" type="menu"/>
    <LastChanceItem path="" src="../../public/assets/food_sauces.png" name="Sauces" class="marginbot" type="menu"/>
    <router-link to="/party">
      <img src="../../public/assets/normalorder_button.png" alt="partymode" id="button">
    </router-link> 
  </div>
</template>

<script>
// @ is an alias to /src
import LastChanceItem from '@/components/LastChanceItem.vue'

export default {
  name: 'NormalOrder',
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

.marginbot {
  margin-bottom: 5px;
}

#button {
  margin-top: 10px;
  margin-bottom: 56px;
  width: 100%;
}
</style>
