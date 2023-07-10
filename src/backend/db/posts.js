import { v4 as uuid } from "uuid";
import { formatDate, onlyDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "The Otway Odyssey is Australia’s most iconic mountain bike event. Racing through forests tall and wild, over mountain ranges high and breath-taking, along single track shaped by the wheels of world champions and weekend warriors. THIS IS WHERE LEGENDS ARE CARVED.",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "karthikgoud",
    postImage: null,
    postVideo:
      "https://res.cloudinary.com/dgesxov4w/video/upload/v1688802417/plahpkrqctzxwwaw68hl.mp4",
    createdAt: "2021-03-21",

    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Let connect here...https://github.com/karthikgoud",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "karthikgoud",
    postImage: null,
    postVideo: null,
    createdAt: "2021-03-21",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Checkout my React e-commerce project https://all-in-one-shop-ecom.netlify.app/ ",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "karthikgoud",
    postImage:
      "https://res.cloudinary.com/dgesxov4w/image/upload/v1688039097/postImages/allinone-logo-crop_jewwgw.jpg",
    postVideo: null,
    createdAt: "2023-04-21",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Kedarnath is a town and Nagar Panchayat in Rudraprayag district of Uttarakhand, India, known primarily for the Kedarnath Temple. It is approximately 86 kilometres from Rudraprayag, the district headquarter. Kedarnath is the most remote of the four Chota Char Dham pilgrimage sites.",
    likes: {
      likeCount: 35,
      likedBy: [],
      dislikedBy: [],
    },
    username: "karthikgoud",
    postImage:
      "https://res.cloudinary.com/dgesxov4w/image/upload/v1688895279/qjtxkfpvoocz9dhqgejk.jpg",
    postVideo: null,
    createdAt: "2023-01-26",

    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Starbucks Reserve is a program by the international coffeehouse chain Starbucks. The program involves operation of worldwide roasteries; currently six are in operation. Also part of the program are 28 coffee bars preparing Starbucks Reserve products, what Starbucks considers its rarest and best-quality coffees,",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    postImage:
      "https://res.cloudinary.com/dgesxov4w/image/upload/v1688796824/vd05iju0nlr861une2kw.jpg",
    postVideo: null,
    createdAt: "2022-06-14",

    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Hungry....",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    postImage:
      "https://media.giphy.com/media/ZeKUG0XRpTdE8lGwW2/giphy-downsized-large.gif",
    postVideo: null,
    createdAt: "2022-06-14",

    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Many applications depend on the web for their content. By hosting image assets on a third-party cloud platform, you can ensure that your apps have fast, efficient access to them, you will avoid the storage and bandwidth costs you’d incur hosting the assets using on-premise servers. This is why image-hosting cloud solutions like Cloudinary have become increasingly popular.",
    likes: {
      likeCount: 14,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rahulbaxi",
    postImage: null,
    postVideo: null,
    createdAt: "2022-08-14",

    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Mysore Palace, also known as Amba Vilas Palace, is a historical palace and a royal residence. It is located in Mysore, Karnataka, India. It used to be the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills eastward",
    likes: {
      likeCount: 14,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rahulbaxi",
    postImage:
      "https://res.cloudinary.com/dgesxov4w/image/upload/v1688993312/ashim-d-silva-KF7pv-8OiyY-unsplash_nmoaax.jpg",
    postVideo: null,
    createdAt: "2022-05-14",

    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River’s sacred waters and perform funeral rites. Along the city's winding streets are some 2,000 temples, including Kashi Vishwanath, the “Golden Temple,” dedicated to the Hindu god Shiva.",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    username: "carlsmith",
    postImage:
      "https://res.cloudinary.com/dgesxov4w/image/upload/v1688796051/bu8wgcutxpbwzyutyjxd.jpg",
    postVideo: null,
    createdAt: "2022-03-14",

    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Destructuring in JavaScript has totally changed the way JavaScript is written these days;  code is more concise to write but but, from a visual standpoint, the syntax of the language has changed so much.  Any good developer knows, however, that change is the constant we live in.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "carlsmith",
    postImage: null,
    postVideo: null,
    createdAt: "2022-02-14",

    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Tesla, Inc. is an American multinational automotive and energy company headquartered in Austin, Texas. Tesla designs and manufactures electric vehicles, stationary battery energy storage devices from home to grid-scale, solar panels and solar roof tiles, an",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    username: "elonmusk",
    postImage:
      "https://res.cloudinary.com/dgesxov4w/image/upload/v1687693324/postImages/bram-van-oost-4xM5cytsdMo-unsplash_1_b8c4m7.jpg",
    postVideo: null,
    createdAt: "2019-02-14",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "A crash test is a form of destructive testing usually performed in order to ensure safe design standards in crashworthiness and crash compatibility for various modes of transportation (see automobile safety) or related systems and components.",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    username: "lucypaul",
    postImage: null,
    postVideo:
      "https://res.cloudinary.com/dgesxov4w/video/upload/v1688457674/tdrtfeducsbcsj7l9jr2.mp4",
    createdAt: "2023-05-04",
    updatedAt: formatDate(),
  },
];
