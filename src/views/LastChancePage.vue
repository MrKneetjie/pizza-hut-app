<template>
  <div class="home">
    <Header transparent="true"/>
    <LastChance/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import LastChance from '@/components/LastChance.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'LastChancePage',
  components: {
    Header,
    LastChance,
    Footer,
  }
}
</script>
