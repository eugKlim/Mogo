import React from 'react';
import Title from '../components/title/Title';

const Say = () => {
  const sayData = [
    {
      image: '/image/say/1.png',
      name: 'Nick Karvounis',
      work: 'Graphic Design',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
    },
    {
      image: '/image/say/2.png',
      name: 'Jaelynn Castillo',
      work: 'Graphic Design',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
    },
    {
      image: '/image/say/3.png',
      name: 'Mike Petrucci',
      work: 'Graphic Design',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
    },
    {
      image: '/image/say/4.png',
      name: 'Matthew Dix',
      work: 'Graphic Design',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
    },
  ];
  return (
    <section className="bg-feature-bg bg-cover xl:bg-options pb-8">
      <div className="container">
        <Title uptitle="Happy Clients" title="What people say" />

        <div className="grid sm:grid-cols-1 xl:grid-cols-2 xl:space-x-8 pt-5">
          {sayData.map((data, index) => {
            return (
              <div className="flex sm:flex-wrap md:flex-nowrap md:text-left sm:text-center max-w-[520px] mb-20 sm:mx-auto" key={index}>
                <div className="md:mr-[32px] sm:mx-auto sm:mb-4">
                  <img src={data.image} alt="image" className="min-w-[110px] h-[110px] " />
                </div>
                <div>
                  <p className="font-MontserratBold text-lg">{data.name}</p>
                  <p className="font-RobotoLightItalic pt-1">{data.work}</p>
                  <div className="w-20 h-1 bg-red-400 my-5 sm:mx-auto md:mx-0" />
                  <p className="font-RobotoRegular text-gray-500">{data.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Say;
