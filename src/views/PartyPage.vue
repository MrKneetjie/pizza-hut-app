<template>
  <div class="home">
    <Header transparent="true"/>
    <Party/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Party from '@/components/Party.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'PartyPage',
  components: {
    Header,
    Party,
    Footer,
  }
}
</script>
