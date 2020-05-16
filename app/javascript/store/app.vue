<template>
  <div>
    <Header/>
    <router-view></router-view>
  </div>
</template>

<spript>
import Header from './components/header.vue'
  export default {
  name: 'App',
  components: {
   header
  },
}

</script>