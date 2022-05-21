<template>
  <div id="app">
    <img id="png" alt="Vue logo" src="../assets/airplane.png">

    <typical
      :steps="[
      '🌞 Yes!',
      5000,
      'You made it!', 
      5000, 
      'Here is your airplane ticket!', 
      5000]"
      :wrapper="'h1'"
    ></typical>
    <typical
      class="typicalWrapper"
      :steps="[
        '',
        9000,
        ' : ) ',
        1000,
        'That is a great destination!!',
        1000,
        'That is a great destination!!',
        1000,
        'Thank you for choosing Destination One!',
        500,
        'Your pilot will be Danilo',
        1000,
        'Your co-pilot will be Mareike',
        1000,
        1000,
        'Ulrich will be serving Gin Tonics all the way to your destination!',
        1000,
        'Have a nice trip! Au revoir!! :-) 👋',
        1000,
      ]"
      :loop="Infinity"
      :wrapper="'h2'"
    ></typical>
    
  </div>
</template>

<script>
import typical from "vue-typical";

export default {
  name: "AirplaneTicketText",
  components: {
    typical,
  },
};
</script>

<style>
#png {
  width: 200px;
  
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 200px;
  text-align: center;
  color: #1c0261;
  margin-top: 20px;
  
  
}
.typicalWrapper::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
