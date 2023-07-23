import HomeMain from './components/HomeMain.vue'
import SignUp from './components/SignUp.vue'
import LoginPage from './components/LoginPage.vue'
import UpdateBank from './components/UpdateBank.vue'
import AddBank from './components/AddBank.vue'

import {createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        name:'HomeMain',
        component:HomeMain,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/signup'
    },
    {
        name:'LoginPage',
        component:LoginPage,
        path:'/login'
    },
    {
        name:'UpdateBank',
        component:UpdateBank,
        path:'/updatebank/:id'
    },
    {
        name:'AddBank',
        component:AddBank,
        path:'/addbank'
    }
    

];

const router= createRouter({history:createWebHistory(),routes})

export default router



