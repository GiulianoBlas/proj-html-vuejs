<script>

export default {

computed:{

},

props:{

    proList : Array,

    arrowIcon : String,

    playIcon : String,

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

<!-- BEST GAMING COMPANY SECTION -->
    <section class="bg-dark-violet">

        <div class="container-center">

             <!-- img -->
            <div class="left-side">

                <div>

                    <div id="shape-1">

                        <img src="/img/shape1.png" alt="">

                    </div>

                    <div id="shape-ex">

                        <img src="/img/exprience-shape.png" alt="">

                    </div>

                    <div id="shape-2">

                        <img src="/img/shape2.png" alt="">

                    </div>

                    <div id="exprince" >

                        <img src="/img/exprince.jpg" alt="">

                    </div>

                </div>

            </div>

            <!-- paragraph -->
            <div class="right-side">

                <span>12 years experience</span>

                <h2>we are the best gaming company</h2>

                <article> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eveniet inventore alias accusantium sunt ducimus sit, repudiandae dignissimos ex qui.</article>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, ad!</p>

                <ul>

                    <li v-for=" (pro , index) in proList " :key="index">
                    
                        <div>

                            <img :src="pro.icon" alt="">

                        </div>

                        <p>{{ pro.info }}</p>
                    
                    </li>

                </ul>

                <div id="readmore-container">

                    <div id="read-more-button">

                        <button>discover more</button>

                        <div>

                            <img :src="arrowIcon" alt="">

                        </div>

                    </div>

                    <div id="play-button">

                        <img :src="playIcon" alt="">

                    </div>

                    </div>


            <!-- discover more button -->

            </div>

        </div>

    </section>
   
</template>

<style lang="scss" scoped >

@use '../assets/scss/mixins.scss' as *;

section{

    background-color: #191935;


    .container-center{

        @include container-center;

        @include d-flex-between;

        padding-top: 200px;

        padding-bottom: 200px;

        .left-side{

            padding: 3.125rem;

            >div{

                width:50%;

                position: relative;


                #exprince{

                    padding: 1.25rem;

                    width: 28.125rem;

                    position: relative;

                    z-index: 2;

                    img{

                        width: 100%;

                    }

                }

                #shape-1{

                    position: absolute;

                    bottom: 0;

                    right: -100%;

                    width: 12.5rem;

                    img{

                        width: 100%;

                    }

                }

                #shape-ex{

                    position: absolute;

                    top: 0;

                    left: -40%;

                    width: 6.25rem;

                    z-index: 3;

                    img{

                        width: 100%;

                    }


                }

                #shape-2{

                    position: absolute;

                    top: -5%;

                    left: -10%;

                    width: 18.75rem;

                    img{

                        width: 100%;

                    }

                }

            }

        }

        .right-side{

            padding: 1.25rem;

            width: 50%;

            >span{

                display: block;

                color: #00AC4D;

                padding-bottom: .625rem;

                text-transform: capitalize;

            }

            >h2{

                color: white;

                font-size: 1.875rem;

                text-transform: capitalize;

                padding-bottom: .625rem;

            }

            >article , >p{

                color: white;

                padding-bottom: .625rem ;

                line-height: 25px;

            }

            ul{

                list-style-type: none;

                margin-top: .625rem;

                li{

                display: flex;

                align-items: center;

                margin-bottom: .625rem;

                    div{

                        width: 1.875rem;

                        height: 1.875rem;

                        padding: .5rem;

                        border-radius: 50%;

                        border: 1px solid #00AC4D;

                        img{

                            width: 100%;

                            filter: 
                                brightness(0) 
                                saturate(100%) 
                                invert(43%) 
                                sepia(87%) 
                                saturate(2210%) 
                                hue-rotate(120deg) 
                                brightness(93%) 
                                contrast(101%);

                        }

                    }

                    p{

                        padding-inline: .3125rem;

                        color: white;

                    }

                }

            }

            #readmore-container{

                display: flex;

                justify-content: center;

                align-items: center;

                flex-wrap: wrap;

                #read-more-button{

                    display: flex;

                    justify-content: center;

                    align-items: center;

                    background-color: #05CC7C;

                    height: 3.75rem;

                    width: 250px;

                    border-radius: .3125rem;

                    cursor: pointer;

                    button{

                        background-color: transparent;

                        font-size: 1.125rem;

                        border-style: none;

                        text-transform: capitalize;

                        margin-right: .3125rem;

                    }

                    div{

                        width: 1.375rem;

                        height: 1.25rem;

                        img{

                            width: 100%;

                        }

                    }

                }

                #read-more-button:hover {

                    background-color: #202046;

                    border: 1px solid  #05CC7C;

                }

                #read-more-button:hover button{

                    color:  #05CC7C;
                    
                }

                #read-more-button:hover img{

                    filter: brightness(0) 
                            saturate(100%) 
                            invert(55%) 
                            sepia(54%) 
                            saturate(2478%) 
                            hue-rotate(117deg) 
                            brightness(101%) 
                            contrast(96%);

                }

                #play-button{

                    width: 3.75rem;

                    height: 3.75rem;

                    margin:.625rem;

                    padding: 1.25rem;

                    background-color: #05CC7C;

                    border-radius: 50%;

                    position: relative;

                    cursor: pointer;

                    img{
                        width: .9375rem;

                        position: absolute;

                        top: 50%;

                        left: 50%;

                        transform: translate(- 50% , - 50%);

                    }

                }


            }

        }

    }

}
</style>
