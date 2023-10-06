import "./style.css";

export function Fev22Carousel() {
  function Next() {
    let lists = document.querySelectorAll(".item");
    //@ts-ignore
    document.getElementById("slide").appendChild(lists[0]);
  }

  function Prev() {
    let lists = document.querySelectorAll(".item");
        //@ts-ignore
    document.getElementById("slide").prepend(lists[lists.length - 1]);
  }

  return (
    <div className="w-screen h-[37rem] overflow-hidden relative">
      <div className="container">
        <div id="slide">
          <div
            className="item"
            style={{ backgroundImage: "url('/fev23/restaurant/img0.jpg')" }}
          ></div>
          <div
            className="item"
            style={{ backgroundImage: "url('/fev23/restaurant/img-1.png')" }}
          ></div>
          <div
            className="item"
            style={{ backgroundImage: "url('/fev23/restaurant/img-2-teste.jpg')" }}
          ></div>
           <div
            className="item"
            style={{ backgroundImage: "url('/fev23/restaurant/img-3.jpg')" }}
          ></div>
           <div
            className="item"
            style={{ backgroundImage: "url('/fev23/restaurant/img-4.jpg')" }}
          ></div>
           <div
            className="item"
            style={{ backgroundImage: "url('/fev23/restaurant/img5.webp')" }}
          ></div>
           <div
            className="item"
            style={{ backgroundImage: "url('/fev23/restaurant/img6.webp')" }}
          ></div>
           <div
            className="item"
            style={{ backgroundImage: "url('/fev23/restaurant/img7.jpg')" }}
          ></div>
          <div
            className="item"
            style={{ backgroundImage: "url('/fev23/restaurant/img8.jpg')" }}
          ></div>
          <div
            className="item"
            style={{ backgroundImage: "url('/fev23/restaurant/img9.jpg')" }}
          ></div>
          <div
            className="item"
            style={{ backgroundImage: "url('/fev23/restaurant/gif0.gif')" }}
          ></div>
            <div
            className="item"
            style={{ backgroundImage: "url('/fev23/restaurant/gif0.gif')" }}
          ></div>
            <div
            className="item"
            style={{ backgroundImage: "url('/fev23/restaurant/gif1.gif')" }}
          ></div>
            <div
            className="item"
            style={{ backgroundImage: "url('/fev23/restaurant/gif2.gif')" }}
          ></div>
            <div
            className="item"
            style={{ backgroundImage: "url('/fev23/restaurant/gif3.gif')" }}
          ></div>
            <div
            className="item"
            style={{ backgroundImage: "url('/fev23/restaurant/gif4.gif')" }}
          ></div>
        </div>

        <div className="buttons w-90 px-5 flex justify-between">
          <button id="prev" onClick={Prev}>
            <img className="w-4 mx-auto" src="/left-arrow.svg" />
          </button>
          <button id="next" onClick={Next}>
            <img className="w-4 mx-auto" src="/right-arrow.svg" />
          </button>
        </div>
      </div>
    </div>
  );
}
