
     
<script>

export default {

computed:{

},

props:{

   experts : Array,

   socialsIcons : Array,
    
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

        if(this.dinamicIndex < this.experts.length){

            this.dinamicIndex = ++this.dinamicIndex

        }
        if (this.dinamicIndex == this.experts.length ){

            this.dinamicIndex = 0

        }
        
    },

    prev(){

        if (this.dinamicIndex == 0){

            this.dinamicIndex = this.experts.length 

        }

        if(this.dinamicIndex <= this.experts.length ){

            this.dinamicIndex = --this.dinamicIndex
        }

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
                
                <div id="ex-slot">

                    <div id="ex-title">

                        <span>team members</span>

                        <h2>our experts team <br> members</h2>

                    </div>

                    <div id="ex-buttons">

                        <button class="active-button" @click="prev()">

                            <img src="../../public/img/image (11).svg" alt="">

                        </button>

                        <button @click="next()">

                            <img src="../../public/img/image (12).svg" alt="">

                        </button>

                    </div>

                </div>

            </div>

            <!--  experts carousel -->
            <div :class=" pageIndex == dinamicIndex? `bottom` : `d-none`" v-for="(page,pageIndex) in experts" :key="pageIndex">

                <div v-for="(expert,index) in page" :key="index" class="ex-slot">

                    <div class="ex-preview">

                        <img :src="expert.profilePic" alt="">

                        <div class="socials-links">

                            <ul>

                                <li v-for="icon in socialsIcons">

                                    <a href="">

                                        <img :src="icon" alt="">

                                    </a>

                                </li>

                            </ul>

                        </div>

                    </div>

                    <div class="info-container">

                        <div class="ex-info">

                            <h4>{{ expert.name }}</h4>

                            <span>{{ expert.info }}</span>

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

    background-color:#191935;

    position: relative;

    padding-top: 12.5rem;

    padding-bottom: 12.5rem;

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

            #ex-slot{

                display: flex;

                #ex-title{

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

            #ex-buttons{

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
            .ex-slot{

                cursor: pointer;

                width: calc(100% / 4);

                padding: .625rem;

                .ex-preview{

                    position: relative;

                    img{

                        width: 100%;

                        display: block;

                    }

                        .socials-links{

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

                        span{

                            text-transform: capitalize;

                        }

                    }

                .info-container{

                    @include d-flex-between;

                    background-color: #12154a;

                    .ex-info{

                        padding: .3125rem;

                        h4{

                            text-transform: capitalize;

                            color: white;

                            text-align: center;

                            padding: .625rem;

                        }

                        span{

                            display: block;

                            color: white;

                            text-align: center;

                            padding: .625rem;

                        }

                    }
                    
                }

            }

            .ex-slot:hover .socials-links {

                display: block;

            }

            .ex-slot:hover .ex-info{

                background-color: #05CC7C;

            }

        }

        .d-none{

            display: none;
            
        }

    }

}

</style>

