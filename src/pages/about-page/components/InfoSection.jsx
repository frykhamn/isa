import React from "react";
import profile from "../../../assets/profile.png";

export const InfoSection = () => {
  return (
    <>
      <div className="">
        <h1 className="font-all text-8xl mx-6 md:mx-0">Isabella Dos Santos</h1>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="p-10">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus, rerum. Maxime dolor ad dignissimos recusandae
            excepturi blanditiis esse beatae velit exercitationem est eveniet
            expedita nihil natus, soluta incidunt iusto voluptatibus? Numquam
            quidem iste dolorem eum sunt porro exercitationem, itaque modi
            accusamus vitae, voluptate hic nemo.
          </p>
          <br />
          <p>
            Dignissimos nostrum voluptas eos, est laudantium tempora eaque.
            Facilis aliquam libero quo illo, voluptates dignissimos. Qui beatae
            at vitae corporis eius quia eaque amet magni! Sunt quisquam corporis
            suscipit iste iusto
          </p>
          <br />
          <p>
            Ecto fugiat quidem libero deleniti voluptate? Hic dicta asperiores
            placeat debitis, commodi maxime qui recusandae consequuntur dolor
            quis accusamus quam ut nulla provident temporibus? Iusto! Dolore,
            quae. Inventore earum dolorem modi culpa quod numquam! Error
            voluptatibus sequi deleniti libero cumque, ut amet eaque ducimus
            praesentium sit assumenda quasi delectus corrupti!{" "}
          </p>
          <p>
            <br />
            Ullam commodi possimus accusantium cumque fuga minima dicta neque
            totam nihil odit provident! Earum officia maxime distinctio?
            Perferendis fuga ipsum dolore sit nihil ab laudantium distinctio
            veritatis
          </p>
        </div>
        <div className="md:p-10 px-10 flex flex-col">
          <p>
            Libero eius hic a assumenda atque! Ullam nisi laboriosam aperiam
            reprehenderit consequatur vero blanditiis illum suscipit ipsum
            obcaecati vitae amet eum, voluptatem omnis iste quidem excepturi
            ipsa nobis fuga dicta earum aliquid at? Laudantium, dicta beatae.
            Quae non quia dolor, iusto error quibusdam ipsum architecto sed
            temporibus nostrum asperiores.
          </p>
          <img src={profile} alt="" className="p-4 mt-4 md:place-self-center" />
        </div>
      </div>
    </>
  );
};
