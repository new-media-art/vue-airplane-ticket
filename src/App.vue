<template>
  <v-app class="blue">
    
<v-card
    class="mx-auto"
    width="75%"
    
  >
     <v-main>
      <router-view/>
    </v-main>

    <v-card-subtitle class="pb-0">
      CODERS:BAY VIENNA 2022
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Have a nice summer!</div>

      <div>Thank you all!</div>
    </v-card-text>

  </v-card>


     
    

    
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>

<style>
.blue {

  background-color: rgb(40, 127, 140);
 
}

</style>