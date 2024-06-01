import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Title from '../components/title/Title';
import FacebookIco from '../../public/image/global/facebook-ico';
import TwitterIco from '../../public/image/global/twitter-ico';
import PinterestIco from '../../public/image/global/pinterest-ico';
import InstagramIco from '../../public/image/global/instagram-ico';
const Team = () => {
  const teamData = [
    {
      image: '/image/team/1.jpg',
      name: 'MATTHEW DIX',
      work: 'Graphic Design',
    },
    {
      image: '/image/team/2.jpg',
      name: 'CHRISTOPHER CAMPBELL',
      work: 'Branding/UX design',
    },
    {
      image: '/image/team/3.jpg',
      name: 'MICHAEL FERTIG',
      work: 'Developer',
    },
  ];
  return (
    <section className="pb-8 lg:pb-24 dark:bg-slate-800 dark:text-white">
      <div className="container">
        <Title
          uptitle="Who we are"
          title="Meet our team"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />

        <div className="flex justify-between space-x-4 sm:justify-center sm:flex-wrap">
          {teamData.map((data, index) => {
            return (
              <div className="mb-10" key={index}>
                <div className="relative group bg-cyan-400 max-w-[340px]">
                  <div className="transition-translate duration-300 ease-in-out lg:group-hover:-translate-x-4 lg:group-hover:-translate-y-4">
                    <LazyLoadImage alt="image" src={data.image} effect="blur" className='inline-block'/>
                  </div>
                  <div className="absolute top-0 w-full h-full flex items-center flex-col justify-center text-center opacity-0 invisible hover-gradient transition-translate duration-300 ease-in-out lg:group-hover:visible lg:group-hover:opacity-90 lg:group-hover:-translate-y-4 lg:group-hover:-translate-x-4">
                    <div className="flex mb-[-1px]">
                      <a
                        href="#"
                        className="inline-block p-2 bg-yellow-500 text-red-500 hover:bg-red-500 border-r-2 border-red-400 hover:text-white"
                        aria-label="Facebook"
                        title="Facebook"
                      >
                        <FacebookIco className="w-6 h-6" />
                      </a>
                      <a
                        href="#"
                        className="inline-block p-2 bg-yellow-500 text-red-500 hover:bg-red-500 border-r-2 border-red-400 hover:text-white"
                        aria-label="Twitter"
                        title="Twitter"
                      >
                        <TwitterIco className="w-6 h-6" />
                      </a>
                      <a
                        href="#"
                        className="inline-block p-2 bg-yellow-500 text-red-500 hover:bg-red-500 border-r-2 border-red-400 hover:text-white"
                        aria-label="Pinterest"
                        title="Pinterest"
                      >
                        <PinterestIco className="w-6 h-6" />
                      </a>
                      <a
                        href="#"
                        className="inline-block p-2 bg-yellow-500 text-red-500 hover:bg-red-500 hover:text-white"
                        aria-label="Instagram"
                        title="Instagram"
                      >
                        <InstagramIco className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center pt-4 ">
                  <p className="text-slate-800 font-MontserratRegular uppercase dark:text-white">
                    {data.name}
                  </p>
                  <p className="text-gray-500 font-RobotoLightItalic dark:text-white">
                    {data.work}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
