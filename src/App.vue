
<template>
  <router-view></router-view>
</template>

<script>
let brand = " | Inventory Vue SPA"
export default {
  name : 'App',

  watch: {
    $route(to){
      document.title = to.meta.title + brand,
      document.description = to.meta.description
    }
  }
}
</script>

<style>

</style>