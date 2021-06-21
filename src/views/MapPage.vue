<template>
  <div class="home">
    <Header/>
    <Map/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Map from '@/components/Map.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'MapPage',
  components: {
    Header,
    Map,
    Footer,
  }
}
</script>
