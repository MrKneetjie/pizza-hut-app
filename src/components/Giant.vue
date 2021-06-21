<template>
  <div class="body">
    <div class="giant-wrapper">
      <div class="title-wrapper">
        <h1 id="title-text">Giant</h1>
        <img @click="this.randomize" class="invert" src="../../public/assets/icons/dicesxhdpi.png" alt="">
      </div>
      <div>
        <div class="flex">
          <h4>Number of people:</h4>
          <input type="text" class="input-small" value="1" id="peopleAmount">
        </div>
        <div class="flex" id="quantity">
          <h4>Quantity GIANT:</h4>
          <input type="text" class="input-small" value="1" id="giantsAmount">
          <img @click="this.add" class="plus invert" src="../../public/assets/icons/plusmdpi.png" alt="">
          <img @click="this.subtract" class="invert" src="../../public/assets/icons/minusmdpi.png" alt="">
        </div>
      </div>
      <GiantPizza v-for="giant in this.giants" :key="giant.id"/>
      <button class="add">Add to cart</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GiantPizza from '@/components/GiantPizza.vue'

export default {
  name: 'Giant',
  components: {
    GiantPizza,
  },
  data: function() {
    return {
        giants: [
          {
            topping1: "",
            topping2: "",
            topping3: "",
            topping4: "",
            id: 1,
          }
        ],
    }
  },
  methods: {
    add: function() {
      let giant = {
        pizza: "Four Cheese",
        side1: "Chicken Nuggets",
        side2: "Fries",
        id: (this.giants.length + 1)
      };
      this.giants.push(giant);
      document.getElementById('giantsAmount').value = Number(document.getElementById('giantsAmount').value) + 1;
    },

    subtract: function() {
      if(document.getElementById('giantsAmount').value > 1) {
        this.giants.pop();
        document.getElementById('giantsAmount').value = document.getElementById('giantsAmount').value - 1;
      }
    },

    randomize: function() {
      let selects = document.getElementsByTagName('select');
      for (let index = 0; index < selects.length; ++index) {
        let options = selects[index].children;
        let random = Math.floor(Math.random() * options.length);

        selects[index].selectedIndex = random;
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

  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.giant-wrapper {
  background-color: hsla(0, 0%, 0%, 0.5);
  width: 343px;
  min-height: 500px;
  margin-bottom: 85px;

  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

#title-text {
  font-size: 45px;

  margin-top: 5px;
  margin-right: 40px;
  margin-bottom: 20px;
}

.title-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-wrapper img {
  margin-bottom: 20px;
}

.flex {
  width: 312px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input-small {
  width: 35px;
  height: 35px;
  background-color: #FED03B;
  border-radius: 5px;
  border: none;
}

.input-big {
  width: 220px;
  height: 31px;
  background-color: #FED03B;
  border-radius: 10px;
  border: none;
}

.plus {
  margin-right: 10px;
}

input {
  text-align: center;
}

#quantity h4 {
  margin-right: 34px;
}

#quantity input {
  margin-right: 5px;
}

.box {
  margin-top: 10px;
  margin-bottom: 20px;
  text-decoration: underline;
  font-weight: bold;
}

.select {
  margin-bottom: 13px;
}

.select img {
  margin-right: 20px;
}

.select input {
  margin-bottom: 12px;
}

.add {
  background-color: #BA0024;
  border-radius: 15px;
  width: 180px;
  height: 43px;
  border: none;
  color: white;
  font-size: 22px;  
  margin-top: 7px;
  margin-bottom: 10px;
}

.invert {
  filter: invert(100%);
}
</style>
