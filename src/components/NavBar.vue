<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
        <router-link class="navbar-brand" to="/">
            {{ userName }}
        </router-link>
        <div>
            <button class="btn btn-primary" @click="sigIn" v-if="!isAuthenticated">Acceder</button>
            <div v-else>
                <router-link to="/crud" class="btn btn-primary mx-1">CRUD</router-link>
                <router-link to="/perfil" class="btn btn-primary mx-1">PERFIL</router-link>
                <button class="btn btn-danger mx-1" @click="signOut">Salir</button>
            </div>
        </div>
    </div>        

  </nav>
</template>

<script>
import {useUser} from '../composables/useUser'
import {useAuth} from '@vueuse/firebase'
import { computed } from 'vue'

export default {
    setup() { 
        const { sigIn, signOut } = useUser()
        const { user, isAuthenticated} = useAuth()
 
        const userName=computed(()=>{
            return isAuthenticated.value ? user.value.displayName : 'sin Auth'
        })    

        return {sigIn, signOut, user, isAuthenticated, userName}
    },
}
</script>

<style>

</style>