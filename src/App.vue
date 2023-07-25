<script>

import pageHeader from "./components/PageHeader.vue";

import pageMain from "./components/PageMain.vue";

import pageFooter from "./components/PageFooter.vue";


export default {

computed:{

},

components:{

  pageHeader,

  pageMain,

  pageFooter,

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

<!-- HEADER  -->
  <pageHeader/>

<!-- MAIN  -->
  <pageMain/> 

<!-- FOOTER  -->
  <pageFooter/> 
    
</template>

<style lang="scss">

@import './assets/scss/reset.scss';

  *{

    @include reset;

    font-family: 'Montserrat', sans-serif;

  }

</style>
