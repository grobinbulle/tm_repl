<template>
  <router-view>
  </router-view>
</template>

<script setup>
  import CoursePage from './components/CoursePage.vue'
  import Index from './components/Index.vue'
  import signup from './components/signup.vue'
  import login from './components/login.vue'
  import Exercice from './components/Exercice.vue'
  import ListCourses from './components/ListCourses.vue'
  import Resume from './components/Resume.vue'
  import TableMatiere from './components/TableMatiere.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>