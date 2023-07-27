<script>

export default {

computed:{

},

props:{

    emails : Array

},

components:{
   
},

data(){

    return {

        email : ""
        
    }

},

 methods:{

    savePw(){

        this.emails.push(this.email)

        this.email = " "

    }

 },

}

</script>

<template>

    <!-- NEW LETTER SECTION  -->

    <section>

    <!-- badje for each player type -->

        <div class="container-center">

            <div>

                <div>

                    <h2>our news letter</h2>

                </div>

                <form action="" @submit.prevent= savePw()>

                    <div>

                        <input type="email" v-model="email" placeholder="Enter Your Email">

                        <button type="submit">subscribe</button>

                    </div>

                </form>

            </div>

        </div>

    </section>
    
</template>

<style lang="scss" scoped >

@use "../assets/scss/mixins.scss" as *;
.container-center{

    @include container-center;

    position: absolute;

    top:100%;

    left: 50%;

    transform: translate(- 50% , - 50%);

    >div{

        @include d-flex-between;

        list-style-type: none;

        padding: 1.5625rem;

        padding-top: 50px;

        padding-bottom: 50px;

        border-radius:.625rem;

        background-color:#202046 ;

        h2{
            color: white;

            text-transform: capitalize;

            font-size: 1.875rem;
        }

        form{

            padding: .4375rem;

            border-radius: 1.5625rem;

            background-color: #191935;

            input{

                padding: .3125rem;

                padding-inline: .625rem;

                width: 15.625rem;

                margin-inline: .9375rem;

                font-size: .9375rem;

                background-color: transparent;

                color: white;

                border-style: none;
                
            }

            button{

                padding: .625rem;

                padding-inline: .625rem;

                border-radius: 25px;

                border-style: none;

                background-color: #00AC4D ;

                font-size: .8125rem;

                font-weight: 600;

                cursor: pointer;
            }

        }
  
    }

}

</style>
