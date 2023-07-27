<script>
import { store } from '../store';


export default {

computed:{

},

props:{

    bestCharacters : Array
    
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

        if(this.dinamicIndex < this.bestCharacters.length){

            this.dinamicIndex = ++this.dinamicIndex

        }
        if (this.dinamicIndex == this.bestCharacters.length ){

            this.dinamicIndex = 0

        }
        
    },

    prev(){

        if (this.dinamicIndex == 0){

            this.dinamicIndex = this.bestCharacters.length 

        }

        if(this.dinamicIndex <= this.bestCharacters.length ){

            this.dinamicIndex = --this.dinamicIndex
        }

    }

},

}

</script>

<template>

<!-- CHOOSE BEST SECTION -->

    <section>

        <div id="bg-decoration">

            <img src="../assets/img/protfolio-vector.png" alt="">

        </div>

            <div class="container-center">

                <div id="top">
                    
                    <div id="live-slot">

                        <div id="live-title">

                            <span>trending games</span>

                            <h2>chose who is the best <br> in the world !</h2>

                        </div>

                        <div id="live-buttons">

                            <button class="active-button" @click="prev()">

                                <img src="../assets/img/image (11).svg" alt="">

                            </button>

                            <button @click="next()">

                                <img src="../assets/img/image (12).svg" alt="">

                            </button>

                        </div>

                    </div>

                </div>

                <!--  best character carousel -->
                <div :class=" pageIndex == dinamicIndex? `bottom` : `d-none`" v-for="(page,pageIndex) in bestCharacters" :key="pageIndex">

                    <div v-for="(character,index) in page" :key="index" class="character-slot">

                        <div class="character-preview">

                            <img :src="character.cover" alt="">

                            <div class="new-game">

                                <span>new</span>

                            </div>

                        </div>

                        <div class="info-play-container">

                            <div class="game-info">

                                <h4>{{ character.title }}</h4>

                                <span>{{ character.info }}</span>

                            </div>

                            <div class="play-button">

                                <button>

                                    <img src="../assets/img/image (9).svg" alt="">

                                </button>

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
        
        display: flex;

        flex-wrap: wrap;

        &>div{
            height: 50%;

            width: 100%;
        }

        #top{

            position: relative;

            z-index: 2;

            #live-slot{

                display: flex;

                #live-title{

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

            #live-buttons{

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
            .character-slot{

                width: calc(100% / 4);

                padding: .625rem;

                cursor: pointer;

                .character-preview{

                    position: relative;

                    img{

                        width: 100%;

                        display: block;

                    }

                    .new-game{

                        position: absolute;

                        top: 0;

                        left: 0;

                        padding: .3125rem;

                        background-color:#05CC7C;

                        span{

                            text-transform: capitalize;

                        }

                    }

                }

                .info-play-container{

                    @include d-flex-between;

                    background-color: #12154a;

                    .game-info{

                        padding: .3125rem;

                        h4{

                            text-transform: capitalize;

                            color: white;

                        }

                        span{

                            color: white;

                        }

                    }
                    .play-button{

                        margin: .3125rem;

                        padding: .3125rem;

                        border-radius: 50%;

                        background-color: #00AC4D;

                        cursor: pointer;

                        button{

                            cursor: pointer;

                            width: 2.8125rem;

                            height: 2.8125rem;

                            border-style: none;

                            padding: .9375rem;

                            background-color: transparent;

                            img{

                                width: 100%;

                                height: 100%;

                                object-fit: contain;
                            }
                        }

                    }


                }

            }
            .character-slot:hover .info-play-container{

                background-color: #05CC7C;
            }

            .character-slot:hover .play-button{

                background-color:#191935 ;

                img{

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

        .d-none{

            display: none;
            
        }

    }

}

</style>
