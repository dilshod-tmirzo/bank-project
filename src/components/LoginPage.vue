<template>
    <h1>Login</h1>
    <div class="login">
        
        <input type="input" v-model="login" placeholder="Login"/>
        <input type="input" v-model="password" placeholder="Password"/>
        <button v-on:click="loginUser">Login</button>
        <p>
            <router-link to="/signup">Sign Up</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
//import { defineComponent } from '@vue/composition-api'
export default {
    name:'LoginPage',
    data(){
        return{
            login:'',
            password:''
        }
    },
    methods:{
        async loginUser(){
            let result= await axios.get(
                `http://localhost:3000/users?password=${this.password}&login=${this.login}`
            )
            console.warn("details",result)

            if(result.status==200){
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name:'HomeMain'})
            }
        }
    },
    mounted(){
        let user= localStorage.getItem('user-info')
        if(user){
            this.$router.push({name:'HomeMain'})
        } 
    }
}
</script>
