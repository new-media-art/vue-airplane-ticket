<template>
  <div id="app">
    <img id="png" alt="Vue logo" src="../assets/earth-travel-illustration.png">

    <typical
      :steps="['Hello!', 2000, 'Here is your airplane ticket!', 500]"
      :wrapper="'h2'"
    ></typical>
    <typical
      class="typicalWrapper"
      :steps="[
        'That is a great destination!!',
        1000,
        'Thank you for choosing Destination One!',
        500,
        'Have a nice trip! Au revoir!! :-) 👋',
        1000,
      ]"
      :loop="Infinity"
      :wrapper="'h3'"
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
  width: 100px;
  height: 100px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
