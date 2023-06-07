<script setup>

let slides = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let icons = ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']

const d = new Date()

let year = d.getFullYear()

let k = d

let timeTab = [{
        tab: null,
        items: ['Home', 'Week', 'Month'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
}]

let messages = [
        {
          from: '',
          message: 'loreum ipsum',
          time: '10:30am',
          color: 'deep-purple-lighten-1',
        },
        {
          from: '',
          message: 'loreum ipsum',
          time: '12:00am',
          color: 'green',
        },
        {
          from: '',
          message: 'loreum ipsum',
          time: '9:45pm',
          color: 'deep-purple-lighten-1',
        },
      ]

async function test() {
  let result = await fetch("https://holidays.abstractapi.com/v1/?api_key=1655f53d1cdd40048392782e5a54db11&country=US&year=2023&month=6&day=5");

  console.log(result)
}

</script>



<template v-slot:extension>

  <v-card>

  <v-toolbar color="primary">

    <v-icon icon="md:event"></v-icon>

    <v-toolbar-title>Student Holiday Calendar</v-toolbar-title>

    <v-spacer></v-spacer>

      <v-tabs v-model="tab" align-tabs="title">

        <v-tab>
          <router-link to="/" class="timenav">Home</router-link>
        </v-tab>

        <v-tab>
          <router-link to="/Day" class="timenav">Day</router-link>
        </v-tab>

        <v-tab>
          <router-link to="/Week" class="timenav">Week</router-link>
        </v-tab>

      </v-tabs>

  </v-toolbar>

  <v-window v-model="tab">

    <v-window-item v-for="item in items" :key="item" :value="item">

      <v-card flat>

        <v-card-text v-text="text"></v-card-text>

      </v-card>

    </v-window-item>

  </v-window>

  </v-card>

  <!--

    <div class="text-center">
      <div>
        <v-btn class="ma-2" color="primary">
          Accept
        </v-btn>

        <v-btn class="ma-2" color="red">
          Decline
        </v-btn>

        <v-btn class="ma-2">
          Cancel
        </v-btn>
      </div>

      <div>
        <v-btn class="ma-2" color="orange-darken-2">
          Back
        </v-btn>
      </div>

      <div>
        <v-btn
          class="ma-2"
          variant="text"
          icon="mdi-thumb-up"
          color="blue-lighten-2"
        ></v-btn>

        <v-btn
          class="ma-2"
          variant="text"
          icon="mdi-thumb-down"
          color="red-lighten-2"
        ></v-btn>
      </div>
    </div>

  -->

  <v-carousel width="200" height="400" hide-delimiters progress="blue-lighten-2">

      <template v-slot:prev="{ props }">
        <v-btn variant="elevated" color="success" @click="props.onClick">Previous</v-btn>
      </template>

      <template v-slot:next="{ props }">
        <v-btn variant="elevated" color="info" @click="props.onClick">Next</v-btn>
      </template>

      <v-carousel-item v-for="(slide, i) in slides" :key="i">

        <v-sheet height="100%">

          <div class="d-flex fill-height justify-center align-center">

            <div class="text-h2">
              {{ slide }} 
            </div>

          </div>

        </v-sheet>

      </v-carousel-item>

    </v-carousel>

    <!--Dayyyyyyuhhh-->

    <h1>Day</h1>

    <v-container>

        <v-row justify="space-around">

          <v-card width="4000">

            <v-img height="200" src="https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJldHR5JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" cover class="text-white">

              <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">

                <!--

                <template v-slot:prepend>

                  <v-btn icon="$menu"></v-btn>

                </template>

                -->

                <v-toolbar-title class="text-h6"> dayOfWeek </v-toolbar-title>

                <!--

                <template v-slot:append>

                  <v-btn icon="mdi-dots-vertical"></v-btn> 

                </template>

                -->

              </v-toolbar>

            </v-img>

            <v-card-text>
              <div class="font-weight-bold ms-1 mb-2">Today</div>

              <v-timeline density="compact" align="start">

                <v-timeline-item
                  v-for="message in messages"
                  :key="message.time"
                  :dot-color="message.color"
                  size="x-small">

                  <div class="mb-4">

                    <div class="font-weight-normal">
                      <strong>{{ message.from }}</strong> {{ message.time }}
                    </div>

                    <div>{{ message.message }}</div>

                  </div>

                </v-timeline-item>

              </v-timeline>

            </v-card-text>

          </v-card>

        </v-row>

      </v-container>

  <router-view></router-view>

    <h1>May 31st 2023</h1>

    <button to="/" @click="test()" class="j">Home</button>

      <div class="wrapper">

          <p class="current-date">June 2023</p>

        <div class="calendar">
          <ul class="weeks">
            <li>Sunday</li>
            <li>Monday</li>
            <li>Tuesday</li>
            <li>Wednesday</li>
            <li>Thursday</li>
            <li>Friday</li>
            <li>Saturday</li>
          </ul>
        </div>

      </div>

      <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
        <div>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn>
        </div>

        <div class="pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </div>

        <v-divider></v-divider>

        <div>
          <strong>Vuetify</strong>
        </div>
    </v-footer>

</template>



<style scoped>

@import url("https://cdn.jsdelivr.net/npm/vuetify@3.3.2/dist/vuetify-labs.css");


  .timenav {
    color: rgb(255, 255, 255);
    text-decoration: none;
  }

  .timenav:active {
    text-decoration: none;
  }

</style>
