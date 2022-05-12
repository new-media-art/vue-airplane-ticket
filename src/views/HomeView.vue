<template>
  <div class="home">
    <div id="text">
      <AirplaneTicketText />
    </div>
    
  <div>
    <AirplaneTicket />
  </div>
    
  
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AirplaneTicketText from '@/components/AirplaneTicketText.vue'; 
import AirplaneTicket from '@/components/AirplaneTicket.vue'

export default Vue.extend({
  name: 'HomeView',
  components: {
    AirplaneTicketText,
    AirplaneTicket
  },
});
</script>

<style  scoped>
#text {
  height: 20%;
}
</style>