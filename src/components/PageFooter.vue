<script>

import footerTop  from "./FooterTop.vue";

import footerBottom  from "./FooterBottom.vue";

import { store } from "../store.js";

export default {

computed:{

},

components:{

  footerTop,

  footerBottom,
   
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

    <footer>

      <div id="footer-bg">

      <!-- TOP -->
        <footerTop
        :pageLogo="store.content.pageLogo"
        :navOptions="store.content.navOptions"
        />
        
        
      <!-- BOTTOM -->
        <footerBottom
        :copyRight="store.content.copyRight"
        :designer="store.content.designer"
        :socialsIcons="store.content.socialsIcons"
        />

      </div>

    </footer>

</template>

<style >

#footer-bg{

  background-image: url('/img/banner1.png') ;

  background-size: cover;

}



</style>
