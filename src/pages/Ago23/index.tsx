import { Fade } from "react-awesome-reveal";
import { Carousel } from "react-responsive-carousel";
import { MonthTitle } from "../../components/month-title";
import { NavigateButton } from "../../components/navigation-button";

export function Ago23() {
  return (
    <div className="w-screen flex flex-col items-center gap-4 relative py-20">
      <MonthTitle title="Agosto 2023" />

      <Fade direction="left">
        <h1 className="font-Dancing-Script leading-8 w-80 mt-6">
          Setembro, depois de muita enrolação. Fomos a primeira vez no
          Guerreiros com a Clara e o Shark.
        </h1>

        <h1 className="font-Dancing-Script leading-8 w-80 mt-4">
          E até que enfim meu amor, estamos tirando fotos boas nossas.
        </h1>
      </Fade>

      <Fade direction="left">
        <Carousel
          className="w-80 mx-auto mt-6 overflow-hidden"
          autoPlay
          showThumbs={false}
        >
          <div className="w-80 h-[26rem] p-3 bg-white">
            <img className="w-80 h-72 object-cover" src="/ago23/1.jpg" />
          </div>

          <div className="w-80 h-[26rem] p-3 bg-white">
            <img className="w-80 h-72 object-cover" src="/ago23/2.jpg" />
          </div>

          <div className="w-80 h-[26rem] p-3 bg-white">
            <img className="w-80 h-72 object-cover" src="/ago23/3.jpg" />
          </div>

          <div className="w-80 h-[26rem] p-3 bg-white">
            <img className="w-80 h-72 object-cover" src="/ago23/5.jpg" />
          </div>

          <div className="w-80 h-[26rem] p-3 bg-white">
            <img className="w-80 h-72 object-cover" src="/ago23/6.jpg" />
          </div>

          <div className="w-80 h-[26rem] p-3 bg-white">
            <img className="w-80 h-72 object-cover" src="/ago23/7.jpg" />
          </div>
        </Carousel>
      </Fade>

      <Fade direction="right">
        <h1 className="font-Dancing-Script leading-8 w-80 mt-4 text-center">
          Imagens que demonstram 80% do nosso relacionamento:
        </h1>

        <h1 className="font-Dancing-Script leading-8 w-80 mt-4 text-center">
          A Gata brincando, e ficando brava com a própria brincadeira...
        </h1>

        <div className="w-80 h-[26rem] p-3 bg-zinc-800">
          <img className="w-80 h-72 object-cover" src="/ago23/4.jpg" />
        </div>
      </Fade>

      <Fade direction="left">
        <div className="w-screen flex flex-col gap-2 my-16">
          <div className="w-full h-2 bg-green-300" />
          <div className="w-full h-6 bg-green-300" />
          <div className="w-full h-1 mt-2 bg-green-300" />
        </div>

        <h1 className="font-Dancing-Script leading-8 w-80 text-green-200">
          E em Agosto, nós cumprimos uma promessa desde que a gente se conheceu.
          De eu ir num parque te ensinar a andar de Bike.
        </h1>

        <h1 className="font-Dancing-Script leading-8 w-80 text-green-200">
          Não precisei nem ensinar, você só pegou e foi.
        </h1>

        <h1 className="font-Dancing-Script leading-8 w-80 text-green-200">
          E uma das melhores sensações que eu já tive na vida. Andar com o vento
          na cara, e admirando você na minha frente pedaçlando de leve, com os
          cabelos cor de ouro brilhando no sol.
        </h1>
      </Fade>

      <div className="w-screen mt-20">
        <div className="mx-auto h-[75rem] border-b-2 mt-8 px-7 relative w-full overflow-hidden">
          <Fade direction="up" className="shadow-sm">
            <img
              className="w-72 h-72 object-cover rounded-[50%]"
              src="/ago23/img1.jpg"
            />
          </Fade>

          <Fade direction="up" className="absolute top-36 left-28 shadow-sm">
            <img
              className="w-80 h-72 object-cover rounded-[50%]"
              src="/ago23/img2.jpg"
            />
          </Fade>

          <Fade
            direction="up"
            className="absolute top-[22rem] left-4 shadow-sm"
          >
            <img
              className="w-64 h-64 object-cover rounded-[50%]"
              src="/ago23/img3.jpg"
            />
          </Fade>

          <Fade
            direction="up"
            className="absolute top-[34rem] right-4 shadow-sm"
          >
            <img
              className="w-64 h-64 object-cover rounded-[50%]"
              src="/ago23/img4.jpg"
            />
          </Fade>

          <Fade
            direction="up"
            className="absolute top-[47rem] left-4 shadow-sm"
          >
            <img
              className="w-80 h-80 object-cover rounded-[50%]"
              src="/ago23/gif2.gif"
            />
          </Fade>
        </div>
      </div>

      <div className="w-screen relative overflow-hidden mt-8 flex flex-col items-center justify-center">
        <Fade direction="left">
          <h1 className="font-Dancing-Script leading-8 w-80">
            Uma das nossas fotos mais lindas...
          </h1>
        </Fade>

        <Fade direction="up">
          <Carousel showThumbs={false} className="mt-8">
            <img
              className="w-full h-[40rem] object-cover"
              src="/ago23/img6.jpg"
            />
            <img
              className="w-full h-[40rem] object-cover"
              src="/ago23/img5.jpg"
            />
            <img
              className="w-full h-[40rem] object-cover"
              src="/ago23/gif0.gif"
            />
          </Carousel>
        </Fade>
      </div>

      <NavigateButton
        className="mt-10 w-80 py-3 border border-zinc-500 text-center rounded"
        text="Voltar ao calendário"
        design="simple"
        navigateTo="/Calendar"
      />
    </div>
  );
}
