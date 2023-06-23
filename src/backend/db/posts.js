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
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: "2021-03-21",
    // createdAt: onlyDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    likes: {
      likeCount: 35,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: "2016-07-01",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et hars voluptas s aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: "2023-06-14",
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
    createdAt: "2022-08-14",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Web for their content. By hosting image assets on a third-party cloud platform, you can ensure that your apps have fast, efficient access to them, you will avoid the storage and bandwidth costs you’d incur hosting the assets using on-premise servers. This is why image-hosting cloud solutions like Cloudinary have become increasingly popular.",
    likes: {
      likeCount: 14,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rahulbaxi",
    createdAt: "2022-05-14",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Efficient access to them, you will avoid the storage and bandwidth costs you’d incur hosting the assets using on-premise servers. This is why image-hosting cloud solutions like Cloudinary have become increasingly popular.",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    username: "carlsmith",
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
    createdAt: "2019-02-14",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Attempting to develop inventions he could patent and market, Tesla conducted a range of experiments with mechanical oscillators/generators, electrical discharge tubes, and early X-ray imaging. He also built a wirelessly controlled boat, one of the first ever exhibited. Tesla became well known as an inventor and demonstrated his achievements to celebrities and wealthy",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    username: "lucypaul",
    createdAt: "2023-05-04",
    updatedAt: formatDate(),
  },
];
