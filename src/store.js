import { reactive } from "vue";

export const store = reactive({

    content : {

        navOptions : [

        {   name : "home",
            type: "button",
            icon : "../../src/assets/img/image.svg",
            options :['option 1','option 2','option 3','option 4',]},

        {   name : "pages",
            type: "button",
            icon : "../../src/assets/img/image.svg",
            options :['option 1','option 2','option 3','option 4',]}, 
            
        {   name : "tournament",
            type: "link",},     

        {   name : "shop",
            type: "button",
            icon : "../../src/assets/img/image.svg",
            options :['option 1','option 2','option 3','option 4',]}, 
               
        {   name : "blog",
            type: "button",
            icon : "../../src/assets/img/image.svg",
            options :['option 1','option 2','option 3','option 4',]},   
            
        {   name : "contact",
            type: "link",},

        ],

        pageLogo : "../../src/assets/img/menulogo.png",

        searchIcon : "../../src/assets/img/image (1).svg",

        shopIcon : "../../src/assets/img/image (3).svg",

        removeIcon : "../src/assets/img/image (2).svg",

        socialsIcons : [

            '../../src/assets/img/image (4).svg',

            '../../src/assets/img/image (5).svg',

            '../../src/assets/img/image (6).svg',

            '../../src/assets/img/image (7).svg',

        ],

        greetings : "welcome to raxg",

        slogan : "are you ready for your next challenge ?",

        arrowIcon: "../../src/assets/img/image (8).svg",

        playIcon: "../../src/assets/img/image (9).svg",

        readMore : "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quam, distinctio vero, repellendus iure aspernatur aperiam sunt eligendi numquam modi possimus molestias libero? Veniam consequatur quisquam voluptas recusandae accusamus, eius amet, aut voluptate enim delectus iure velit repellat repellendus quos laboriosam omnis iste? Odit dolorem nobis saepe excepturi magni, dignissimos iure qui recusandae laudantium doloribus repudiandae sequi, unde sunt consectetur quibusdam iste esse nisi ex eveniet voluptates voluptatum. Quibusdam dolorum sit laborum dolorem delectus sequi illum! Laudantium earum perferendis nisi dicta consequuntur? Expedita ea vero placeat, ab explicabo animi excepturi, tempora tenetur ducimus dolorum ratione cupiditate blanditiis quis aut dolores?",

        copyRight: "RaxG",

        designer : "NextGenerationDev",

        teams: [

            {
                name:"ninja gaming",
                badge : "../../src/assets/img/1.png"
            },

            {
                name:"king gaming",
                badge : "../../src/assets/img/2.png"
            },

            {
                name:"krull gaming",
                badge : "../../src/assets/img/3.png"
            },

            {
                name:"panda gaming",
                badge : "../../src/assets/img/4.png"
            },

            {
                name:"witch gaming",
                badge : "../../src/assets/img/5.png"
            },

            {
                name:"astro gaming",
                badge : "../../src/assets/img/6.png"
            },

        ],

        proList: [

            {
                info:"Lorem ipsum dolor sit amet.",
                icon:"../../src/assets/img/image (10).svg"
            },

            {
                info:"Lorem ipsum dolor sit amet.",
                icon:"../../src/assets/img/image (10).svg"
            },

            {
                info:"Lorem ipsum dolor sit amet.",
                icon:"../../src/assets/img/image (10).svg"
            },

            {
                info:"Lorem ipsum dolor sit amet.",
                icon:"../../src/assets/img/image (10).svg"
            },

            {
                info:"Lorem ipsum dolor sit amet.",
                icon:"../../src/assets/img/image (10).svg"
            },

        ],

        arenaSquares : [

            {
                title:"live streaming",
                icon:"../../src/assets/img/feature1.png",
                info:"Lorem ipsum dolor sit amet.",
                type:"green",
            },

            {
                title:"gaming news",
                icon:"../../src/assets/img/feature2.png",
                info:"Lorem ipsum dolor sit amet.",
                type:"violet"
            },

            {
                title:"great tournament",
                icon:"../../src/assets/img/feature3.png",
                info:"Lorem ipsum dolor sit amet.",
                type:"violet"
            },

            {
                title:"awward ceremony",
                icon:"../../src/assets/img/feature4.png",
                info:"Lorem ipsum dolor sit amet.",
                type:"green"
            },

        ],

        liveStream : [

            {
                title:"call of deauty",
                big:"../../src/assets/img/feature1.png",
                small:"../../src/assets/img/v-small1.png" ,
                info:"  Lorem ipsum dolor sit amet.",
                active:true,
            },

            {
                title:"assaain creed",
                big:"",
                small:"../../src/assets/img/v-small2.png",
                info:"Lorem ipsum dolor sit amet.",
                active:false
            },

        ]

    }
    
})