<script>

export default {

computed:{

},

props:{

    pageLogo : String,

    navOptions : Array,


},

components:{
   
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

    <div class="container-center">

        <!-- logo -->
        <div id="footer-logo">

            <img :src=pageLogo alt="">

        </div>

        <!-- nav -->

        <div class="nav-container">

            <nav>

                <ul>

                    <li v-for=" option in navOptions">
                        
                        <a href="#">{{ option.name }}</a>
                    
                    </li>

                </ul>

            </nav>

        </div>

    </div>

</template>

<style lang="scss" scoped >

@use '../assets/scss/mixins.scss'  as * ;

    .container-center{
        
        @include container-center;

        @include d-flex-between;

        padding-top: 9.375rem;

        padding-bottom: 3.125rem;

        border-bottom: 2px solid rgba(255, 255, 255, 0.24);

        #footer-logo{

            width: 12.5rem;

            img{

                width: 100%;

            }

        }       
        
        .nav-container{

            nav{


                ul{

                    list-style: none;

                    @include d-flex-between;

                    li{

                        padding: .625rem;

                        a{

                            @include nav-list-options;

                        }

                    }

                    li:hover a{

                        color: #00AC4D;

                    }

                }
            }
        }

    }

</style>
