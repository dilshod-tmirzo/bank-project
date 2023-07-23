<template>
    <HeaderMain/>
    <h1>Update Bank Details</h1>
    <form class="addRest">
        <input type="text" name="name"  v-model="banks.name" placeholder="Enter name"/>
        <input type="text" name="contact" v-model="banks.contact" placeholder="Enter contact"/>
        <input type="text" name="address" v-model="banks.address" placeholder="Enter address"/>
        <button type="button" v-on:click="updateResto">Update Bank Details</button>
    </form>
</template>

<script>
import axios from 'axios'
import HeaderMain from './Header.vue'
export default {
    name:'UpdateBank',
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
    async mounted(){
        let par=this.$route.params.id
        let res=await axios.get("http://localhost:3000/banks/"+par);
        console.warn(res);
        this.banks=res.data;
        

    },
    methods:{
        async updateResto(){
            console.log(this.par)
            let result = await axios.put("http://localhost:3000/banks/"+this.$route.params.id,
            {name:this.banks.name,contact:this.banks.contact,address:this.banks.address});
            if(result.status==200){
                this.$router.push({name:'HomeMain'})
            }
        }
    }
}
</script>