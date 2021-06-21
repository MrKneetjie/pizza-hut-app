<template>
  <div class="home">
    <Header transparent="true"/>
    <PartyBox/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import PartyBox from '@/components/PartyBox.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'PartyBoxPage',
  components: {
    Header,
    PartyBox,
    Footer,
  }
}
</script>
