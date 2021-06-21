<template>
  <div class="home">
    <Header transparent="true"/>
    <Truck/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Truck from '@/components/Truck.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'TruckPage',
  components: {
    Header,
    Truck,
    Footer,
  }
}
</script>
