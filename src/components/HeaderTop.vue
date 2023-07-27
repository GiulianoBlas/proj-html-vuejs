<script>

export default {

computed:{

    dinamicCart(){

        let myCart = this.cart

        return myCart

    },

    finalPrice(){
        
        this.sum = this.totalPrice.reduce((a , b) => {

            return a + b ;

        })

        return this.sum

    }

},

props :{

    pageLogo : String,

    navOptions : Array,

    searchIcon : String,

    shopIcon : String,

    removeIcon : String,

    cart : Array,

    totalPrice : Array

},

components:{

   
   
},

data(){

    return {

        index : null,

        sum : 0
 
    }

},

 methods:{

    removeProduct(index){

        this.index = index

        this.cart.splice(index , 1)

        this.totalPrice.splice(index + 1, 1)

    },

 },

}

</script>

<template>

    <!-- HEADER TOP -->

    <div class="container-center">

        <!-- logo -->
        <div id="header-logo">

            <img :src=pageLogo alt="">

        </div>

        <!-- nav -->
        <div class="nav-container">

            <nav>

                <ul>

                    <li v-for=" (option,index) in navOptions" :key="index">
                        
                        <button v-if="option.type == 'button' ">{{ option.name }} <img :src="option.icon" alt=""></button>

                        <a v-if="option.type == 'link'" href="#">{{ option.name }}</a>

                        <ul v-if="option.type == 'button'" >

                            <li v-for="(selectOption,index) in option.options" :key="index">

                                <a href="">{{ selectOption }}</a>

                            </li>

                        </ul>
                    
                    </li>

                </ul>

            </nav>

        </div>

        <!-- search input -->
        <!-- cart  -->
        <div id="search-cart-container">

            <div id="search-input-container">

                <div id="search-icon">

                    <img :src="searchIcon" alt="">

                </div>

                <div id="search-input">

                    <input type="text">

                </div>

            </div>

            <div id="cart-container">

                <div id="cart-icon">

                    <img :src="shopIcon" alt="">

                </div>

                <div id="cart-dropdown">

                    <ul>

                        <li  v-for="(product,index) in dinamicCart " class="cart-item">

                            <div class="item-img">

                                <img :src="product.Pic" alt="">

                            </div>

                            <div class="item-info">

                                <h3>{{ product.name }}</h3>

                                <div>quality : <span>{{ product.discountedP }} &euro;</span></div>

                            </div>
                            
                            <div class="remove-item" @click="removeProduct(index)">

                                <img :src="removeIcon" alt="">
                                
                            </div>

                        </li>

                    </ul>

                    <div id="total-order">

                        <div>

                            total order :

                        </div>
                    
                        <div>

                           {{ finalPrice }}&euro;

                        </div>
                        
                    </div>

                    <div id="check-out-container">

                        <button>check out</button>

                    </div>

                </div>

            </div>

        </div>

    </div>    

</template>

<style lang="scss" scoped>

@use '../assets/scss/mixins.scss' as * ;

    .container-center{

        @include container-center;

        @include d-flex-between;

        flex-wrap: wrap;

        padding: .625rem;

        #header-logo{

            width: 12.5rem;

            img{

                width: 100%;

            }

        }

        .nav-container{

            nav{

                &>ul{

                    list-style: none;

                    @include d-flex-between;

                    &>li{

                        padding: .625rem;

                        position: relative;

                       &>button,&>a{

                            @include nav-list-options;

                            img{

                                width: .625rem;

                                filter: invert(100%)
                            }
                        }

                        
                       ul{

                        display: none;

                        position: absolute;

                        background-color:#202046;

                        width: 12.5rem;

                        padding: .625rem;
                        
                        li{

                            list-style-type: none;

                            padding: .9375rem;

                            &:not(:last-child){
                                
                                border-bottom: 1px solid rgba(255, 255, 255, 0.24);
                            
                            }

                            a{
                                
                                @include button-list-options

                            }

                        }

                       }

                       &:hover ul {

                        display: block;

                        }

                    }

                }

            }

        }

        #search-cart-container{

            @include d-flex-between;

            justify-content: flex-end;

            width: 6.25rem;

            #search-input-container{

                @include d-flex-between;

                margin: .3125rem;

                flex-direction: row-reverse;

                #search-icon{

                    @include  circle-frame;

                    background-color: white;

                    cursor: pointer;

                    img{

                        width: 100%;

                        filter: brightness(0) 
                                saturate(100%) 
                                invert(15%) 
                                sepia(35%) 
                                saturate(4439%) 
                                hue-rotate(230deg) 
                                brightness(98%) 
                                contrast(90%);

                    }
                    
                }
                #search-input{

                    padding-inline: .3125rem;

                    display: none;

                    input{

                        width: 100px;

                        padding-inline: .3125rem;

                        border-radius: 1.5625rem;

                        border-style: none;

                        background-color: rgba(255, 252, 252, 0.352);

                        font-size: .8125rem;

                    }

                }

                &:hover #search-input{

                    display: block;

                }
                
            }

            #cart-container{

                margin: .3125rem;

               #cart-icon{

                    @include  circle-frame;

                    background-color: white;

                    position: relative;

                    cursor: pointer;

                    img{

                        width: 100%;

                        filter: brightness(0) 
                                saturate(100%) 
                                invert(15%) 
                                sepia(35%) 
                                saturate(4439%) 
                                hue-rotate(230deg) 
                                brightness(98%) 
                                contrast(90%);

                    }

                }

                #cart-dropdown{

                    position: absolute;

                    right: 12.5rem;

                    display: none;

                    background-color: #191935e6;

                    width: 15.625rem;

                    padding: .625rem;

                    z-index: 3;

                    ul{
 
                        .cart-item{

                            @include d-flex-between;

                            list-style: none;

                            list-style-type: none;

                            .item-img{

                                width:3.125rem;

                                height:3.125rem;

                                margin: .3125rem;

                                border: 1px solid #00AC4D;

                                padding: .3125rem;

                                img{

                                    width: 100%;

                                    height: 100%;

                                    object-fit: contain;

                                }

                            }

                            .item-info{

                                margin: .3125rem;

                                color: white;

                                width: calc(100% - 5rem);

                                & > *{

                                   text-align: start;
                                }

                            }

                            .remove-item{

                                width: 20px;

                                margin: .3125rem;

                                cursor: pointer;

                                img{
                                    
                                    filter: invert(40%) 
                                            sepia(83%) 
                                            saturate(2279%) 
                                            hue-rotate(124deg) 
                                            brightness(95%) 
                                            contrast(102%);

                                }

                            }

                        }

                    }

                    #total-order{

                        color: white;
                        
                        text-align: center;

                        text-transform: capitalize;

                        font-size: .75rem;

                        margin-top: .625rem;

                        margin-bottom: .625rem;

                        @include d-flex-between
                    }

                    #check-out-container{

                        button{
                            width: 100%;

                            border-style: none;

                            font-size: .9375rem;

                            padding-top: .3125rem;

                            padding-bottom: .3125rem;

                            background-color: #00AC4D;

                            cursor: pointer;

                        }

                    }

                }

            }

            #cart-container:hover #cart-dropdown{

                display: block;

            }

        }
        
    }

</style>
