<script>

export default {

computed:{

},

props:{

    teams : Array

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

    <!-- BADGE SECTIONS  -->

    <section>

    <!-- badje for each player type -->

        <div class="container-center">

            <ul>

                <li v-for="(team,index) in teams" :key="index">

                    <a href="">

                        <img :src="team.badge" alt="">

                    </a>
                
                </li>

            </ul>

        </div>

    </section>
    
</template>

<style lang="scss" scoped >

@use "../assets/scss/mixins.scss" as *;
.container-center{

    @include container-center;

    ul{

        @include d-flex-between;

        list-style-type: none;

        padding: 1.5625rem;

        border-radius:.625rem;

        background-color:#202046 ;

        li{

            width: 5rem;

            img{
                width: 100%;
            }
        }
    }

}

</style>
