<template lang="html">
  <div>
    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="sidebar = !sidebar" />
      <v-toolbar-logo>Toolbar</v-toolbar-logo>
    </v-toolbar>
    <v-sidebar left fixed drawer v-model="sidebar">
      <v-list>
        <v-list-item v-for="i in 3" :key="i">
          <v-list-tile>
            <v-list-tile-title>Item {{ i }}</v-list-tile-title>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-sidebar>

  </div>
</template>

<script>
export default {
  data () {
    return {
      sidebar: false
    }
  },
}
</script>

<style lang="css">
</style>
