import React from 'react';

const Facts = () => {
  const factsData = [
    {
      number: '42',
      text: 'WEB DESIGN PROJECTS',
    },
    {
      number: '123',
      text: 'HAPPY CLIENT',
    },
    {
      number: '15',
      text: 'AWARD WINNER',
    },
    {
      number: '99',
      text: 'CUP OF COFFEE',
    },
    {
      number: '24',
      text: 'MEMBERS',
    },
  ];
  return (
    <section className="flex flex-wrap justify-center bg-cyan-400 text-white p-4">
      {factsData.map((data, index) => {
        return (
          <div className="xl:w-1/5 sm:w-2/5 text-center font-MontserratBold border-2 border-cyan-200 py-10" key={index}>
            <p className="font-MontserratRegular text-7xl">{data.number}</p>
            <p className="uppercase text-sm">{data.text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Facts;
