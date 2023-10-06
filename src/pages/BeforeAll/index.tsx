import { Fade } from "react-awesome-reveal";
import { MonthTitle } from "../../components/month-title";
import { NavigateButton } from "../../components/navigation-button";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export function BeforeAll() {
  return (
    <div className="w-screen flex flex-col items-center gap-4 relative py-20">
      <MonthTitle title="Setembro 2022" />

      <h1 className="font-Dancing-Script leading-8 w-80 mt-6">
        Onde tudo começou...
      </h1>

      <h1 className="font-Dancing-Script leading-8 w-80 mt-6">
        Todo um efeito borboleta de um simples "oii", uma livre e espontânea
        pressão que seria a ponta do iceberg para uma linha história.
      </h1>

      <h1 className="font-Dancing-Script leading-8 w-80 mt-6">
        Não podia fazer um registro das nossas memórias, sem mostrar o registro
        de onde tudo começou.
      </h1>

      <Fade direction="right">
        <img className="w-full rounded-2xl mt-8" src="/beforeAll/1.jpeg" />
      </Fade>

      <Fade direction="left">
        <img className="w-full rounded-2xl" src="/beforeAll/2.jpeg" />
      </Fade>

      <h1 className="font-Dancing-Script leading-8 w-80 mt-6">
        Amo-te desde que te vi a primeira vez, aqueles cabelos cor de ouro ao vento e o jeito de sorrir mais lindo que eu já vi.
      </h1>

      <h1 className="font-Dancing-Script leading-8 w-80 mt-6">
        O jeito maluco que me cativou, e o jeito de amar que me fez apaixonar e o jeito de olhar que me fez entender que era você.
      </h1>

      <h1 className="font-Dancing-Script leading-8 w-80 mt-6">
        Desde sempre a gente se namorou sem namorar, e hoje namorando, posso dizer sem medo nenhum que eu te amo demais.
      </h1>

      <h1 className="font-Dancing-Script leading-8 w-80 mt-6">
        Daqui pra frente, são apenas alguns registro dos nossos primeiros 365 dias. Uma pequena parte, de todas as memórias que estão guardadas em nós.
      </h1>

      <NavigateButton
        className="mt-20 w-80 py-3 border border-zinc-500 text-center rounded"
        text="Voltar ao calendário"
        design="simple"
        navigateTo="/Calendar"
      />
    </div>
  );
}
