<script>

export default {

computed:{

},

props :{

    copyRight : String,

    designer : String,

    socialsIcons : Array,

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

        <!-- copyright  -->
        <div id="credits-container">

            <div>

                <span>copyright &copy;</span>

                <span>{{ copyRight }}</span>

            </div>

            <div>

                <span>designed by </span>

                <a href="" alt="">{{ designer }}</a>

            </div>

        </div>

        <!-- links to socials   -->
        <div id="socials-links">

            <ul>

                <li v-for="icon in socialsIcons">

                    <a href="">

                        <img :src="icon" alt="">

                    </a>

                </li>

            </ul>

        </div>

    </div>

   

</template>

<style lang="scss" scoped >

@use '../assets/scss/mixins.scss' as * ;
.container-center{

    @include container-center;

    @include d-flex-between;

    #credits-container{

        @include d-flex-between;

        padding-top: .625rem;

        padding-bottom: .625rem;

        color: white;

        text-transform: capitalize;

        >div{


            padding-inline: .625rem ;

            a{
                text-decoration: none;

                color:#00AC4D ;
            }

        }

        >div:nth-child(1){

            border-right: 3px solid white
        }

    }

    #socials-links{

        ul{

            list-style-type: none;

            @include d-flex-between;

            li{

                padding: .625rem;

                a{

                    padding: .9375rem ;

                    background-color: #202046;

                    width: 3.125rem;

                    height: 3.125rem;

                    border-radius: 50%;

                    margin-bottom: .625rem;

                    display: inline-block;

                    img{
                        
                        width:100%;

                        filter: invert(100%)
                        
                    }

                }

            }

            li:hover > a{

                background-color:#00AC4D;

            }

        }

    }

}

</style>
