import { reactive } from "vue";

export const store = reactive({

    content : {

        navOptions : [

        {   name : "home",
            type: "button",
            icon : "/img/image.svg",
            options :['option 1','option 2','option 3','option 4',]},

        {   name : "pages",
            type: "button",
            icon : "/img/image.svg",
            options :['option 1','option 2','option 3','option 4',]}, 
            
        {   name : "tournament",
            type: "link",},     

        {   name : "shop",
            type: "button",
            icon : "/img/image.svg",
            options :['option 1','option 2','option 3','option 4',]}, 
               
        {   name : "blog",
            type: "button",
            icon : "/img/image.svg",
            options :['option 1','option 2','option 3','option 4',]},   
            
        {   name : "contact",
            type: "link",},

        ],

        pageLogo : "/img/menulogo.png",

        searchIcon : "/img/image (1).svg",

        shopIcon : "/img/image (3).svg",

        removeIcon : "/img/image (2).svg",

        socialsIcons : [

            '/img/image (4).svg',

            '/img/image (5).svg',

            '/img/image (6).svg',

            '/img/image (7).svg',

        ],

        shopIcons : [

            '/img/image (16).svg',

            '/img/image (18).svg',

        ],

        cartIcon :  '/img/image (17).svg',

        stars :  '/img/image (19).svg',

        greetings : "welcome to raxg",

        slogan : "are you ready for your next challenge ?",

        arrowIcon: "/img/image (8).svg",

        playIcon: "/img/image (9).svg",

        readMore : "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quam, distinctio vero, repellendus iure aspernatur aperiam sunt eligendi numquam modi possimus molestias libero? Veniam consequatur quisquam voluptas recusandae accusamus, eius amet, aut voluptate enim delectus iure velit repellat repellendus quos laboriosam omnis iste? Odit dolorem nobis saepe excepturi magni, dignissimos iure qui recusandae laudantium doloribus repudiandae sequi, unde sunt consectetur quibusdam iste esse nisi ex eveniet voluptates voluptatum. Quibusdam dolorum sit laborum dolorem delectus sequi illum! Laudantium earum perferendis nisi dicta consequuntur? Expedita ea vero placeat, ab explicabo animi excepturi, tempora tenetur ducimus dolorum ratione cupiditate blanditiis quis aut dolores?",

        copyRight: "RaxG",

        designer : "NextGenerationDev",

        teams: [

            {
                name:"ninja gaming",
                badge : "/img/1.png"
            },

            {
                name:"king gaming",
                badge : "/img/2.png"
            },

            {
                name:"krull gaming",
                badge : "/img/3.png"
            },

            {
                name:"panda gaming",
                badge : "/img/4.png"
            },

            {
                name:"witch gaming",
                badge : "/img/5.png"
            },

            {
                name:"astro gaming",
                badge : "/img/6.png"
            },

        ],

        proList: [

            {
                info:"Lorem ipsum dolor sit amet.",
                icon:"/img/image (10).svg"
            },

            {
                info:"Lorem ipsum dolor sit amet.",
                icon:"/img/image (10).svg"
            },

            {
                info:"Lorem ipsum dolor sit amet.",
                icon:"/img/image (10).svg"
            },

            {
                info:"Lorem ipsum dolor sit amet.",
                icon:"/img/image (10).svg"
            },

            {
                info:"Lorem ipsum dolor sit amet.",
                icon:"/img/image (10).svg"
            },

        ],

        arenaSquares : [

            {
                title:"live streaming",
                icon:"/img/feature1.png",
                info:"Lorem ipsum dolor sit amet.",
                type:"green",
            },

            {
                title:"gaming news",
                icon:"/img/feature2.png",
                info:"Lorem ipsum dolor sit amet.",
                type:"violet"
            },

            {
                title:"great tournament",
                icon:"/img/feature3.png",
                info:"Lorem ipsum dolor sit amet.",
                type:"violet"
            },

            {
                title:"awward ceremony",
                icon:"/img/feature4.png",
                info:"Lorem ipsum dolor sit amet.",
                type:"green"
            },

        ],

        liveStream : [

            {
                title:"call of deauty",
                big:"/img/feature1.png",
                small:"/img/v-small1.png" ,
                info:"  Lorem ipsum dolor sit amet.",
                active:true,
            },

            {
                title:"assaain creed",
                big:"",
                small:"/img/v-small2.png",
                info:"Lorem ipsum dolor sit amet.",
                active:false
            },

        ],

        bestCharacters : [

            [

                {
                    title:"call of deauty",
                    cover:"/img/protfolio1.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

                {
                    title:"assaain creed",
                    cover:"/img/protfolio2.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false
                },

                {
                    title:"tomb raider",
                    cover:"/img/protfolio3.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false
                },

                {
                    title:"mortal kombat x",
                    cover:"/img/protfolio4.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false
                },

            ],

            [

                {
                    title:"mortal kombat x",
                    cover:"/img/protfolio4.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false
                },

                {
                    title:"tomb raider",
                    cover:"/img/protfolio3.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false
                },

                {
                    title:"assaain creed",
                    cover:"/img/protfolio2.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false
                    
                },

                {
                    title:"call of deauty",
                    cover:"/img/protfolio1.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

            ],

        ],
    
        experts : [

            [

                {
                    name:"cristiano messi",
                    profilePic:"/img/team1.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

                {
                    name:"sergio naymer",
                    profilePic:"/img/team2.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false,
                },

                {
                    name:"antonella roccuzzo",
                    profilePic:"/img/team3.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false,
                },

                {
                    name:"lionel ramos",
                    profilePic:"/img/team4.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false,
                },

            ],

            [

                {
                    name:"lionel ramos",
                    profilePic:"/img/team4.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false,
                },

                {
                    name:"antonella roccuzzo",
                    profilePic:"/img/team3.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false,
                },

                {
                    name:"sergio naymer",
                    profilePic:"/img/team2.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:false,
                },

                {
                    name:"cristiano messi",
                    profilePic:"/img/team1.png",
                    info:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

            ],

        ],

        clients : [

            [

                {
                    name:"client 1",
                    profilePic:"/img/test1.png",
                    cit:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

                {
                    name:"client 2",
                    profilePic:"/img/test2.png",
                    cit:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

                {
                    name:"client 3",
                    profilePic:"/img/test3.png",
                    cit:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

                {
                    name:"client 4",
                    profilePic:"/img/test4.png",
                    cit:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

            ],

            [

                {
                    name:"client 5",
                    profilePic:"/img/test4.png",
                    cit:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

                {
                    name:"client 6",
                    profilePic:"/img/test3.png",
                    cit:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

                {
                    name:"client 7",
                    profilePic:"/img/test2.png",
                    cit:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

                {
                    name:"client 8",
                    profilePic:"/img/test1.png",
                    cit:"  Lorem ipsum dolor sit amet.",
                    active:true,
                },

            ]

        ],

        products : [

            [

                {
                    name:"console",
                    Pic:"/img/s1.png",
                    quality: 4,
                    price: "800",
                    discountedP : "699"
                },

                {
                    name:"mause",
                    Pic:"/img/s2.png",
                    quality: 3,
                    price: "100",
                    discountedP : "55"
                },

                {
                    name:"vx headset",
                    Pic:"/img/s3.png",
                    quality: 4,
                    price: "1250",
                    discountedP : "999"
                },

                {
                    name:"headphones",
                    Pic:"/img/s4.png",
                    quality: 2,
                    price: "500",
                    discountedP : "355"
                },

            ],

            [

                {
                    name:"headphones",
                    Pic:"/img/s4.png",
                    quality: 2,
                    price: "500",
                    discountedP : "355"
                },

                {
                    name:"vx headset",
                    Pic:"/img/s3.png",
                    quality: 4,
                    price: "1250",
                    discountedP : "999"
                },

                {
                    name:"mause",
                    Pic:"/img/s2.png",
                    quality: 3,
                    price: "100",
                    discountedP : "55"
                },

                {
                    name:"console",
                    Pic:"/img/s1.png",
                    quality: 2,
                    price: "800",
                    disconutedP : "699"
                },

            ]

        ],

        cart : [],

        totalPrice : [0],

        emails : []

    }
    
})