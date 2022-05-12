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
  

  width: 95%; 
  height:100%;
  margin:0em 5%;
  background-color:#8ec1da;
  background-image: url("~@/assets/airplane-ticket-clouds-bg.jpg"); 
  background-position: center bottom;
  animation: animatedBackground 30s linear infinite;
  /* Safari and Chrome: */
  -webkit-animation: animatedBackground 30s linear infinite;
}
@keyframes animatedBackground 
{
  from { background-position: 0 100%; }
  to { background-position: 100% 100%; }
}
@-webkit-keyframes  animatedBackground 
{
  from { background-position: 0 100%; }
  to { background-position: 100% 100%; }
}
#content
{
  position:fixed;
  top:5em;
  height:1em;
  width:19em;
  background-color:rgba(1,1,1,0.5);
  color:white;
  padding:2em;
  border-bottom-right-radius: 5em;
  -webkit-border-bottom-right-radius: 5em;
   border-top-left-radius: 5em;
  -webkit-border-top-left-radius: 5em;
}

</style>
