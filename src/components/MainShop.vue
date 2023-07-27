<script>

export default {

computed:{

},

props:{

   products: Array,

   shopIcons : Array,

   stars : String,

   cartIcon : String,

   cart : Array
    
},

components:{
   
},

data(){

    return {

        dinamicIndex : 0,
        
    }

},

 methods:{

    next(){

        if(this.dinamicIndex < this.products.length){

            this.dinamicIndex = ++this.dinamicIndex

        }

        if (this.dinamicIndex == this.products.length ){

            this.dinamicIndex = 0

        }
        
    },

    prev(){

        if (this.dinamicIndex == 0){

            this.dinamicIndex = this.products.length 

        }

        if(this.dinamicIndex <= this.products.length ){

            this.dinamicIndex = --this.dinamicIndex
        }

    },

    addCart(product){

        this.cart.push(product)

        console.log(this.cart);

    }

},

}

</script>

<template>

<!-- EXPERT TEAM SECTION -->

    <section>

        <div id="bg-decoration">

        </div>    

        <div class="container-center">

            <div id="top">
                
                <div id="shop-slot">

                    <div id="shop-title">

                        <span>team members</span>

                        <h2>our experts team <br> members</h2>

                    </div>

                    <div id="buttons">

                        <button class="active-button" @click="prev()">

                            <img src="../assets/img/image (11).svg" alt="">

                        </button>

                        <button @click="next()">

                            <img src="../assets/img/image (12).svg" alt="">

                        </button>

                    </div>

                </div>

            </div>

            <!--  experts carousel -->
            <div :class=" pageIndex == dinamicIndex? `bottom` : `d-none`" v-for="(page,pageIndex) in products" :key="pageIndex">

                <div v-for="(product,index) in page" :key="index" class="product-slot">

                    <div class="product-preview">

                        <img :src="product.Pic" alt="">

                        <div class="shop-buttons">

                            <ul>

                                <li v-for="icon in shopIcons">

                                    <button href="">

                                        <img :src="icon" alt="">

                                    </button>

                                </li>

                                <li>

                                    <button href="" @click="addCart(product)">

                                        <img :src="cartIcon" alt="">

                                    </button>

                                </li>

                            </ul>

                        </div>

                    </div>

                    <div class="info-container">

                        <div class="product-info">

                            <div>

                                <span v-for="(star,starsIndex) in 4 "><img :class=" starsIndex + 1 <= product.quality ? `green-star` : '' " :src="stars" alt=""></span>
                            
                            </div>

                            <h4>{{ product.name }}</h4>

                            <span>{{ product.discountedP }} &euro;</span>

                            <span>{{ product.price }} &euro;</span> 

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>

</template>

<style lang="scss" scoped >

@use '../assets/scss/mixins.scss' as * ;

section{

    background-image:url('../assets/img/shop-bg.png');

    background-size: cover;

    position: relative;

    padding-top: 12.5rem;

    padding-bottom: 12.5rem;

    #bg-decoration{

        background-color:#1d0a4fbe;

        position:absolute;

        top:0;

        bottom:0;

        left:0;

        right:0;


    }

    .container-center{

        @include container-center;
        
        display: flex;

        flex-wrap: wrap;

        &>div{
            height: 50%;

            width: 100%;
        }

        #top{

            position: relative;

            z-index: 2;

            #shop-slot{

                display: flex;

                #shop-title{

                   width: 80%;

                    span{

                        color: #00AC4D;

                        text-transform: capitalize;

                    }

                    h2{
                        color: white;

                        text-transform: capitalize;

                        font-size: 1.875rem;

                        padding-top: .625rem;

                        padding-bottom: 1.25rem;
                    }

                }
                
            }

            #buttons{

                display: flex;

                align-items: end;


                button{

                    width: 2.5rem;

                    height: 2.5rem;

                    padding: .625rem;

                    border-radius: 50%;

                    background-color: #00AC4D;

                    cursor: pointer;

                    border-style: none;

                    margin: .625rem;

                    cursor: pointer;

                    img{

                        width: 100%;

                        height: 100%;

                        object-fit: contain;

                        filter: invert(100%);
                    }

                }

                .active-button{

                    background-color: white;

                    img{

                        filter: invert(0%)

                    }

                }

            }

        }

        .bottom{

            z-index: 2;

            display: flex;

            .product-slot{

                cursor: pointer;

                width: calc(100% / 4);

                padding: .625rem;

                .product-preview{

                    position: relative;

                    height:12.5rem;

                    padding: .9375rem;

                    width:100%;

                    background-color:#191935;

                    border-radius: .625rem;

                    margin-bottom:.9375rem;

                    img{

                        width: 100%;

                        height:100%;

                        object-fit:contain;

                        display: block;

                    }

                        .shop-buttons{

                            display: none;

                            position: absolute;

                            bottom: 0;

                            left: 50%;

                            transform: translateX(-50%);

                            ul{

                                list-style-type: none;

                                @include d-flex-between;

                                li{

                                    padding: .3125rem;

                                    button{

                                        padding: .9375rem ;

                                        background-color: #202046;

                                        width: 3.125rem;

                                        height: 3.125rem;

                                        border-radius: 50%;

                                        margin-bottom: .625rem;

                                        display: inline-block;

                                        cursor:pointer;

                                        img{
                                            
                                            width:100%;

                                            height:100%;

                                            filter: invert(100%)
                                            
                                        }

                                    }

                                }

                                li:hover > button{

                                    background-color:#00AC4D;

                                }

                            }

                        }

                        span{

                            text-transform: capitalize;

                        }

                    }

                .info-container{
                    .product-info{

                        div{

                            span{

                                display: inline-block;

                                width: 1.875rem;

                                padding: 5px;

                                img{

                                    width: 100%;
                                }

                                .green-star{

                                    filter: 
                                        brightness(0) 
                                        saturate(100%) 
                                        invert(48%) 
                                        sepia(68%) 
                                        saturate(2756%) 
                                        hue-rotate(117deg) 
                                        brightness(90%) 
                                        contrast(101%);

                                }

                            }

                        }

                        h4{

                            text-transform: capitalize;

                            color: white;

                            text-align: center;

                            padding-bottom: .625rem;

                            text-align: start;

                        }

                        span{

                            color: #00AC4D;

                            text-align: start;

                            padding-right: .625rem;

                        }

                       span+span{

                        color: white;

                       }

                    }
                    
                }

            }

            .product-slot:hover .shop-buttons{

                display: block;

            }

            .product-slot:hover .ex-info{

                background-color: #05CC7C;

            }

        }

        .d-none{

            display: none;
            
        }

    }

}

</style>

