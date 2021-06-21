<template>
  <div class="home">
    <Header transparent="true"/>
    <TrackTrace/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import TrackTrace from '@/components/TrackTrace.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'TrackTracePage',
  components: {
    Header,
    TrackTrace,
    Footer,
  }
}
</script>
