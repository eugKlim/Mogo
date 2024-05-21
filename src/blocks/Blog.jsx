import React from 'react';
import Title from '../components/title/Title';

const Blog = () => {
  const blogCardData = [
    {
      dateNum: '5',
      dateMonth: 'JAN',
      title: 'LOREM IPSUM DOLOR SIT AMET',
      text: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/image/blog/1.jpg',
      watch: '12',
      comment: '8',
    },
    {
      dateNum: '8',
      dateMonth: 'JAN',
      title: 'SED DO EIUSMOD TEMPOR',
      text: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/image/blog/2.jpg',
      watch: '22',
      comment: '1',
    },
    {
      dateNum: '14',
      dateMonth: 'JAN',
      title: 'INCIDIDUNT UT LABORE ET DOLORE',
      text: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/image/blog/3.jpg',
      watch: '555',
      comment: '231',
    },
  ];

  return (
    <section className="pb-5 container">
      <Title uptitle="Follow Us" title="Latest Blog" />

      <div className="flex sm:flex-wrap sm:justify-center xl:flex-nowrap justify-between space-x-8">
        {blogCardData.map((data, index) => {
          return (
            <div className="max-w-[340px] mb-20" key={index}>
              <div className="relative">
                <img src={data.image} alt="image" />
                <div className="absolute bottom-4 -left-2 inline-block text-center bg-cyan-400 text-white py-1 px-2">
                  <div className="uppercase font-MontserratBold text-2xl">
                    {data.dateNum} <span className="block font-RobotoLightItalic text-base">{data.dateMonth}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-MontserratBold text-slate-800 uppercase pt-4 pb-3">{data.title}</h4>
                <p className="text-gray-500">{data.text}</p>
                <div className="w-full h-[1px] bg-gray-400 my-3"></div>
                <div className="flex space-x-4">
                  <div className="flex space-x-2 items-center">
                    <img src="/image/global/watch-ico.svg" alt="icon watch" className="h-4" />
                    <span className="font-RobotoLightItalic text-base">{data.watch}</span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <img src="/image/global/comment-ico.svg" alt="icon comment" className="h-4" />
                    <span className="font-RobotoLightItalic text-base">{data.comment}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
