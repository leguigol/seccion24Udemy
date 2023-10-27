<template>
  <h1>PERFIL</h1>
  <pre>
    {{ user }}
  </pre>
</template>

<script>
import {useAuth} from '@vueuse/firebase'

export default {
    setup(){ 
        const { user, isAuthenticated} = useAuth(); 
        return {user,isAuthenticated}
    },

}
</script>

<style>

</style>