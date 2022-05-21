<template>
     <div>
    <html>
        
        <body id="animate">
        

                <article class="ticket" >
            <header class="ticket__header">
                <h1>Destination One</h1>
            </header>
            <div class="ticket__id">
                <h2>
                    <span class="material-icons">
                        local_airport</span><span>Flight: 2022</span>
                </h2>

            </div> <!-- end ticket id -->
            <div class="ticket__locations">
                <div class="ticket__departure">
                    <div class="label label-icon"><span>Departing</span><span class="material-icons">flight_takeoff</span> </div>
                    <div class="ticket__departure-airport">VIE</div>
                    <div><span class="label">Time:</span> 10:25 a.m.</div>
                </div> <!-- end ticket departure -->
                <div class="ticket__arrow"><span class="material-icons">
                        arrow_right_alt
                    </span></div>
                <div class="ticket__arrival">
                    <div class="label label-icon label-arrival"><span class="material-icons">flight_land</span> Arriving</div>
                    <div class="ticket__departure-airport">PMO</div>
                    <div><span class="label">Time:</span> 1:05 p.m.</div>
                </div> <!-- end ticket arrival -->
            </div> <!-- end ticket locations -->
            <div class="ticket__board">
                <div class="ticket__assignment">
                    <div class="ticket__seat">
                        <p><span class="label">Status:</span> <span class="ticket__status">Booked...</span></p>
                        <p><span class="label">Gate:</span> B3</p>
                        <p><span class="label">Seat:</span> 11E</p>
                        <p><span class="label">Group:</span> 3</p>
                    </div>
                    <section class="ticket__passenger">
                        <h2>
                            <span class="material-icons">account_box</span> <span>Passenger: Abdalla</span>
                        </h2>
                    </section>
                </div> <!-- end ticket assignment -->
                <div class="ticket__scan">
                    <span class="material-icons">
                        qr_code_2
                    </span>
                </div>
            </div> <!-- end ticket board -->
            </article>
            
        </body>
    </html>
    </div>
</template>

<script>
export default {
    name: 'AirplaneTicket',
/*
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    */
};
</script>

<style scoped>

/*ticket*/
.material-icons {
	color: #9c3848;
	font-family: "Material Icons";
	font-weight: normal;
	font-style: normal;
	font-size: 24px; /* Preferred icon size */
	display: inline-block;
	line-height: 1;
	text-transform: none;
	letter-spacing: normal;
	word-wrap: normal;
	white-space: nowrap;
	direction: ltr;

	/* Support for all WebKit browsers. */
	-webkit-font-smoothing: antialiased;
	/* Support for Safari and Chrome. */
	text-rendering: optimizeLegibility;

	/* Support for Firefox. */
	-moz-osx-font-smoothing: grayscale;

	/* Support for IE. */
	font-feature-settings: "liga";
}

body,
html {
	height: 100%;
	display: grid;
	font-family: "Roboto Condensed", sans-serif;
	overflow: hidden;
    
}

body {
	
	font-size: 18px;
}



.ticket {
	margin: auto;
	padding: 0.9em 1.2em;
	border-radius: 2em;
	color: #263540;
	box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2);
	background-color: #ffffff;
	/* background by SVGBackgrounds.com */
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23fdf8ed' stroke-width='10' stroke-opacity='0.44'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
}

/* Typography */

h1 {
	font-family: "Audiowide", sans-serif;
	font-size: 3rem;
	text-align: center;
	margin-bottom: 0.1em;
}

h2 {
	font-size: 1.5rem;
	font-weight: 600;
}

p {
	line-height: 1.2;
}

.label {
	text-transform: uppercase;
	font-size: 0.8em;
	font-weight: 700;
}

/* Layout */

.ticket__header {
	display: flex;
	align-items: center;
	margin-bottom: 0.4rem;
}

.ticket__locations {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin: 0.5rem 0 0.8em;
}

.ticket__locations .label-icon {
	display: flex;
	align-items: center;
	margin-bottom: 0.2em;
}

.ticket__locations .label-icon .material-icons {
	margin-left: 0.1em;
}

.ticket__locations .label-arrival {
	justify-content: flex-end;
}

.ticket__locations .label-arrival .material-icons {
	margin-right: 0.1em;
}

.ticket__departure-airport {
	font-size: 1.4rem;
	margin-bottom: 0.2em;
}

.ticket__arrow {
	text-align: center;
}

.ticket__arrow .material-icons {
	font-size: 4rem;
	color: #263540;
}

.ticket__arrival {
	text-align: right;
}

.ticket__board {
	display: flex;
	justify-content: space-between;
}

.ticket__assignment {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.ticket__scan .material-icons {
	font-size: 8rem;
	color: #263540;
}

.ticket__id h2,
.ticket__passenger h2 {
	display: flex;
	align-items: center;
}

.ticket__id .material-icons,
.ticket__passenger .material-icons {
	margin-right: 0.1em;
}

.ticket__status {
	color: #033a04;
	text-transform: uppercase;
	animation: blink 4s linear infinite;
	font-weight: 600;
}

@keyframes blink {
	0% {
		opacity: 0;
	}
	20% {
		opacity: 1;
	}
	100% {
		opacity: 1;
	}
}

/*animation ticket enter*/
#animate {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

/*bg clouds*/



</style>