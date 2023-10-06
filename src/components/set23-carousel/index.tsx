
import "./styles.css";

export function Set23Carousel() {
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
            style={{ backgroundImage: "url('/set23/21.png')" }}
          ></div>
          <div
            className="item"
            style={{ backgroundImage: "url('/set23/17.jpg')" }}
          ></div>
          <div
            className="item"
            style={{ backgroundImage: "url('/set23/18.jpg')" }}
          ></div>
           <div
            className="item"
            style={{ backgroundImage: "url('/set23/19.jpg')" }}
          ></div>
           <div
            className="item"
            style={{ backgroundImage: "url('/set23/20.jpg')" }}
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
