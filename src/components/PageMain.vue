<script>

import badgeSection from "./MainBadge.vue"

import gamingComSection from "./MainGamingCompany.vue"

import gamingArenaSection from "./MainGamingArena.vue"

import liveSection from "./MainLive.vue"

import matchSection from "./MainMatch.vue"

import chooseBestSection from "./MainChooseBest.vue"

import battleSection from "./MainBattle.vue"

import expertsSection from "./MainExperts.vue"

import clientSection from "./MainClients.vue"

import shopSection from "./MainShop.vue"

import articlesSection from "./MainArticles.vue"

import newsLetterSection from "./MainNewsLetter.vue"

import { store } from "../store.js"

export default {

computed:{

},

components:{

  badgeSection,

  gamingComSection,

  gamingArenaSection,

  liveSection,

  matchSection,

  chooseBestSection,

  battleSection,

  expertsSection,

  clientSection,

  shopSection,

  articlesSection,

  newsLetterSection,

},

data(){

    return {

      store,
        
    }

},

 methods:{


 },

}

</script>

<template>

  <!-- MAIN  -->
  <main>

    <badgeSection
    :teams="store.content.teams"
    />

    <gamingComSection
    :proList="store.content.proList"
    :arrowIcon="store.content.arrowIcon"
    :playIcon="store.content.playIcon"
    />

    <gamingArenaSection
    :arenaSquares="store.content.arenaSquares"
    />

    <liveSection
    :liveStream="store.content.liveStream"
    />

    <matchSection/>

    <chooseBestSection
    :bestCharacters="store.content.bestCharacters"
    />

    <battleSection/>

    <expertsSection
    :experts="store.content.experts"
    :socialsIcons="store.content.socialsIcons"
    />

    <clientSection
    :clients="store.content.clients"
    />

    <shopSection
    :products="store.content.products"
    :shopIcons="store.content.shopIcons"
    :stars="store.content.stars"
    :cartIcon="store.content.cartIcon"
    :cart="store.content.cart"
    :totalPrice="store.content.totalPrice"
    />

    <articlesSection/>

    <newsLetterSection
    :emails="store.content.emails"
    />

  </main>

</template>

<style >

main{

  position: relative;
  
}

</style>
