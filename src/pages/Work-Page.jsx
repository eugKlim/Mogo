import React from 'react';
import { Helmet } from 'react-helmet-async';
import Title from '../components/title/Title';
import Work from '../components/work/Work';

const WorkPage = () => {
  return (
    <>
      <Helmet>
        <title>MoGo - Work</title>
        <meta name="description" content="Mogo lorem description" />
        <meta name="keywords" content="Mogo, page, react, Work" />
        <meta name="author" content="MoGo" />
      </Helmet>
      <section className="dark:text-white text-slate-500">
        <Work />
        <div className="container">
          <Title
            uptitle="Hello"
            title="I am work page"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <div className=" flex justify-center text-center pb-10">
            <p className="w-10/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum rem soluta sapiente explicabo, dolorem, corrupti
              ducimus ipsam maiores aspernatur unde saepe minima eveniet quidem
              voluptates vitae nisi iusto in impedit atque molestiae! Reiciendis
              libero eaque temporibus sunt ad sed quos unde? Commodi tenetur
              sint nostrum neque incidunt, natus voluptatibus recusandae
              delectus asperiores maxime illo doloribus omnis molestiae
              expedita, unde ad nisi repellat? Fuga placeat numquam, rerum
              quaerat consectetur sapiente. Earum velit ab corporis, soluta
              perferendis architecto corrupti rem vel dicta accusantium fuga
              expedita placeat. Sit blanditiis delectus nisi! Libero iusto ullam
              aspernatur possimus laborum minus tempora facilis architecto
              dolore dolorum doloremque, velit qui distinctio dolorem accusamus
              ab repellat illum molestiae quia excepturi quidem maiores earum!
              Consequuntur commodi modi molestiae sunt aliquid excepturi
              perspiciatis, nostrum eaque illum dignissimos quod, veniam
              nesciunt deserunt quo eius in maxime adipisci doloremque,
              distinctio beatae voluptatem. Pariatur quam laudantium praesentium
              cum atque aut a perferendis libero quos ab itaque consequatur
              minus molestias similique maiores eligendi ratione odio voluptates
              porro inventore sit, repellendus laboriosam! Voluptatibus vel
              distinctio voluptatem, porro, maiores harum consequuntur beatae
              quidem eius modi reprehenderit tempore, nisi perspiciatis! Quos
              possimus impedit unde modi ullam eos facere tempore maiores totam
              ut ipsam omnis et, doloremque corporis?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkPage;
