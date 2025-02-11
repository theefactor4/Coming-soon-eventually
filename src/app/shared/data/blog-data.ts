import { IBlog } from '../types/blog-type';

const blog_data: IBlog[] = [
  {
    id: 1,
    img: '/assets/img/blog/blog_post01.jpg',
    author: 'Admin',
    date: 'AUG 19, 2024',
    comments: 0,
    title: 'ZOMBIE LAND TOURNAMENT MAX',
    desc: "Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
  },
  {
    id: 2,
    img: '/assets/img/blog/blog_post02.jpg',
    author: 'ADMIN',
    date: 'AUG 16, 2024',
    comments: 0,
    title: 'PLAY TO EARN CRYPTO GAMES PLACE',
    desc: "Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
  },
  {
    id: 3,
    img: '/assets/img/blog/blog_post03.jpg',
    author: 'ADMIN',
    date: 'MAY 10, 2024',
    comments: 0,
    title: 'NFT GAMES ANDROID NO INVESTMENT',
    desc: "Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
  },
  {
    id: 4,
    img: '/assets/img/blog/blog_post04.jpg',
    author: 'ADMIN',
    date: 'MAY 10, 2024',
    comments: 2,
    title: 'NFT GAMES ANDROID NO INVESTMENT',
    desc: "Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
  },
];

export default blog_data;

export const blogDataTwo: IBlog[] = [
  {
    id: 5,
    img: '/assets/img/blog/blog_card3-1.jpg',
    date: 'Aug 19, 2024',
    author: 'ADMIN',
    comments: 0,
    title: 'Special edition boots campaign year end sale for you',
    desc: "Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
  },
  {
    id: 6,
    img: '/assets/img/blog/blog_card3-2.jpg',
    date: 'Aug 19, 2024',
    author: 'ADMIN',
    comments: 0,
    title: 'Special edition boots campaign year end sale for you',
    desc: "Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
  },
];

export const all_blogs = [...blog_data, ...blogDataTwo];
