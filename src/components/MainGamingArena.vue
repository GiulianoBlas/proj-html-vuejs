<script>

export default {

computed:{

},

props:{

    arenaSquares : Array,

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

<!-- BEST GAMING ARENA SECTION -->
<section class="bg-light-violet">

    <div id="bg-decoration">

        <img src="/img/Vector.png" alt="">

    </div>

    <div class="container-center">

        <div class="left-side">

            <span>our extreme feature</span>

            <h2>the best gaming arena in the world</h2>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi fuga nobis, dicta ipsum ipsa ex.</p>

        </div>

        <div class="right-side">

            <div class="square-container" v-for="(square,index) in arenaSquares" :key="index" >

                <a href="">

                    <div :class="square.type == 'green' ? `square-slot green-square` : `square-slot violet-square`">

                        <div>

                            <img :src="square.icon" alt="">

                        </div>

                        <h3>{{ square.title }}</h3>

                        <p>{{ square.info}}</p>

                    </div>

                </a>

            </div>

        </div>

    </div>

</section>
     
</template>

<style  lang="scss" scoped>

@use '../assets/scss/mixins.scss' as *;

section{

    background-color:#202046;

    position: relative;

    padding-top: 12.5rem;

    padding-bottom: 12.5rem;

    #bg-decoration{

        position: absolute;

        top: 0;

        bottom: 0;

        right: 0;

        left: 0;

        img{

            width: 100%;

            height: 100%;

            object-fit:fill;

            filter:opacity(0.7)

        }

    }

    .container-center{

        @include container-center;

        @include d-flex-between;

        position: relative;

        z-index: 1;

        .left-side{

            width: 50%;

            span{

                color: #00AC4D;

                text-transform: capitalize;

                display: block;

                padding-bottom: .625rem;

                font-weight: 600;

            }

            h2{

                color: white;

                text-transform: capitalize;

                padding-bottom: .625rem;

                font-size: 1.875rem;

            }

            p{
                color: white;

                line-height: 1.5625rem;
            }
        }

        .right-side{

            width: 50%;

            height: calc(16.6875rem * 2);

            @include d-flex-between;

            flex-wrap: wrap;


            .square-container{
                width: 50%;

                height:50%;

                padding: .625rem;

                a{

                    text-decoration: none;
                    
                    .square-slot{

                        width: 100%;

                        height: 100%;

                        border-radius: .625rem;

                        padding:.625rem;

                        display: flex;

                        justify-content: center;

                        flex-wrap: wrap;
                        
                        div{

                            width: 3.75rem;

                            height: 3.75rem;

                            padding: .625rem;

                            background-color: #202046;

                            border-radius: 50%;

                            img{

                                width: 100%;

                            }

                        }

                        h3,p{

                            width: 100%;

                            text-align: center;

                            text-transform: capitalize;
                        }

                    }

                    .green-square{

                        background-color: #00AC4D;

                        h3{
                            
                            color: #202046;

                            font-weight: 600;

                        }

                        p{
                            color: #202046;

                            font-weight: 400;
                        }

                    }

                    .violet-square{

                        background-color: #333287 ;

                        h3,p{
                            
                            color:white;

                        }

                    }

                }

            }

        }

    }

}


</style>
