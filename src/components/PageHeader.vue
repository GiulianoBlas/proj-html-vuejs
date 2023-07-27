<script>

import headerTop from "./HeaderTop.vue";

import headerBottom from "./HeaderBottom.vue";

import { store } from "../store.js"

export default {

computed:{

},

components:{

    headerTop,

    headerBottom,
   
},

data(){

    return {

      store,

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
            <headerTop
            :pageLogo="store.content.pageLogo"
            :navOptions="store.content.navOptions"
            :searchIcon="store.content.searchIcon"
            :shopIcon="store.content.shopIcon"
            :removeIcon="store.content.removeIcon"
            :cart="store.content.cart"
            />

        <!-- BOTTOM  -->
            <headerBottom
            :socialIcons="store.content.socialsIcons"
            :greetings="store.content.greetings"
            :slogan="store.content.slogan"
            :readMore="store.content.readMore"
            :arrowIcon="store.content.arrowIcon"
            :playIcon="store.content.playIcon"
            />

        </div>

    </header>

</template>

<style lang="scss" scoped>

.header-bg{

    background-image: url('../assets/img/banner1.png') ;

    background-size: cover;

    position: relative;

}

</style>
