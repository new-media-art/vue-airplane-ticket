import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flightTicket: {
      flight: "BA170",
      passenger: "Nikolas Stuck",
      ticketDeparture: "VIE",
      departureTime: "10:25 a.m.",
      ticketArrival: "PMO",
      arrivalTime: "1:05 p.m.",
      gate: "B3",
      seat: "11E",
      group: "3"
    }
      
    
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
