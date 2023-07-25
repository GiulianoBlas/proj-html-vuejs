<script>

export default {

computed:{

},

props :{

    socialIcons : Array,

    greetings : String,

    slogan : String,

    readMore : String,

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

<!-- HEADER BOTTOM  -->
<div class="container-center">
    
    <!-- links to socials -->
    <div id="socials-links">

        <ul>

            <li v-for="icon in socialIcons">

                <a href="">

                    <img :src="icon" alt="">

                </a>

            </li>

        </ul>

    </div>

    <div id="titles-readmore-container">

    <!-- titles -->
        <div id="header-titles-container">

            <h1>{{ greetings }}</h1>

            <h2>{{ slogan }}</h2>

        </div>

    <!-- read more button -->

        <div id="readmore-container">

            <div id="read-more-button">

                <button>read more</button>

                <div>

                    <img :src="arrowIcon" alt="">

                </div>

            </div>

            <div id="play-button">

                <img :src="playIcon" alt="">

            </div>

            <div id="read-more-article">

                <article>{{ readMore }}</article>

            </div>

        </div>

    </div>

</div>
  
</template>

<style lang="scss" scoped>

@use '../assets/scss/mixins.scss' as * ;
.container-center{

    @include container-center;

    margin-top: 12.5rem;

    padding-bottom:18.75rem;

    position: relative;

    #socials-links{

        position: absolute;

        top: 50%;

        left: -6.25rem;

        transform: translateY(-50% );

        ul{

            list-style-type: none;

            li{

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

    #titles-readmore-container{

        text-align: center;

        #header-titles-container{

            h1{
                font-size: 1.25rem;

                color:#05CC7C;

                text-transform: uppercase;
            }

            h2{
                font-size: 3.125rem;

                color: white;

                text-transform: uppercase;

                padding: .625rem;
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

        #read-more-article{

            color: white;

            width: 70%;

            text-align: left;

            word-break:break-all;

            line-height: 1.5625rem;

            padding: .9375rem;

            display: none;

        }

    }

}

</style>
