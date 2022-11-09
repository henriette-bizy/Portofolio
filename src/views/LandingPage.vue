<template>
<NavBar />
<img src="../assets/pictures/mine.png" alt="mypicture" class=" ml-44 mt-20">
<!-- <div class="w-[340px] h-[440px] bg-transparent border-2 border-orange absolute left-48 top-[120px]"></div> -->
</template>


<script>

import NavBar  from "../components/NavBarComponent.vue";



export default{
    name:'LandingPage',
    components:{
        NavBar
    }
}

</script>