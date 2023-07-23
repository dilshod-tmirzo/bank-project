<template>
 <router-view/>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
body{
  padding: 0;
  margin: 0%;
}
.logo{
    width: 100;
    height: 100; 
}
.register input, .login input, .addRest input{
    display: block;
    margin-bottom: 5px;
    width: 500px;
    height: 40px;
    border: 2px solid skyblue;
    margin-left: auto;
    margin-right: auto;
}

.register button, .login button, .addRest button{
    height: 35px;
    width: 400px;
    background: skyblue;
    border: skyblue;
    color: azure;
    cursor: pointer;
}

.table{
  margin: auto;
   width: 70% !important; 
  
}

</style>
