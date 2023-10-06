import { Fade } from "react-awesome-reveal";
import { MonthTitle } from "../../components/month-title";
import { NavigateButton } from "../../components/navigation-button";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import "./styles.css";

export function Mar23() {
  function showEt() {
    const element = document.querySelector("#et");
    console.log(element);
    //@ts-ignore
    element.style.display = "block";
  }

  return (
    <div className="w-screen flex flex-col items-center gap-4 relative py-20">
      <MonthTitle title="Março 2023" />

      <div className="w-96 text-center px-6">
        <button onClick={showEt}>
          <img src="https://media4.giphy.com/avatars/madmenmarketing/LB0cOBYTHEKc.gif" />
        </button>

        <h1 className="leading-7">Cuidado! Não clique no ET...</h1>

        <Fade direction="down">
          <div
            id="et"
            className="w-full mt-4 border-x-8"
            style={{ display: "none" }}
          >
            <img src="/mar23/wanted.png" />

            <h1 className="leading-7 mt-4">Falei pra não clicar!!!</h1>
          </div>
        </Fade>
      </div>

      <Fade direction="up">
        <div className="w-screen mt-20 relative h-[30rem] overflow-hidden">
          <h1 className="text-center font-Dancing-Script leading-4">
            Come come come...
          </h1>
          <h1 className="text-center font-Dancing-Script">Meu dragãozinho</h1>

          <img
            className="w-64 mx-auto rounded-3xl border p-2"
            src="/mar23/img1.jpg"
          />
          <img
            className="appearAnimation absolute left-[-16rem] bottom-0"
            src="https://gifs.eco.br/wp-content/uploads/2022/08/gifs-de-dragao-4.gif"
          />
        </div>
      </Fade>

      <Fade direction="up">
        <div className="w-screen mt-10 flex flex-col gap-6 items-center relative">
          <p className="w-80">
            Em Março foi a primeira vez que fomos no parque juntos. E a gente se
            meteu no meio do mato pra chegar no topo do morro e combinamos que a
            gente iria fazer várias trilhas um dia.
          </p>

          <p className="w-80 mb-36">
            E minha Biologo chegou lá em cima quase sem conseguir respirar...
          </p>

          <div className="w-full grid grid-cols-3 absolute bottom-28 z-0">
            <img
              className="w-full h-56 object-cover border-x-2 border-green-100"
              src="/mar23/park/gif0.gif"
            />
            <img
              className="w-full h-56 object-cover border-x-2 border-green-100"
              src="/mar23/park/img4.jpg"
            />
            <img
              className="w-full h-56 object-cover border-x-2 border-green-100"
              src="/mar23/park/gif1.gif"
            />
          </div>
          <img
            className="z-10"
            src="https://t4.ftcdn.net/jpg/05/26/44/15/360_F_526441552_4F2NaH9WSTlxwsulhIKthCXAlbq50Zi2.png"
          />
        </div>
      </Fade>

      <Fade direction="up">
        <h1 className="font-Dancing-Script mt-14">O primeiro digno...</h1>

        <div className="w-screen h-[47rem]  relative">
          <img
            className="w-40 h-56 object-cover border-2 p-1 rounded-xl border-orange-600 absolute left-12"
            src="/mar23/park/img5.jpg"
          />
          <img
            className="w-40 h-56 object-cover border-2 p-1 rounded-xl border-orange-600 absolute left-32 top-36"
            src="/mar23/park/img6.jpg"
          />
          <img
            className="w-40 h-56 object-cover border-2 p-1 rounded-xl border-orange-600 absolute left-56 top-[21rem]"
            src="/mar23/park/img7.jpg"
          />
          <img
            className="absolute w-56 top-[18rem] left-[-2rem]"
            src="https://3.bp.blogspot.com/-YntQQBHE9Cs/VOKPLe_6_WI/AAAAAAAAjwc/MR-I31m9UAw/s1600/frutas-em-png-queroimagem-cei%C3%A7a-crispim%2B(1).png"
          />
          <img
            className="w-40 h-56 mr-4 object-cover border-2 p-1 rounded-xl border-orange-600 absolute left-32 top-[32rem]"
            src="/mar23/park/gif2.gif"
          />
        </div>
      </Fade>

      <Fade direction="up">
        <h1 className="font-Dancing-Script w-80 text-center leading-6 mt-14">
          Então... Para a minha garota, só um eu te amo não basta. Então, "Eu te
          amo" em várias línguas diferentes meu amor.
        </h1>
        <img
          className="bg-white rounded-t-3xl mt-4"
          src="https://previews.123rf.com/images/lozanona/lozanona1401/lozanona140100068/25019525-i-love-you-words-in-many-languages.jpg"
        />
      </Fade>

      <Fade direction="up">
        <h1 className="font-Dancing-Script w-80 text-center leading-9 mt-10">
          Os melhores momentos são com você
        </h1>

        <Carousel showThumbs={false} >
          <img
            className="w-full h-[35rem] object-cover"
            src="/mar23/park/gif4.gif"
          />

          <img
            className="w-full h-[35rem] object-cover"
            src="/mar23/park/img0.jpeg"
          />
        </Carousel>
      </Fade>

      <NavigateButton
        className="mt-10 w-80 py-3 border border-zinc-500 text-center rounded "
        text="Voltar ao calendário"
        design="simple"
        navigateTo="/Calendar"
      />
    </div>
  );
}
