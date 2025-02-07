import Navbar from "./Navbar";

function MainMenu() {
  return (
    <>
      <Navbar />
      <div
        className="absolute h-max w-screen -z-10 bg-cover bg-center bg-grey-800 bg-opacity-30 shadow-2xl mt-20"
        style={{
          backgroundImage: "url(/assets/fondo-madera.webp)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="h-fit w-fit bg-black bg-opacity-50 rounded-lg mr-auto ml-auto p-5 mt-10"
          style={{ backgroundColor: "#f4af4a" }}
        >
          <div>
            <h1 className="text-white text-6xl w-full text-center">
              CoffeeStore
            </h1>
            <h2 className="text-white text-4xl text-center mt-4">
              Un buen cafe para un buen dia.
            </h2>
          </div>
          <div className="flex justify-center m-10">
            <img
              src="/assets/sobres-cafe.webp"
              alt="logo"
              className="w-1/2 h-1/4 shadow-xl dark:shadow-black rounded-lg mr-10"
              loading="lazy"
            />
            <section>
              <h2 className="text-white text-2xl font-bold">
                El mejor cafe en calidad.
              </h2>
              <ul className="text-white text-xl">
                <li>100% organico.</li>
                <li>100% natural.</li>
                <li>100% sabor.</li>
              </ul>
              <p className="text-white text-xl max-w-28 limited-width font-bold">
                Contamos con la calidad necesaria para producirte un buen dia.
              </p>
            </section>
          </div>
          <div className="flex justify-center">
            <section>
              <h2 className="text-white text-2xl font-bold">
                Contamos con bastantes postres
              </h2>
              <ul className="text-white text-xl">
                <li>Donas.</li>
                <li>Crossaints.</li>
                <li>Cupcakes.</li>
                <li>Etc...</li>
              </ul>
              <p className="text-white text-xl max-w-28 limited-width font-bold">
                Gran variedad de comida para que acompañes con un cafe.
              </p>
            </section>
            <img
              src="/assets/barriles.webp"
              alt="logo"
              className="w-1/2 h-1/4 shadow-xl dark:shadow-black rounded-lg ml-10"
              loading="lazy"
            />
          </div>
          <br />
        </div>
        <br />
      </div>
    </>
  );
}

export default MainMenu;
