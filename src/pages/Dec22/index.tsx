import { MonthTitle } from "../../components/month-title";
import { NavigateButton } from "../../components/navigation-button";
import { Fade } from "react-awesome-reveal";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export function Dec22() {
  return (
    <div className="w-screen flex flex-col items-center gap-4 relative py-20">
      <MonthTitle title="Dezembro 2022" />

      <Fade direction="up">
        <div className="w-80">
          <p>
            As lembranças de Dezembro começam com o dia que você cortou o cabelo
            curtinho, e achou que tava horrorosa. Meu amor, vou nem falar
            NADAAA, só segue o vídeo:
          </p>

          <div className="w-72 p-2 mt-4 mx-auto flex rounded-2xl border border-zinc-400 relative">
            <img className="mx-auto w-full rounded-2xl" src="/dec22/gif1.gif" />
            <img
              className="mx-auto h-[35rem] absolute right-0 top-[-2rem]"
              src="/dec22/text0.gif"
            />
          </div>
        </div>
      </Fade>

      <Fade direction="up">
        <div className="w-80 mt-14">
          <p>
            Também tivemos uma coisa que eu achei que seria tortura, mas hoje é
            umas das coisas que eu mais gosto: Skin care com aquela sua massagem
            no rosto. E você toda fofa comendo Amandita...
          </p>

          <div className="w-80 mt-4 flex flex-col relative">
            <div className="w-56 p-2 rounded-2xl border border-yellow-400 relative">
              <img className="w-full rounded-2xl" src="/dec22/gif0.gif" />
            </div>

            <div className="w-56 p-2 rounded-2xl border border-yellow-600 absolute right-0 bottom-[-10rem]">
              <img className="w-full rounded-2xl" src="/dec22/img0.jpg" />
            </div>
          </div>
        </div>
      </Fade>

      <Fade direction="up">
        <div className="w-full py-14 px-4 mt-52 font-semibold bg-orange-400">
          <p>
            De muitas olhadinhas "Gay" um para o outro, sorriso e risadas.
            Tentativas de tirar "A foto" no MC... Momentos simples, mas os
            melhores possíveis ao seu lado.
          </p>

          <div className="w-80 mt-4 flex flex-col relative">
            <div className="w-56 p-2 z-10 rounded-2xl border border-yellow-400 relative">
              <img className="w-full rounded-2xl" src="/dec22/gif2.gif" />
            </div>

            <div className="w-56 p-2 z-20 rounded-2xl border border-yellow-600 absolute right-0 bottom-[-10rem]">
              <img className="w-full rounded-2xl" src="/dec22/img1.jpg" />
            </div>

            <div className="w-44 p-2 z-0 rounded-2xl border border-yellow-900 absolute right-[-3rem] top-10">
              <img className="w-full rounded-2xl" src="/dec22/img5.jpeg" />
            </div>
          </div>
        </div>
      </Fade>

      <Fade direction="up">
        <div className="w-full px-4 mt-36 font-semibold">
          <p>
            Foi a primeira vez que fomos juntos no Instituto Butantã, onde tem
            várias coisas sobre Biológia que você ama... E outras fotos nossas,
            bem nossas mesmo, do jeito maluco e único que a gente tem.
          </p>

          <Carousel className="w-80 mx-auto mt-6" autoPlay showThumbs={false}>
            <div className="w-80 h-[26rem] p-3 bg-white">
              <img className="w-80 h-72 object-cover" src="/dec22/img6.jpg" />
            </div>

            <div className="w-80 h-[26rem] p-3 bg-white">
              <img className="w-80 h-72 object-cover" src="/dec22/img7.jpg" />
            </div>

            <div className="w-80 h-[26rem] p-3 bg-white">
              <img className="w-80 h-72 object-cover" src="/dec22/img8.jpg" />
            </div>

            <div className="w-80 h-[26rem] p-3 bg-white">
              <img className="w-80 h-72 object-cover" src="/dec22/img9.jpg" />
            </div>

            <div className="w-80 h-[26rem] p-3 bg-white">
              <img className="w-80 h-72 object-cover" src="/dec22/img10.jpg" />
            </div>

            <div className="w-80 h-[26rem] p-3 bg-white">
              <img className="w-80 h-72 object-cover" src="/dec22/img11.jpg" />
            </div>
          </Carousel>
        </div>
      </Fade>

      <h1 className="mt-20 w-80 text-center leading-9 font-Dancing-Script">
        Ano novo em que não ficamos juntos, e você tava tão linda!
      </h1>

      <Fade direction="left">
        <div className="mt-4 w-full overflow-hidden flex gap-2">
          <img className="w-36 object-cover" src="/dec22/img3.jpeg" />
          <img className="w-36 object-cover" src="/dec22/img4.jpeg" />
          <img className="w-36 object-cover" src="/dec22/img3.jpeg" />
        </div>
      </Fade>

      <Fade direction="right">
        <div className=" w-full overflow-hidden flex gap-2">
          <img className="w-36 object-cover" src="/dec22/img4.jpeg" />
          <img className="w-36 object-cover" src="/dec22/img3.jpeg" />
          <img className="w-36 object-cover" src="/dec22/img4.jpeg" />
        </div>
      </Fade>

      <div className="w-full my-4 h-[0.5px] bg-white"/>

      <Fade direction="up">
        <div className="w-56 p-2 z-10 rounded-2xl border border-zinc-400 relative">
          <img className="w-full rounded-2xl" src="/dec22/gif3.gif" />
          <img className="w-20 mt-8 mx-auto rounded-2xl" src="https://images.emojiterra.com/google/android-11/512px/1f90d.png" />
        
        </div>
      </Fade>

      <NavigateButton
        className="mt-10 w-80 py-3 border border-zinc-500 text-center rounded"
        text="Voltar ao calendário"
        design="simple"
        navigateTo="/Calendar"
      />
    </div>
  );
}
