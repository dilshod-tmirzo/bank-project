

<template>
    <h1>Sign Up</h1>
    <div class="register">
        <input type="input" v-model="name"  placeholder="Name"/>
        <input type="input" v-model="login" placeholder="Login"/>
        <input type="input" v-model="email" placeholder="Email"/>
        <input type="input" v-model="password" placeholder="Password"/>
        <button v-on:click="signUp()">Sign Up</button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>
    </div>

</template>

<script>
import axios from "axios"

export default{
    name:'SignUp',
    data(){
        return {
            name:'',
            login:'',
            email:'',
            password:''
        }
        
    },
    methods:{
        async signUp(){
            //console.log("singup",this.name, this.login,this.email)

           let result= await axios.post("http://localhost:3000/users",{name:this.name, login: this.login, email: this.email, password:this.password});
           
           console.warn(result)
           if(result.status==201){
            localStorage.setItem("user-info",JSON.stringify(result.data))
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


