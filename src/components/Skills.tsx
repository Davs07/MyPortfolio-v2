import FrontendIconsSection from "./FrontendIconsSection"




export const Skills = () => {
  return (
    <div className="w-full min-h-screen p-2 flex gap-12 items-center justify-center flex-col">
      <h2 className="text-7xl font-bold text-center">SKILLS</h2>
      <div className="flex flex-row  gap-8 items-center ">
        <FrontendIconsSection/>
        <div>
          <h3 className="text-3xl font-bold">Frontend</h3>
          <p className="text-2xl">
            Poseo habilidades sólidas en el desarrollo de interfaces de usuario
            para aplicaciones web.
          </p>
        </div>
      </div>

      <div className="flex flex-row-reverse  gap-8 items-center">
        <div className="size-[400px] min-w-[500px]  bg-gray-800 rounded-3xl"></div>
        <div>
          <h3 className="text-3xl font-bold">Backend</h3>
          <p className="text-2xl">
            Tengo experiencia tanto en el desarrollo de la lógica de negocio de
            las aplicaciones como en el manejo de datos en el servidor.
          </p>
        </div>
      </div>
      <div className="flex flex-row  gap-8 items-center">
        <div className="size-[400px] min-w-[500px]  bg-gray-800 rounded-3xl"></div>
        <div>
          <h3 className="text-3xl font-bold">Otras Herramientas</h3>
          <p className="text-2xl">
            Tengo experiencia en el despliegue de aplicaciones en la nube con
            AWS y Docker, y en el uso de herramientas para colaborar en equipo y
            gestionar versiones de mis proyectos.
          </p>
        </div>
      </div>
    </div>
  );
};
