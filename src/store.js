import { reactive } from "vue";

export const store = reactive({

    content : {

        pageLogo : "../../src/assets/img/menulogo.png",

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

        readMore : "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quam, distinctio vero, repellendus iure aspernatur aperiam sunt eligendi numquam modi possimus molestias libero? Veniam consequatur quisquam voluptas recusandae accusamus, eius amet, aut voluptate enim delectus iure velit repellat repellendus quos laboriosam omnis iste? Odit dolorem nobis saepe excepturi magni, dignissimos iure qui recusandae laudantium doloribus repudiandae sequi, unde sunt consectetur quibusdam iste esse nisi ex eveniet voluptates voluptatum. Quibusdam dolorum sit laborum dolorem delectus sequi illum! Laudantium earum perferendis nisi dicta consequuntur? Expedita ea vero placeat, ab explicabo animi excepturi, tempora tenetur ducimus dolorum ratione cupiditate blanditiis quis aut dolores?"

    }
    
})