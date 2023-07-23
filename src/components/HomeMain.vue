<template>
    <HeaderMain/>
    <h1>Hello {{this.name}}. Wellcome to home page!</h1>
    <table class="table table-hover table-bordered">

        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Contact</th>
            <th scope="row">Address</th>
            <th>Actions</th>
        </tr>
            

        <tbody>
            <tr v-for="item in banks" :key="item.id">
                <td>
                    {{ item.id }}
                </td>
                <td>
                    {{ item.name }}
                </td>
                <td class="">
                    {{ item.contact }}
                </td>
                <td>
                    {{ item.address }}
                </td>
                <td>
                    <router-link :to="'/updatebank/'+item.id">Update</router-link>

                </td>
                <td>
                    <button type="button" v-on:click="deleteRest(item.id)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from 'axios'
import HeaderMain from './Header.vue'


export default {
    name:'HomeMain',
    components:{
        HeaderMain
    },
    data(){
        return {
            name:'',
            banks:[]
        }
    },
    mounted(){

        this.loadData()
    },
    methods:{
        async loadData(){
            let user= localStorage.getItem('user-info')
            
            console.warn(this.name);
            if(!user){
                this.$router.push({name:'SignUp'})
            }else{
                this.name=JSON.parse(user).name;
            }

            let res=await axios.get("http://localhost:3000/banks");
            console.warn(res)
            this.banks=res.data;
        },
        async deleteRest(id){
            let res=await axios.delete("http://localhost:3000/banks/"+id);
            if(res.status==200){
                this.loadData()
            }
        }
    }
    
   
}
</script>

<style>

</style>

