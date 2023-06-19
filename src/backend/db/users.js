import { v4 as uuid } from "uuid";
import { formatDate, onlyDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bio: "Aspiring Web Application Developer",
    avatarUrl:
      "https://res.cloudinary.com/dgesxov4w/image/upload/v1686982311/carlos_ebkcod.jpg",
    website: "https://Adarsh.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
  },

  {
    _id: uuid(),
    firstName: "Soni",
    lastName: "Subaham",
    username: "shubhamsoni",
    password: "shub",
    bio: "Aspiring Web Application Developer",
    avatarUrl:
      "https://images.unsplash.com/photo-1559418162-0d309d8d10a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    website: "https://Subaham.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
  },

  {
    _id: uuid(),
    firstName: "Rahul",
    lastName: "Baxi",
    username: "rahulbaxi",
    password: "rahul999",
    bio: "Aspiring BackEnd Engineer",
    avatarUrl:
      "https://images.unsplash.com/photo-1603617902802-1a72cc4a50c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=359&q=80",
    website: "https://Rahul.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
  },
];
