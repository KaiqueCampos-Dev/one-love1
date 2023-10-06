import { MonthTitle } from "../../components/month-title";
import { NavigateButton } from "../../components/navigation-button";
import { Fade } from "react-awesome-reveal";

export function Out22() {
  return (
    <div className="w-screen flex flex-col items-center gap-4 relative py-20">
      <MonthTitle title="Outubro 2022" />

      <Fade direction="left" delay={200}>
        <section className="w-80">
          <p>
            Em Outubro, "Duas almas livres, que por livre e espontanêa pressão"
            se conheceram.
          </p>
          <p className="mt-3">
            Como se fosse uma brincadeira do destino, os dois sentiram uma
            conexão como nunca sentiram. De uma forma natural, parecia que as
            duas almas conversavam entre si a mais tempo do que imaginavam.
          </p>
          <p className="mt-3">
            Eles se aproximaram, riram, compartilharam lembranças e momentos,
            dores e felicidades, beijos e abraços. Diversas memórias foram
            criadas e por ambas as partes o sentimento de amor foi nutrido,
            porém, por mais conectado que os dois estivessem e quisessem estar
            juntos, eles tinham medo. Assim, o sentimento foi escondido e
            guardado, porém nunca se apagou.
          </p>
          <p className="mt-3">
            Eles se afastavam, e voltavam. As vezes queriam falar, mas a voz não
            saia. As vezes caminhavam para se abraçarem, mas a distância
            aumentava a cada passo dado. E em diversos momentos, um teve medo de
            perder ao outro.
          </p>
          <p className="mt-3">
            Talvez as duas almas livres proibiam-se de serem livres para seguir
            suas vontades, fizeram-se o Romeu e Julieta de sua própria história.
          </p>

          <p className="mt-3">
            Entretando, por insistência, por teimosia, ou puramente pelo amor de
            ambos, quando "Romeu e Julieta" estavam juntos, quando a voz
            conseguia falar "eu te amo", quando a distância entre os dois era
            suficiente para um abraço, quando por descuido o sentimento de medo
            era envolvido pela paixão os dois se sentiam puramente livres, como
            no dia em que se conheceram.
          </p>
          <p className="mt-3">
            E quando os medos já não faziam mais sentido, quando já não existia
            mais força que se opunha ao sentimento que a fundo estava sendo
            guardado já era Outubro novamente.
          </p>
          <p className="mt-3">
            E com a chegada de Outubro, não haviam mais medos, nem temores. O
            sentimento que havia sido a força guardado, tomou a forma de duas
            alianças. Era o simbolo de um começo, uma história, não mais de
            Romeu e Julieta, mas sim de K... e P...
          </p>
        </section>
      </Fade>

      <div className="mt-5 w-full p-10 font-bold text-center bg-red-500">
        Pronto, chega de histórinha...
      </div>

      <Fade direction="up" delay={200}>
        <img className="w-80 mt-4" src="/out22/intro.gif" />

        <p className="w-80 text-center">
          E onde quase tudo acabou também, quase te jogo de cima do prédio
          depois do "NÃO" com a maior cara de apaixonada do mundo!
        </p>

        <div className="w-72 p-3 rounded-2xl border border-zinc-400 relative">
          <img
            className="w-full rounded-2xl"
            src="https://intranetmall.com/esperienza/imgShopping/32/shopping/1-imagem-o-outlet.jpg"
          />

          <img
            className="absolute w-16 top-6 right-[-2rem]"
            src="https://static.vecteezy.com/system/resources/previews/009/267/042/original/location-icon-design-free-png.png"
          />

          <p className="mt-1 text-red-400"> - Local da sua maior felicidade</p>
        </div>
      </Fade>

      <Fade direction="up">
        <div className="w-80 mt-14 border-t-2 py-7 relative">
          <h1 className="leading-8">
            Enfim minha gata, Outubro foi a minha melhor decisão!
          </h1>
          <p className="mt-2">
            Obrigado por ser a melhor namorada, a melhor companheira que eu
            poderia ter! Tenho a absoluta certeza que escolhi a mulher certa pra
            viver o resto da vida e das outras vidas. Eu te amo muito Patrícia
            Ferr... digo, Menezes.{" "}
          </p>

          <img className="mt-4 rounded-3xl" src="/out22/img0.jpg" />
        </div>

        {/* <img src="https://a-static.mlcdn.com.br/450x450/painel-de-lona-aniversario-1-ano-de-namoro-chalkboard-fabrika-de-festa/fabrikadefesta/plimvrdpd033332-5/c99c72a2d78c7378c6e12462045050e5.jpg" /> */}
      </Fade>

      <NavigateButton className="mt-8 w-80 py-3 border border-zinc-500 text-center rounded" text="Voltar ao calendário" design="simple" navigateTo="/Calendar"/>
    </div>
  );
}
