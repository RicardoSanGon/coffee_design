import Navbar from "./Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div
        className="absolute h-full w-screen -z-10 bg-cover bg-center bg-grey-800 bg-opacity-30 shadow-2xl mt-20 pr-50 pl-50"
        style={{
          backgroundImage: "url(/assets/fondo-madera.jpg)",
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
              Contacto
            </h1>
            <h2 className="text-white text-4xl text-center mt-4">
              CoffeeStore
            </h2>
          </div>
          <div className="flex justify-center m-10">
            <img
              src="/assets/mapa.jpg"
              alt="mapa"
              className="w-1/2 h-1/4 shadow-xl dark:shadow-black rounded-lg mr-10"
            />
            <section>
              <h2 className="text-white text-2xl font-bold">Ubicacion</h2>
              <p className="text-white text-xl limited-width">
                Estamos ubicados en la ciudad de Guatemala, en la zona 10.
              </p>
              <p className="text-white text-xl limited-width font-bold mt-10">
                Nuestra direccion:
              </p>
              <p className="text-white text-xl limited-width">
                Avenida Reforma 9-30 zona 10, Guatemala.
              </p>
              <p className="text-white text-xl font-bold mt-10">
                Numero de telefono para mas informacion:
              </p>
              <p className="text-white text-xl">+502 1234 5678</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
