import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Abr23 } from "./pages/Abr23";
import { Ago23 } from "./pages/Ago23";
import { BeforeAll } from "./pages/BeforeAll";
import { Calendar } from "./pages/Calendar";
import { Dec22 } from "./pages/Dec22";
import { Fev23 } from "./pages/Fev23";
import { FirstMessage } from "./pages/firstMessage";
import { Home } from "./pages/home";
import { Jan23 } from "./pages/Jan23";
import { Jul23 } from "./pages/Jul23";
import { Jun23 } from "./pages/Jun23";
import { Mai23 } from "./pages/Mai23";
import { Mar23 } from "./pages/Mar23";
import { Nov22 } from "./pages/Nov22";
import { Out22 } from "./pages/Out22";
import { Out23 } from "./pages/Out23";
import { Set23 } from "./pages/Set23";

const router = createBrowserRouter([
  {
    path: "/one-love",
    element: <Home />,
  },
  {
    path: "FirstMessage",
    element: <FirstMessage />,
  },
  {
    path: "Calendar",
    element: <Calendar />,
  },
  {
    path: "Calendar/Out22",
    element: <Out22 />,
  },
  {
    path: "Calendar/Nov22",
    element: <Nov22 />,
  },
  {
    path: "Calendar/Dec22",
    element: <Dec22 />,
  },
  {
    path: "Calendar/Jan23",
    element: <Jan23 />,
  },
  {
    path: "Calendar/Fev23",
    element: <Fev23 />,
  },
  {
    path: "Calendar/Mar23",
    element: <Mar23 />,
  },
  {
    path: "Calendar/Abr23",
    element: <Abr23 />,
  },
  {
    path: "Calendar/Mai23",
    element: <Mai23 />,
  },
  {
    path: "Calendar/Jun23",
    element: <Jun23 />,
  },
  {
    path: "Calendar/Jul23",
    element: <Jul23 />,
  },
  {
    path: "Calendar/Ago23",
    element: <Ago23 />,
  },
  {
    path: "Calendar/Set23",
    element: <Set23 />,
  },
  {
    path: "Calendar/Out23",
    element: <Out23 />,
  },
  {
    path: "Calendar/BeforeAll",
    element: <BeforeAll />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
