<template>
    <HeaderMain/>
    <h1>Enter Bank Details:</h1>
    <form class="addRest">
        <input type="text" name="name"  v-model="banks.name" placeholder="Enter name"/>
        <input type="text" name="contact" v-model="banks.contact" placeholder="Enter contact"/>
        <input type="text" name="address" v-model="banks.address" placeholder="Enter address"/>
        <button type="button" v-on:click="addResto">Add New Bank</button>
    </form>

</template>

<script>
import axios from 'axios'
import HeaderMain from './Header.vue'
export default {
    name:'AddBank',
    components:{
        HeaderMain
    },
    data(){
        return {
            banks:{
                name:'',
                contact:'',
                address:''
            }
        }
        
    },
    mounted() {
        
    },
    methods:{
        async addResto(){
            let result = await axios.post("http://localhost:3000/banks",
            {name:this.banks.name,contact:this.banks.contact,address:this.banks.address});
            if(result.status==201){
                this.$router.push({name:'HomeMain'})
            }
            console.warn(result);
        
        
        }
    }
}
</script>