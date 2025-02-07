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
          className="h-max w-max bg-black bg-opacity-50 rounded-lg mr-auto ml-auto p-5 mt-10"
          style={{
            backgroundColor: "#f4af4a",
          }}
        >
          <div>
            <h1 className="text-white text-6xl w-full text-center">
              CoffeeStore
            </h1>
            <p className="text-white text-center mt-4">
              Un buen cafe para un buen dia. El mejor cafe en calidad. 100%
              organico.
            </p>
          </div>
          <div className="flex justify-center m-10">
            <img
            rel="preload"
              src="/assets/sobres-cafe.webp"
              alt="logo"
              className="w-1/2 h-1/4 shadow-xl dark:shadow-black rounded-lg mr-10"
              loading="lazy"
              width={250}
              height={120}
              style={{ minHeight: "50px", minWidth: "100px" }}
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
          <div
            className="flex justify-center"
            style={{ minHeight: "100px", minWidth: "200px" }}
          >
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
            rel="preload"
              src="/assets/barriles.webp"
              alt="logo"
              className="w-1/2 h-1/4 shadow-xl dark:shadow-black rounded-lg ml-10"
              loading="lazy"
              width={250}
              height={120}
              style={{ minHeight: "50px", minWidth: "100px" }}
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
