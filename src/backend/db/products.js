import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
    // categoryName: "non-fiction",
    image:
      "https://ik.imagekit.io/u6itcrvxy/heaphone_collection/sennheiser/Sennheiser04.png?updatedAt=1682678162624",
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "3000",
    categoryName: "horror",
    image:
      "https://ik.imagekit.io/u6itcrvxy/heaphone_collection/sennheiser/Sennheiser05.png?updatedAt=1682678162340",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
    image:
      "https://ik.imagekit.io/u6itcrvxy/heaphone_collection/sennheiser/Sennheiser02.png?updatedAt=1682678161878",
  },
];
