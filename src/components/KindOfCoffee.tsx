import Navbar from "./Navbar";

function KindOfCoffe() {
  return (
    <>
      <Navbar />
      <div
        className="absolute h-max w-screen -z-10 bg-cover bg-center bg-grey-800 bg-opacity-30 shadow-2xl pr-60 pl-60 mt-20"
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
              Tipos de café.
            </h1>
            <h2 className="text-white text-4xl text-center mt-4">
              CoffeeStore
            </h2>
          </div>
          <div className="flex justify-center m-10">
            <section>
              <div className="flex mb-10">
                <img
                  src="/assets/arabica.png"
                  alt="Cafe Arabica"
                  className="h-1/4 w-1/4 rounded-2xl shadow-2xl dark:shadow-black mr-10"
                  loading="lazy"
                />
                <div className="w-max">
                  <h2 className="text-white text-2xl font-bold">
                    Café Arabica
                  </h2>
                  <p className="text-white text-xl w-2xl">
                    El tipo de café que más se utiliza y a su vez que más
                    apreciado resulta es el que se corresponde con las primeras
                    variantes utilizadas para elaborar la bebida: el café
                    arábica. Esta especie procedente de Etiopía y con varias
                    subespecies tiende a ser delicada y a proporcionar un grano
                    con un sabor muy aromático y una cantidad considerable pero
                    menor a la otra variedad existente en cuanto a nivel de
                    cafeína.
                  </p>
                </div>
              </div>
              <div className="flex mb-10">
                <img
                  src="/assets/robusta.webp"
                  alt="Cafe Arabica"
                  className="h-1/4 w-1/4 rounded-2xl shadow-2xl dark:shadow-black mr-10"
                />
                <div className="w-max">
                  <h2 className="text-white text-2xl font-bold">
                    Café Robusto
                  </h2>
                  <p className="text-white text-xl w-2xl">
                    Si bien tiende a ser menos utilizado a nivel general, esta
                    variedad posee la importante característica de tener un
                    nivel mucho más elevado de cafeína que el anterior, algo que
                    provoca que el sabor que produce a la hora de beberse sea
                    mucho más intenso. y con tono bastante más amargo.
                  </p>
                </div>
              </div>
              <div className="flex mb-10">
                <img
                  src="/assets/liberica.avif"
                  alt="Cafe Arabica"
                  className="h-1/4 w-1/4 rounded-2xl shadow-2xl dark:shadow-black mr-10"
                  loading="lazy"
                />
                <div className="w-max">
                  <h2 className="text-white text-2xl font-bold">
                    Café Liberica
                  </h2>
                  <p className="text-white text-xl w-2xl">
                    El Libérica tiene un aroma distintivo que recuerda a las
                    notas ahumadas. Su sabor en taza es amaderado, aunque
                    también puede tener matices cítricos, florales y sabores más
                    comunes como el chocolate. Aporta una sensación prolongada
                    en el paladar y un dulzor balanceado. También se compara con
                    la jaca, una fruta similar al mango, de sabor ácido y
                    bastante dulce. El perfil de taza único de Libérica, su alta
                    resistencia a la roya y a las enfermedades, su adaptabilidad
                    a los suelos la convierten en una opción para los
                    consumidores y los productores que buscan nuevas
                    experiencias en el café.
                  </p>
                </div>
              </div>
              <div className="flex mb-10">
                <img
                  src="/assets/excelsa.webp"
                  alt="Cafe Arabica"
                  className="h-1/4 w-1/4 rounded-2xl shadow-2xl dark:shadow-black mr-10"
                  loading="lazy"
                />
                <div className="w-max">
                  <h2 className="text-white text-2xl font-bold">
                    Café Excelso
                  </h2>
                  <p className="text-white text-xl w-2xl">
                    El café Excelso es una calidad de café que se caracteriza
                    por ser el resultado de un esmerado esfuerzo de selección en
                    todos sus atributos físicos y sensoriales. Esta selección se
                    realiza en las trilladoras de café, donde se eliminan los
                    granos defectuosos para cumplir con los estándares de
                    exportación colombiano.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default KindOfCoffe;
