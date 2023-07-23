<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/addBank" >Add New Bank</router-link>
        <a v-on:click="logOut" href=""> Logout</a>
    </div>
</template>

<script>
export default {
    name:'HeaderMain',
    methods:{
        
        logOut(){
            localStorage.clear()
            this.$router.push({name:'LoginPage'})
        }
    }
}
</script>
<style>
.nav{
    background-color:gray;
    overflow: hidden;
    margin-bottom: 20px;
}
.logut{
    float: right;
}
.nav a{
    color: white;
    padding:14px 16px;
    float: left;
    text-align: center;
    margin-right: 5px;
    font-size: 17px;
    text-decoration: none;

}
.nav a:hover{
    background: rgb(140, 141, 141);
    color:white;
}
</style>