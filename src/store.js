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

        shopIcons : [

            '../../src/assets/img/image (16).svg',

            '../../src/assets/img/image (18).svg',

        ],

        cartIcon :  '../../src/assets/img/image (17).svg',

        stars :  '../../src/assets/img/image (19).svg',

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

        ],

        bestCharacters : [

            [

                {
                    title:"call of deauty",
                    cover:"../../src/assets/img/protfolio1.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

                {
                    title:"assaain creed",
                    cover:"../../src/assets/img/protfolio2.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false
                },

                {
                    title:"tomb raider",
                    cover:"../../src/assets/img/protfolio3.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false
                },

                {
                    title:"mortal kombat x",
                    cover:"../../src/assets/img/protfolio4.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false
                },

            ],

            [

                {
                    title:"mortal kombat x",
                    cover:"../../src/assets/img/protfolio4.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false
                },

                {
                    title:"tomb raider",
                    cover:"../../src/assets/img/protfolio3.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false
                },

                {
                    title:"assaain creed",
                    cover:"../../src/assets/img/protfolio2.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false
                    
                },

                {
                    title:"call of deauty",
                    cover:"../../src/assets/img/protfolio1.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

            ],

        ],
    
        experts : [

            [

                {
                    name:"cristiano messi",
                    profilePic:"../../src/assets/img/team1.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

                {
                    name:"sergio naymer",
                    profilePic:"../../src/assets/img/team2.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false,
                },

                {
                    name:"antonella roccuzzo",
                    profilePic:"../../src/assets/img/team3.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false,
                },

                {
                    name:"lionel ramos",
                    profilePic:"../../src/assets/img/team4.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false,
                },

            ],

            [

                {
                    name:"lionel ramos",
                    profilePic:"../../src/assets/img/team4.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false,
                },

                {
                    name:"antonella roccuzzo",
                    profilePic:"../../src/assets/img/team3.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false,
                },

                {
                    name:"sergio naymer",
                    profilePic:"../../src/assets/img/team2.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false,
                },

                {
                    name:"cristiano messi",
                    profilePic:"../../src/assets/img/team1.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

            ],

        ],

        clients : [

            [

                {
                    name:"client 1",
                    profilePic:"../../src/assets/img/test1.png",
                    cit:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

                {
                    name:"client 2",
                    profilePic:"../../src/assets/img/test2.png",
                    cit:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

                {
                    name:"client 3",
                    profilePic:"../../src/assets/img/test3.png",
                    cit:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

                {
                    name:"client 4",
                    profilePic:"../../src/assets/img/test4.png",
                    cit:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

            ],

            [

                {
                    name:"client 5",
                    profilePic:"../../src/assets/img/test4.png",
                    cit:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

                {
                    name:"client 6",
                    profilePic:"../../src/assets/img/test3.png",
                    cit:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

                {
                    name:"client 7",
                    profilePic:"../../src/assets/img/test2.png",
                    cit:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

                {
                    name:"client 8",
                    profilePic:"../../src/assets/img/test1.png",
                    cit:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

            ]

        ],

        products : [

            [

                {
                    name:"console",
                    Pic:"../../src/assets/img/s1.png",
                    quality: 4,
                    price: "800",
                    discountedP : "699"
                },

                {
                    name:"mause",
                    Pic:"../../src/assets/img/s2.png",
                    quality: 3,
                    price: "100",
                    discountedP : "55"
                },

                {
                    name:"vx headset",
                    Pic:"../../src/assets/img/s3.png",
                    quality: 4,
                    price: "1250",
                    discountedP : "999"
                },

                {
                    name:"headphones",
                    Pic:"../../src/assets/img/s4.png",
                    quality: 2,
                    price: "500",
                    discountedP : "355"
                },

            ],

            [

                {
                    name:"headphones",
                    Pic:"../../src/assets/img/s4.png",
                    quality: 2,
                    price: "500",
                    discountedP : "355"
                },

                {
                    name:"vx headset",
                    Pic:"../../src/assets/img/s3.png",
                    quality: 4,
                    price: "1250",
                    discountedP : "999"
                },

                {
                    name:"mause",
                    Pic:"../../src/assets/img/s2.png",
                    quality: 3,
                    price: "100",
                    discountedP : "55"
                },

                {
                    name:"console",
                    Pic:"../../src/assets/img/s1.png",
                    quality: 2,
                    price: "800",
                    disconutedP : "699"
                },

            ]

        ],

        cart : []

    }
    
})