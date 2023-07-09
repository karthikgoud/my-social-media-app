import { v4 as uuid } from "uuid";
import { formatDate, onlyDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Karthik Goud",
    lastName: "R V",
    username: "karthikgoud",
    password: "karthikVeeresh",
    bio: "Web Application Developer",
    avatarUrl:
      "https://res.cloudinary.com/dgesxov4w/image/upload/v1687590221/avatar/man-2_ihtyac.png",
    website: "https://karthikrv-portfolio.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bannerImage:
      "https://res.cloudinary.com/dgesxov4w/image/upload/v1688889804/banners/mountains-g35f0776c2_1280_a0dgit.jpg",
    bookmarks: [],
    following: [
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
        firstName: "Elon",
        lastName: "Musk",
        username: "elonmusk",
        password: "elonmuskX",
        bio: "Entrapreneur",
        avatarUrl:
          "https://images.unsplash.com/photo-1612810806546-ebbf22b53496?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        website: "https://tesla.netlify.app/",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        bookmarks: [],
        following: [],
        followers: [],
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Lucy",
        lastName: "Paul",
        username: "lucypaul",
        password: "lucy123",
        bio: "Entrapreneur,Creator",
        avatarUrl:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80`",
        website: "https://Lucy.netlify.app/",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        bookmarks: [],
        following: [],
        followers: [],
      },
    ],
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
    bannerImage:
      "https://res.cloudinary.com/dgesxov4w/image/upload/v1688892551/banners/buildings-g6fb50eecd_1280_lptqfb.jpg",
    bookmarks: [],
    following: [],
    followers: [],
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
    bannerImage:
      "https://res.cloudinary.com/dgesxov4w/image/upload/v1688892267/banners/festival-g515c128e9_1280_nrahon.jpg",
    bookmarks: [],
    following: [],
    followers: [],
  },

  {
    _id: uuid(),
    firstName: "Carl",
    lastName: "Smith",
    username: "carlsmith",
    password: "carlsmith123",
    bio: " BackEnd Engineer",
    avatarUrl:
      "https://images.unsplash.com/photo-1610611742876-97e4d834d077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    website: "https://Carl.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bannerImage:
      "https://res.cloudinary.com/dgesxov4w/image/upload/v1688890233/banners/mount-fuji-g159464af2_1280_cjsiyl.jpg",
    bookmarks: [],
    following: [],
    followers: [],
  },

  {
    _id: uuid(),
    firstName: "Elon",
    lastName: "Musk",
    username: "elonmusk",
    password: "elonmuskX",
    bio: "Entrapreneur",
    avatarUrl:
      "https://images.unsplash.com/photo-1612810806546-ebbf22b53496?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    website: "https://tesla.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bannerImage:
      "https://res.cloudinary.com/dgesxov4w/image/upload/v1688890298/banners/man-g3dc024978_1280_q35wfg.jpg",
    bookmarks: [],
    following: [],
    followers: [],
  },

  {
    _id: uuid(),
    firstName: "Lucy",
    lastName: "Paul",
    username: "lucypaul",
    password: "lucy123",
    bio: "Entrapreneur,Creator",
    avatarUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80`",
    website: "https://Lucy.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bannerImage:
      "https://res.cloudinary.com/dgesxov4w/image/upload/v1688890874/banners/nature-gd485710e0_1280_kow5su.jpg",
    bookmarks: [],
    following: [],
    followers: [],
  },
];
