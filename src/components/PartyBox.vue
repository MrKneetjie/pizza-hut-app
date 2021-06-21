<template>
  <div class="body">
    <div class="wrapper">
      <div class="title-wrapper">
        <h1 id="title-text">Party Box</h1>
        <img @click="this.randomize" class="invert" src="../../public/assets/icons/dicesxhdpi.png" alt="">
      </div>
      <div>
        <div class="flex">
          <h4>Number of people:</h4>
          <input type="text" class="input-small" value="1" id="peopleAmount">
        </div>
        <div class="flex" id="quantity">
          <h4>Quantity boxes:</h4>
          <input type="text" class="input-small" value="1" id="boxesAmount">
          <img @click="this.add" class="plus invert" src="../../public/assets/icons/plusmdpi.png" alt="">
          <img @click="this.subtract" class="invert" src="../../public/assets/icons/minusmdpi.png" alt="">
        </div>
      </div>
      <Box v-for="box in this.boxes" :key="box.id"/>
      <button class="add">Add to cart</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Box from '@/components/Box.vue'

export default {
  name: 'PartyBox',
  data: function() {
    return {
        boxes: [
          {
            pizza: "Four Cheese",
            side1: "Chicken Nuggets",
            side2: "Fries",
            id: 1,
          }
        ],
    }
  },
  methods: {
    add: function() {
      let box = {
        pizza: "Four Cheese",
        side1: "Chicken Nuggets",
        side2: "Fries",
        id: (this.boxes.length + 1)
      };
      this.boxes.push(box);
      document.getElementById('boxesAmount').value = Number(document.getElementById('boxesAmount').value) + 1;
    },

    subtract: function() {
      if(document.getElementById('boxesAmount').value > 1) {
        this.boxes.pop();
        document.getElementById('boxesAmount').value = document.getElementById('boxesAmount').value - 1;
      }
    },

    randomize: function() {
      let selects = document.getElementsByTagName('select');
      for (let index = 0; index < selects.length; ++index) {
        let options = selects[index].children;
        let random = Math.floor(Math.random() * options.length);

        selects[index].selectedIndex = random;
      }
    },

    addToCart: function(boxes) {
      boxes.forEach(box => {
        this.$store.commit('addItem', box);
      });
    }
  },
  components: {
    Box,
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

  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  background-color: hsla(0, 0%, 0%, 0.5);
  width: 343px;
  min-height: 575px;
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
  width: 227px;
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
  width: 100%;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  text-decoration: underline;
  font-weight: bold;
}

.select {
  margin-bottom: 13px;
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
