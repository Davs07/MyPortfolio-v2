function Projects() {
  interface Project {
    name: string;
    description: string;
    image: string;
    stack: string[];
  }

  const projects: Project[] = [
    {
      name: "Heztor",
      description:
        "Una aplicación integral de gestión de tareas, hábitos y finanzas para mejorar la productividad y la organización personal. Con características como seguimiento de tareas, recordatorios de hábitos y seguimiento de gastos, Heztor ayuda a los usuarios a administrar sus actividades diarias de manera eficiente.",
      image: "/heztorLogo.png",
      stack: ["React", "Spring Boot", "MongoDB", "AWS"],
    },
    {
      name: "SENSey",
      description:
        "SENSey es una herramienta diseñada para ajustar y adaptar la sensibilidad del mouse entre diferentes shooters (juegos de disparos). ",
      image: "/sensyLogo.png",
      stack: ["React", "Node.js", "Express.js", "MongoDB", "Firebase"],
    },
    {
      name: "Logedia",
      description:
        "Una aplicación para llevar un registro de las películas, series, libros, mangas y otros medios que estás consumiendo. Con Logedia, los usuarios pueden organizar sus preferencias de entretenimiento, realizar un seguimiento de su progreso y descubrir nuevas recomendaciones basadas en sus intereses.",
      image: "/logediaLogo.png",
      stack: ["Next.js", "MongoDB", "Tailwind CSS"],
    },
    {
      name: "Mando",
      description:
        "Una plataforma integral para la gestión de negocios, que permite a los propietarios de negocios controlar todas las operaciones y aspectos de su empresa desde una sola plataforma. Con características como gestión de inventario, seguimiento de ventas y análisis de datos, Mando ayuda a los negocios a optimizar su rendimiento y alcanzar el éxito.",
      image: "/mandoLogo.png",
      stack: ["ReactNative", "Spring", "Next.js", "MySQL", "AWS"],
    },
  ];

  return (
    <div className="w-full min-h-screen p-2 flex  items-center justify-center flex-col gap-32">
      <h2 className="text-7xl font-bold text-center">PROJECTS</h2>
      {projects.map((project, id) => (
        <div
          key={id}
          className={`flex ${
            id % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } gap-12`}>
          <div className="w-96 h-96 rounded-3xl overflow-hidden">
            <img src="/mandoSloganBlue.png" alt="" className="w-full" />
          </div>
          <div className="max-w-[400px] flex flex-col items-start justify-center gap-6">
            <h5 className="text-5xl font-semibold">{project.name}</h5>
            <p className="text-lg font-normal">{project.description}</p>
            <div className="flex gap-4 flex-wrap ">
              {project.stack.map((stack, id) => (
                <div
                  key={id}
                  className="w-[84px] border border-black h-8 flex items-center justify-center rounded-xl p-2 flex-col  ">
                  <span className="text-xs">{stack}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
