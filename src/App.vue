<script setup>

</script>

<template>

  <h1>yooo</h1>

  <router-link to="/">Home</router-link>
  <router-link to="/">About</router-link>
  <router-link to="/Day">Day</router-link>

    <div class="wrapper">

      <header>
        <p class="current-date">June 2023</p>

        <div class="icons">
          <span class="materials-symbools-rounded">chevron_left</span>
          <span class="materials-symbools-rounded">chevron_right</span>
        </div>
        
      </header>

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
  <router-view></router-view>
</template>

<style scoped>

</style>
