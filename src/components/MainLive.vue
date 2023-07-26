<script>

export default {

computed:{

},

props : {

    liveStream : Array,

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

<!-- LIVE STREAMING -->
    <section class="custom-bg">

        <div class="container-center">

             <!-- live streaming carousel -->

            <div class="left-side">

                <div id="big-frame">

                    <img  src="../assets/img/v-1.png" alt="">

                    <div id="central-button">

                        <button>

                            <img src="../assets/img/image (9).svg" alt="">

                        </button>

                        <div>
                            <span>call of deauty</span>
                        </div>

                    </div>

                </div>

            </div>

            <div class="right-side">

                <div id="live-slot">

                    <div id="live-title">

                        <span>live streaming</span>

                        <h2>checkout our live streaming</h2>

                    </div>

                    <div id="live-buttons">

                        <button class="active-button">

                            <img src="../assets/img/image (11).svg" alt="">

                        </button>

                        <button>

                            <img src="../assets/img/image (12).svg" alt="">

                        </button>

                    </div>

                </div>

                <div id="previews-container">

                    <div class="preview-slot" v-for="preview in liveStream">

                        <div class="preview">

                            <img :src="preview.small" alt="">

                        </div>

                        <div class="preview-info">

                            <h4>{{ preview.title }}</h4>

                            <span>{{ preview.info }}</span>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>
    
</template>

<style lang="scss" scoped >

@use '../assets/scss/mixins.scss' as *;

section{

    background-image: url(../assets/img/v-bg.png);

    background-size: cover;

    .container-center{
        
        @include container-center;

        display: flex;

        padding-top: 12.5rem;

        padding-bottom: 12.5rem;

        .left-side{

            width: 50%;

            #big-frame{

                padding: .625rem;

                position: relative;

                &>img{

                    width: 100%;

                }

                #central-button{
                   
                    position: absolute;

                    top: 50%;

                    left: 50%;

                    transform: translate(-50% , -50%);

                    display: flex;

                    justify-content: center;

                    flex-wrap: wrap;

                    button{

                        border-style: none;

                        width: 3.75rem;

                        height: 3.75rem;

                        padding: 1.25rem;

                        border-radius: 50%;

                        background-color: #00AC4D;
                        img{

                            width: 100%;

                            height: 100%;

                            object-fit: contain;

                        }

                    }

                    div{

                        width: 100%;

                        text-align: center;

                        padding-top: .625rem;

                        span{

                            color: white;

                            text-transform: capitalize;

                        }

                    }

                    
                }
            }

        }

        .right-side{

            width: 50%;

            padding: .625rem ;

            #live-slot{
                height: 30%;

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

                    border-style: none;

                    margin: .625rem;



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

            #previews-container{

                height: 70%;

                @include d-flex-between;

                .preview-slot{

                    width:50%;

                    padding: .3125rem;

                    img{

                        width: 100%;

                    }

                    .preview-info{

                        color: white;

                        h4{

                            text-transform: capitalize;

                        }

                    }


                }

            }

        }

    }

}

</style>
