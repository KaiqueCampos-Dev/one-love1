import { NavigateButton } from "../../components/navigation-button";
import { TypingText } from "../../components/typing-text";
import { Fade } from "react-awesome-reveal";

export function FirstMessage() {
  return (
    <div className="w-screen h-screen px-10 flex flex-col align-center justify-center">
      <TypingText fontFamily="Dancing-Script">Nossa História Vol.1</TypingText>

      <Fade direction="up" delay={1500}>
        <div className="text-center font-Dancing-Script text-zinc-500 mt-[-0.7rem]">
          <strong>Kaique & Patrícia - </strong>
          <span className="text-xs"> 04/10/2022</span>
        </div>

        <p className="mt-4">
          <em>
            {" "}
            "Nossa História Vol. 1" é inspirado em um Scrapbook, só que em
            versão digital. Ele contém algumas recordações do nosso primeiro ano
            de namoro, e algumas coisinhas extras que você vai ver.
          </em>
        </p>

        <p className="mt-4">
          <em>
            {" "}
            "Um dia iremos mostrar toda nossa história pra nossas crias, pra que
            eles entendam o que é amor de verdade. E nunca aceitar menos que
            isso".
          </em>
        </p>

        <p className="mt-4">
          <em>
            Então minha loirinha, aqui está o primeiro, das muitas recordações que teremos em nossa história. Pra nós e pras nossas crias.
          </em>
        </p>

        <div className="font-Dancing-Script text-zinc-500 mt-4 text-right flex flex-col">
          <strong>Eu te amo mais que mil milhões </strong>
          <span>Ass. seu moreno gostoso</span>
        </div>
      </Fade>



      <NavigateButton text="Voltar" design="simple" />
      <NavigateButton text="Próximo" navigateTo="/Calendar" />
    </div>
  );
}
