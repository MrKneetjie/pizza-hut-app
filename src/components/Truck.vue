<template>
  <div class="body">
    <h1 class="title">New at Pizza Hut!</h1>
    <img src="../../public/assets/truck_truck.png" alt="">
    <h4 class="description">Great for weddings, business parties, bloc parties, ...</h4>
    <ul class="list">
      <li>Different truck sizes</li>
      <li>Affordable prices</li>
      <li>Customize your own menu</li>
      <li>Order 1-3 weeks in advance</li>
    </ul>
    <img src="../../public/assets/truck_offerte.png" alt="back" class="offerte">
    <p class="extra">Questions about the food truck ?<br>
    - 016/ 12 34 56 78<br>
    - foodtruck@pizzahut.be</p>
  </div>
</template>

<script>
export default {
  name: 'Truck',
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

.description {
  margin-top: 28px;
  margin-left: 28px;
}

.list {
  color: #FED03B;
  
  margin-top: 28px;
  margin-left: 61px;

  font-family: futuraBookRegular;
  letter-spacing: 0px;
}

.list li {
  font-size: 18px;
}

.offerte {
  margin-top: 53px;
  margin-left: 63px;
}

.extra {
  margin-top: 12px;
  text-align: center;
  font-family: futuraBookRegular;
  letter-spacing: 0px;
}
</style>
