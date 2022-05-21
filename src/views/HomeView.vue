<template>
<div id="bg">

 
    <v-container>
      <AirplaneTicketText />
    </v-container>
      
   <v-container>
     <AirplaneTicket />
   </v-container>
      

         
          
      
    

   
  

  

</div>

</template>

<script lang="ts">
  import Vue from 'vue'
  import AirplaneTicket from '../components/AirplaneTicket.vue'
  import AirplaneTicketText from '../components/AirplaneTicketText.vue'

  export default Vue.extend({
    name: 'HomeV',

    components: {
      AirplaneTicket,
      AirplaneTicketText
    },
  })
</script>

<style>


  #bg {
  
    
  width: 100%; 
  height:100%;
  margin:0em 0%;
  background-color:#8ec1da;
  background-image: url("~@/assets/airplane-ticket-clouds-bg.jpg"); 
  background-size: cover;
  background-position: center bottom;
  animation: animatedBackground 20s linear infinite;
  /* Safari and Chrome: */
  -webkit-animation: animatedBackground 20s linear infinite;
}
@keyframes animatedBackground 
{
  from { background-position: -20 110%; }
  to { background-position: 100% 100%; }
}
@-webkit-keyframes  animatedBackground 
{
  from { background-position: 0 100%; }
  to { background-position: 100% 100%; }
}


</style>
