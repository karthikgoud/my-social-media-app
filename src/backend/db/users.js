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
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
  },
];
