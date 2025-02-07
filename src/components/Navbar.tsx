import { Link } from "react-router";

function Navbar() {
  return (
    <header className="fixed t-0 w-screen h-20 bg-yellow-700 content-center p-5 flex">
      <div className="mr-auto flex">
        <h1 className="text-white text-2xl">CoffeeStore</h1>
        <img
          src="/assets/logo.webp"
          alt="logo de un cafe"
          className="h-8 w-8 ml-3"
          loading="lazy"
          width={30}
          height={30}
        />
      </div>
      <div className="mr-auto">
        <div className="flex">
          <Link
            to="/"
            className="text-white mr-5 hover:transition duration-500 ease-in-out hover:text-yellow-200"
          >
            <h1 className="text-2xl">Menu Principal</h1>
          </Link>
          <Link
            to="/about"
            className="text-white mr-5 hover:transition duration-500 ease-in-out hover:text-yellow-200"
          >
            <h1 className="text-2xl">Sobre Nostros</h1>
          </Link>
          <Link
            to="/coffees"
            className="text-white mr-5 hover:transition duration-500 ease-in-out hover:text-yellow-200"
          >
            <h1 className="text-2xl">Tipos de Cafe</h1>
          </Link>
          <Link
            to="/contact"
            className="text-white mr-5 hover:transition duration-500 ease-in-out hover:text-yellow-200"
          >
            <h1 className="text-2xl">Contacto</h1>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
