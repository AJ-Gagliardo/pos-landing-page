import imgPlaceholder from "../assets/imgPlaceholder.png";

function Nav() {
  return (
    <div className="grid grid-cols-2 shadow-md pb-4 sm:px-4  w-full my-0 text-xs sm:text-base">
      <div className="left-side flex items-center">
        <img
          src={imgPlaceholder}
          className="sm:w-10 w-4 flex align-middle justify-center"
        ></img>
      </div>
      <div className="right-side flex justify-end text-xs">
        <ul className="flex sm:gap-4 gap-1 items-center">
          <li className="hover:text-orange-500 hover:cursor-pointer active:text-orange-700 transition duration-150 ease-in-out">
            Soluciones
          </li>
          <li className="hover:text-orange-500 hover:cursor-pointer active:text-orange-700 transition duration-150 ease-in-out">
            Precio
          </li>
          <li className="hover:text-orange-500 hover:cursor-pointer active:text-orange-700 transition duration-150 ease-in-out">
            Comunidad
          </li>
          <li className="flex ">
            <button className="bg-slate-700 rounded p-1 text-slate-200 justify-center align-middle hover:text-slate-50 hover:bg-slate-900 hover:cursor-pointer active:text-white transition duration-150 ease-in-out hover:scale-105 active:scale-110">
              Empecemos
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
