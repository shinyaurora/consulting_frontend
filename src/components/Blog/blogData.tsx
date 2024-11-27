import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "John Doe",
    paragraph:
      "John brings over 15 years of experience in consulting, leading our team to deliver strategic solutions aligned with client goals.",
    image: "/images/blog/blog-01.png",
    author: {
      name: "John Doe",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["Director"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Jane Smith",
    paragraph:
      "With 10+ years in IT consulting, Jane helps businesses optimize technology infrastructure with cutting-edge solutions.",
    image: "/images/blog/blog-02.png",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Senior Consultant"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Robert Brown",
    paragraph:
      "Robert ensures success of clients by managing projects and fostering long-term relationships for sustained business growth.",
    image: "/images/blog/blog-03.png",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Client Manager"],
    publishDate: "2025",
  },
];
export default blogData;
