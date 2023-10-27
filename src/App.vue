<template>
  <Cargando v-if="loading"/>
  <div v-else>
    <NavBar />
    <div class="container">
      <router-view />
    </div>

  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import Cargando from './components/Cargando.vue';
import { firebase } from '@/firebase'
import NavBar from './components/NavBar.vue';

export default {
  components: {NavBar,Cargando},    
    setup(){
      const loading=ref(false)

      onMounted( async()=> {
        loading.value=true
        await firebase.getCurrentUser()
        loading.value=false
      })

      return { loading }
    },

}
</script>

<style>

</style>