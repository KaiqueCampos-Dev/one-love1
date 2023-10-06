import { Fade } from "react-awesome-reveal";
import { MonthTitle } from "../../components/month-title";
import { NavigateButton } from "../../components/navigation-button";
import { Hearts } from "../../components/hearts-up";
import { Carousel } from "react-responsive-carousel";

export function Jun23() {
  return (
    <div className="w-screen flex flex-col items-center gap-4 relative py-20">
      <MonthTitle title="Junho 2023" />

      <Fade direction="left">
        <p className="w-80">
          De todos nossos rolês. Os que eu mais gosto são os que de algum modo,
          a gente tem contato com a natureza. A gente sempre combinou nesse
          ponto, essa vontade de liberdade e aventura. Fora que eu fico
          gamadinho em você sendo Bióloga.
        </p>
      </Fade>

      <div className="w-screen flex flex-col gap-2 my-8">
        <div className="w-full h-2 bg-green-300" />
        <div className="w-full h-6 bg-green-300" />

        <div className="w-full h-1 mt-2 bg-green-300" />
      </div>

      <Fade direction="up">
        <div className="w-screen h-40rem relative flex flex-col items-center justify-center ">
          <div className="z-10 text-center mt-2 text-green-300">
            <h1 className="leading-8">Instituto Butantã</h1>
            <h2 className="text-xl font-semibold">"Dia das cobras"</h2>
          </div>

          <Carousel
            showThumbs={false}
            autoPlay
            className=" overflow-hidden mt-4"
          >
            <img
              className="w-full h-[35rem] rounded-3xl object-cover"
              src="/jun23/img4.jpg"
            />

            <img
              className="w-full h-[35rem] rounded-3xl object-cover"
              src="/jun23/gif5.gif"
            />

            <img
              className="w-full h-[35rem] rounded-3xl object-cover"
              src="/jun23/img1.jpg"
            />

            <img
              className="w-full h-[35rem] rounded-3xl object-cover"
              src="/jun23/gif4.gif"
            />

            <img
              className="w-full h-[35rem] rounded-3xl object-cover"
              src="/jun23/img3.jpg"
            />

            <img
              className="w-full h-[35rem] rounded-3xl object-cover"
              src="/jun23/img0.jpg"
            />

            <img
              className="w-full h-[35rem] rounded-3xl object-cover"
              src="/jun23/gif0.gif"
            />

            <img
              className="w-full h-[35rem] rounded-3xl object-cover"
              src="/jun23/img5.jpg"
            />

            <img
              className="w-full h-[35rem] rounded-3xl object-cover"
              src="/jun23/img6.jpg"
            />

            <img
              className="w-full h-[35rem] rounded-3xl object-cover"
              src="/jun23/gif1.gif"
            />
          </Carousel>

          <img
            className="w-56 rounded-3xl absolute bottom-[-3rem] left-[-4rem] z-0"
            src="https://static.vecteezy.com/system/resources/previews/019/045/819/non_2x/snake-graphic-clipart-design-free-png.png"
          />
        </div>
      </Fade>

      <Fade direction="up">
        <h1 className="font-Dancing-Script mt-14">Algumas outras memórias</h1>

        <div className="w-screen h-[47rem]  relative">
          <img
            className="w-40 h-56 object-cover border-2 p-1 rounded-xl border-red-600 absolute left-12"
            src="/jun23/gif8.gif"
          />
          <img
            className="w-40 h-56 object-cover border-2 p-1 rounded-xl border-red-600 absolute left-32 top-36"
            src="/jun23/gif7.gif"
          />
          <img
            className="w-40 h-56 object-cover border-2 p-1 rounded-xl border-red-600 absolute left-56 top-[21rem]"
            src="/jun23/gif6.gif"
          />
          <img
            className="absolute w-56 top-[18rem] left-[-2rem]"
            src="https://static.wixstatic.com/media/d80a98_432e252277614e9589c3fe140c27e950.png/v1/fill/w_893,h_799,al_c,q_90,enc_auto/d80a98_432e252277614e9589c3fe140c27e950.png"
          />
          <img
            className="w-40 h-56 mr-4 object-cover border-2 p-1 rounded-xl border-red-600 absolute left-32 top-[32rem]"
            src="/jun23/img8.jpeg"
          />
        </div>
      </Fade>

      <div className="w-screen relative overflow-hidden mt-16 flex flex-col items-center justify-center">
        <Hearts />

        <Fade direction="left">
          <h1 className="font-Dancing-Script leading-8 w-80 mt-10">
            Nosso primeiro anos dia dos namorados juntos.
          </h1>

          <h1 className="font-Dancing-Script leading-8 w-80 mt-6">
            Você fez o presente mais lindo que eu já recebi dessas mãozinhas.
            Foi a primeira vez que me emocionei recebendo algo.
          </h1>
        </Fade>

        <Fade direction="up">
          <div className="w-56 mt-8 p-2 z-10 rounded-2xl border border-zinc-400 relative">
            <img className="w-full rounded-2xl" src="/jun23/img9.jpeg" />
            <img
              className="w-20 mt-8 mx-auto rounded-2xl"
              src="https://images.emojiterra.com/google/android-11/512px/1f90d.png"
            />
          </div>
        </Fade>
      </div>

      <div className="w-screen flex flex-col gap-2 my-20">
        <div className="w-full h-2 bg-orange-400" />
        <div className="w-full h-6 bg-orange-400" />
        <div className="w-full h-1 mt-2 bg-orange-400" />
      </div>

      <Fade direction="right">
        <div className="w-screen relative pt-4 ">
          <img
            className="w-full absolute top-0"
            src="https://i.pinimg.com/originals/51/7d/13/517d13e074dd23c19c52b8dcdcd5afc9.png"
          />
          <img
            className="w-80 rounded-2xl mx-auto mt-10 p-2 border border-yellow-300"
            src="/jun23/img10.jpg"
          />
        </div>
      </Fade>

      <h1 className="font-Dancing-Script leading-8 w-80 mt-10 text-center">
        E a primeira festa junina juntos também.
      </h1>

      <NavigateButton
        className="mt-16 w-80 py-3 border border-zinc-500 text-center rounded"
        text="Voltar ao calendário"
        design="simple"
        navigateTo="/Calendar"
      />
    </div>
  );
}
