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
      5000
      
      ]"
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
        'That is just genius!!',
        1000,
        'Thank you for choosing Destination One!',
        1000,
        'Your pilot will be Danilo 👨‍✈️', 
        500,
        'He said he is a good pilot',
        1000,
        'Your co-pilot will be Mareike 👩‍🦱',  
        500,
        'She has a gun',
        1000,
        'Ulrich will be serving Martinis all the way to your destination!🍸',
        1000,
        'Selda will be providing security 👊, so do not be a Snollygoster!',
        1000,
        'In case of a crash Janosh will be in charge of island survival 🏝️',
        1000,
        'If you feel the need to smoke mate in the bathroom contact Stephan 🕶️',
        1000,
        'Back problems? Verena will be giving a Pilates class in the back of the plane 🤸‍♀️',
        100,
        '(only for passengers with i-watches)',
        1000,
        'Have a nice trip! Au revoir!!  Hasta la vista!  :-) 👋',
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
  color: #2c3e50;
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
