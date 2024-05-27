import React from 'react';

const Intro = () => {
  const introItemsData = [
    {
      number: '01',
      title: 'Intro',
    },
    {
      number: '02',
      title: 'About',
    },
    {
      number: '03',
      title: 'Work',
    },
    {
      number: '04',
      title: 'Contacts',
    },
  ];

  return (
    <section className="bg-intro-bg bg-options min-w-full mt-[-100px] container pb-9 text-white pt-[300px] sm:bg-cover">
    {/* <section className="bg-intro-bg bg-options bg-cover max-w-[2560px] mt-[-100px] container pb-9 text-white pt-[300px] sm:bg-cover"> */}
      <div>
        <h2 className="upTitle text-white mb-8 md:text-6xl sm:text-4xl">
          Creative Template
        </h2>
        <h3 className="title text-white md:text-7xl sm:text-5xl title-line-intro">
          Welcome <span className="block">to MoGo</span>
        </h3>

        <button
          className="block mx-auto bg-transparent border-white border-2 uppercase py-2 px-6 mt-[100px] lg:hover:bg-white lg:hover:text-stone-900 font-MontserratBold"
          title="Learn more"
          aria-label="Learn more"
        >
          Learn more
        </button>
      </div>

      <div className="flex flex-wrap md:flex-nowrap md:space-x-8 mt-32">
        {introItemsData.map((data, index) => {
          return (
            <div className="mt-5 md:w-1/4 w-1/2 px-4" key={index}>
              <div className="border-t-4 border-white">
                <span className="bg-red-500 block w-[30%] h-1 -mt-1"></span>
              </div>
              <div className="mt-3">
                <span className="font-MontserratBold mr-2 text-2xl">
                  {data.number}
                </span>
                <span className="font-MontserratRegular text-lg">
                  {data.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Intro;
