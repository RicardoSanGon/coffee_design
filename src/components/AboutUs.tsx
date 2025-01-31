import Navbar from "./Navbar";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div
        className="absolute h-max w-screen -z-10 bg-cover bg-center bg-grey-800 bg-opacity-30 shadow-2xl mt-20"
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
              Nuestra Historia.
            </h1>
            <h2 className="text-white text-4xl text-center mt-4">
              CoffeeStore
            </h2>
          </div>
          <div className="flex justify-center m-10">
            <div className="h-max">
              <img
                src="/assets/tienda-vieja.jpg"
                alt="Tienda vieja"
                className="w-xl h-1/4 shadow-xl dark:shadow-black rounded-lg mr-10 mb-10"
              />
              <img
                src="/assets/tienda-cafe-vieja.jpeg"
                alt="Tienda de cafe vieja"
                className="w-xl h-1/4 shadow-xl dark:shadow-black rounded-lg mr-10"
              />
            </div>
            <section>
              <h2 className="text-white text-2xl font-bold">
                Sobre nosotros.
              </h2>
              <p className="text-white text-xl w-xl">
                CoffeeStore fue fundada en 1982 por un grupo de amigos
                apasionados por el café, comprometidos con compartir su amor por
                esta bebida con el mundo. Desde entonces, nos hemos dedicado a
                ofrecer una experiencia única a nuestros clientes, seleccionando
                cuidadosamente granos de café de las mejores regiones
                cafetaleras del mundo. <br/> Nuestro objetivo principal es brindar la
                mejor calidad en café y un servicio excepcional, creando un
                espacio donde las personas puedan disfrutar de momentos
                inolvidables. Cada taza de café que servimos cuenta una
                historia: desde los agricultores que cultivan los granos con
                dedicación hasta los baristas que perfeccionan cada preparación
                con esmero y creatividad. <br/> En CoffeeStore, creemos que el café es
                más que una bebida: es una experiencia que une a las personas,
                despierta los sentidos y enriquece el día a día. Además, estamos
                comprometidos con la sostenibilidad y el comercio justo,
                asegurándonos de que nuestros productos beneficien tanto a
                nuestros clientes como a las comunidades cafetaleras. <br/> Te
                invitamos a descubrir nuestra amplia selección de cafés, que
                incluye mezclas exclusivas, granos de origen único y opciones
                especiales para cada paladar. <br/> Ya sea que prefieras un espresso
                intenso, un capuchino cremoso o una infusión fría refrescante,
                en CoffeeStore encontrarás la combinación perfecta. Gracias por
                ser parte de nuestra historia. <strong>¡Ven y comparte una taza con nosotros!</strong>

              </p>
            </section>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default AboutUs;
