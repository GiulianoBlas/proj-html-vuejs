<script>

import headerTop from "./HeaderTop.vue";

import headerBottom from "./HeaderBottom.vue";

export default {

computed:{

},

components:{

    headerTop,

    headerBottom,
   
},

data(){

    return {

        headerContent : {

            pageLogo : "../../src/assets/img/menulogo.png",

            navOptions : [

            {   name : "home",
                type: "button",
                icon : "../../src/assets/img/image.svg",
                options :['option 1','option 2','option 3','option 4',]},

            {   name : "pages",
                type: "button",
                icon : "../../src/assets/img/image.svg",
                options :['option 1','option 2','option 3','option 4',]}, 
                
            {   name : "tournament",
                type: "link",},     

            {   name : "shop",
                type: "button",
                icon : "../../src/assets/img/image.svg",
                options :['option 1','option 2','option 3','option 4',]}, 
                   
            {   name : "blog",
                type: "button",
                icon : "../../src/assets/img/image.svg",
                options :['option 1','option 2','option 3','option 4',]},   
                
            {   name : "contact",
                type: "link",},

            ],

            searchIcon : "../../src/assets/img/image (1).svg",

            shopIcon : "../../src/assets/img/image (3).svg",

            removeIcon : "../src/assets/img/image (2).svg",

            socialsIcons : [

                '../../src/assets/img/image (4).svg',
                '.../../src/assets/img/image (5).svg',
                '../../src/assets/img/image (6).svg',
                '.../../src/assets/img/image (7).svg'

            ],

            slogan : "are you ready for your next challenge",

            readMore : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, consectetur. Id veritatis rerum ipsa at molestias doloribus, nisi eius quae."

        }
        
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
            :pageLogo="headerContent.pageLogo"
            :navOptions="headerContent.navOptions"
            :searchIcon="headerContent.searchIcon"
            :shopIcon="headerContent.shopIcon"
            :removeIcon="headerContent.removeIcon"
            />

        <!-- BOTTOM  -->
            <headerBottom

            />

        </div>

    </header>

</template>

<style lang="scss" scoped>

.header-bg{

    background-image: url('../assets/img/banner1.png') ;

    background-size: cover;

}

</style>
