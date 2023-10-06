import { Fade } from "react-awesome-reveal";
import { MonthTitle } from "../../components/month-title";
import { NavigateButton } from "../../components/navigation-button";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Fev22Carousel } from "../../components/fev23-carousel";

export function Fev23() {
  return (
    <div className="w-screen flex flex-col items-center gap-4 relative py-20">
      <MonthTitle title="Fevereiro 2023" />

      <Fade direction="up">
        <div className="mt-16 w-full px-4 py-10 bg-orange-300 font-semibold relative">
          <p className="w-full pl-20 mx-auto text-right text-black">
            Até hoje não achamos um Hamburguer melhor, virou um dos nossos
            points favoritos gatona. Também foi especial porque ai eu te pedi em
            namoro a 2° vez, oficialmente podia usar nossa aliança na frente de
            todo mundo hihi...
          </p>

          <Carousel className="w-80 mx-auto mt-6" showThumbs={false}>
            <div className="w-80 h-[26rem] p-3 bg-white">
              <img
                className="w-80 h-72 object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEn7nf3okSKSRg9hD56KOdJIz4MkFKcMQ8Ow&usqp=CAU"
              />
            </div>

            <div className="w-80 h-[26rem] p-3 bg-white">
              <img
                className="w-80 h-72 object-cover"
                src="/fev23/guerreiros/img0.jpg"
              />
            </div>

            <div className="w-80 h-[26rem] p-3 bg-white">
              <img
                className="w-80 h-72 object-cover"
                src="/fev23/guerreiros/img1.jpg"
              />
            </div>

            <div className="w-80 h-[26rem] p-3 bg-white">
              <img
                className="w-80 h-72 object-cover"
                src="/fev23/guerreiros/img2.jpg"
              />
            </div>

            <div className="w-80 h-[26rem] p-3 bg-white">
              <img
                className="w-80 h-72 object-cover"
                src="/fev23/guerreiros/img3.jpg"
              />
            </div>

            <div className="w-80 h-[26rem] p-3 bg-white">
              <img
                className="w-80 h-72 object-cover"
                src="/fev23/guerreiros/img4.jpg"
              />
            </div>

            <div className="w-80 h-[26rem] p-3 bg-white">
              <img
                className="w-80 h-72 object-cover"
                src="/fev23/guerreiros/img5.jpeg"
              />
            </div>

            <div className="w-80 h-[26rem] p-3 bg-white">
              <img
                className="h-96 rounded  object-cover"
                src="/fev23/guerreiros/gif0.gif"
              />
            </div>

            <div className="w-80 h-[26rem] p-3 bg-white">
              <img
                className="h-96 rounded  object-cover"
                src="/fev23/guerreiros/gif1.gif"
              />
            </div>

            <div className="w-80 h-[26rem] p-3 bg-white">
              <img
                className="h-96 rounded  object-cover"
                src="/fev23/guerreiros/gif2.gif"
              />
            </div>
          </Carousel>

          <img
            className="absolute z-20 bottom-[-4rem] right-0 shadow-sm"
            src="https://media.tenor.com/8m4sSqF0nGIAAAAj/hamburger-joypixels.gif"
          />

          <img
            className="absolute left-[-4rem] top-[-4rem] z-20 shadow-sm"
            src="https://media.tenor.com/8m4sSqF0nGIAAAAj/hamburger-joypixels.gif"
          />
        </div>
      </Fade>

      <div className="w-screen mt-20">
        <Fade direction="up">
          <p className="mx-auto w-80 text-center">
            Fizemos nossa primeira "Viagem" de alguns dias para o sítio dos seus
            avós
          </p>
        </Fade>

        <div className="mx-auto h-[70rem] border-b-2 mt-8 px-7 relative w-full overflow-hidden">
          <Fade direction="up">
            <img
              className="w-60 shadow-sm"
              src="https://cdn-icons-png.flaticon.com/512/7571/7571983.png"
            />
          </Fade>

          <Fade direction="up" className="absolute top-36 left-28 shadow-sm">
            <img
              className="w-80 h-72 object-cover rounded-[50%]"
              src="/fev23/img9.jpg"
            />
          </Fade>

          <Fade
            direction="up"
            className="absolute top-[22rem] left-4 shadow-sm"
          >
            <img
              className="w-64 h-64 object-cover rounded-[50%]"
              src="/fev23/gif2.gif"
            />
          </Fade>

          <Fade
            direction="up"
            className="absolute top-[34rem] right-4 shadow-sm"
          >
            <img
              className="w-64 h-64 object-cover rounded-[50%]"
              src="/fev23/img8.jpg"
            />
          </Fade>

          <Fade
            direction="up"
            className="absolute top-[47rem] left-4 shadow-sm"
          >
            <img
              className="w-80 h-80 object-cover rounded-[50%]"
              src="/fev23/gif0.gif"
            />
          </Fade>
        </div>
      </div>

      <div className="w-screen pb-4 border-b-8">
        <img className="w-full" src="/fev23/text0.jpg" />
      </div>

      <Fev22Carousel />

      <Fade direction="up">
        <h1 className="w-80 text-center font-Dancing-Script">
          a few moments with my blonde ♡
        </h1>
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
