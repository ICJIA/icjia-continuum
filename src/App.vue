<template>
  <v-app top-toolbar left-fixed-sidebar>
    <navbar />
      <v-content>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-content>
  </v-app>

</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  export default {
    data () {
      return {

      }
    },
    components: {
      Navbar,
    }
  }
</script>

<style scoped>
  .title {
    padding-left: 20px;
  }
</style>
