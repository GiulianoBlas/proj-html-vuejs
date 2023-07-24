<script>

import headerTop from "./HeaderTop.vue";

import headerBottom from "./HeaderBottom.vue";

export default {

computed:{

},

components:{

    headerTop,

    headerBottom
   
},

data(){

    return {
        
    }

},

 methods:{

 },

}

</script>

<template>

    <header>

        <div class="header-bg">

        <!-- TOP -->
            <headerTop/>

        <!-- BOTTOM  -->
            <headerBottom/>

        </div>

    </header>

</template>

<style lang="scss" scoped>

.header-bg{
    background-image: url('../assets/img/banner1.png') ;
    background-size: cover;
}

</style>
