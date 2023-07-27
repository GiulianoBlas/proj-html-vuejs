<script>
import { store } from '../store';


export default {

computed:{

},

props:{

    clients : Array
    
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

        if(this.dinamicIndex < this.clients.length){

            this.dinamicIndex = ++this.dinamicIndex

        }
        if (this.dinamicIndex == this.clients.length ){

            this.dinamicIndex = 0

        }
        
    },

    prev(){

        if (this.dinamicIndex == 0){

            this.dinamicIndex = this.clients.length 

        }

        if(this.dinamicIndex <= this.clients.length ){

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

            <div>

                <img src="/img/test-grouptwo.png" alt="">
                
            </div>

            <div>

                <img src="/img/test-group.png" alt="">

            </div>
            
        </div>

            <div class="container-center">

                <div id="top">
                    
                    <div id="client-slot">

                        <div id="client-title">

                            <span>trending games</span>

                            <h2>what our clients say</h2>

                        </div>

                    </div>

                </div>

                <!--  client carousel -->
                <div :class=" pageIndex == dinamicIndex? `bottom` : `d-none`" v-for="(page,pageIndex) in clients" :key="pageIndex">

                    <div v-for="(client,index) in page" :key="index" class="client-slot">

                        <div :class="[index] == 0 ? `buttons buttons-left`: `buttons buttons-right`">

                            <button v-if="[index] == 0" class="prev-button" @click="prev()">

                                <img src="/img/image (11).svg" alt="">

                            </button>

                            <button v-if="[index] == 3" class="next-button" @click="next()">

                                <img src="/img/image (12).svg" alt="">

                            </button>

                        </div>

                        <div class="client-preview">

                            <img :src="client.profilePic" alt="">

                            <div class="client-feedback">

                                <div>

                                    <img src="/img/image (15).svg" alt="">

                                </div>

                                <p>{{ client.cit }}</p>

                                <h4>{{client.name}}</h4>

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

        left: 0;

        right: 0;

        display: flex;

        overflow: hidden;

        img{

            width: 100%;

            height: 100%;

            object-fit:fill;

            display: block;

            filter:opacity(0.7);

        }

        div:nth-child(1){

           width: 50%;

           align-self: flex-end;

        }

        div:nth-child(2){

            width: 50%;

            align-self:flex-start;

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

            #client-slot{

                display: flex;

                #client-title{

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

        }

        .bottom{

            z-index: 2;

            display: flex;

            justify-content: space-around;


            .buttons{

                display: flex;

                align-items: end;

                position: absolute;

                top:50%;

                transform: translateY(-50%);

                z-index: 3;

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

                .prev-button{

                    background-color: #333287;

                    img{

                        filter: invert(100%)

                    }

                }

            }

            button:hover

            .buttons-left{

                left: 10px;

            }

            .buttons-right{

                right: 10px;
            }

            .client-slot{

                width: calc(100% / 4);

                height: 18.75rem;

                padding: .625rem;

                cursor: pointer;

                position: relative;

                .client-preview{

                    position: relative;

                    height: 100%;

                    img{

                        width: 100%;

                        height: 100%;

                        display: block;

                        object-fit: cover;

                    }

                    .client-feedback{

                        visibility: hidden;

                        position: absolute;

                        top: 60%;

                        bottom:0;

                        left: 0;

                        right:0;

                        padding: .625rem;

                        background-color:#191935fa;

                        // display: none;

                        div{

                            margin-bottom: .625rem;

                            width: 1.25rem;

                            img{

                                width:100%;

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

                        p{

                            margin-bottom: .625rem;

                            color: white;

                        }

                        h4{

                            text-transform: capitalize;

                            color: #00AC4D;

                        }

                    }

                }

               
            }
            .client-slot:hover .client-feedback{

               visibility: visible;

            }

        }

        .d-none{

            display: none;
            
        }

    }

}

</style>
