import { Link } from "react-router-dom";
import { Logo } from "../../components/logo";

export function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Logo />
      <Link className="absolute bottom-8 right-10" to={"/FirstMessage"}>
        Clique aqui
      </Link>
    </div>
  );
}
