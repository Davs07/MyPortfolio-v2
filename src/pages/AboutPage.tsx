import Text from "../../components/ui/Text";

const AboutPage: React.FC = () => {
  return (
    <div className="w-full max-w-[1112px] min-h-full  flex flex-col gap-8 my-16 px-3  ">
      <div className="flex flex-col gap-6">
        <Text size="h1" font="satoshi">
          Forjando un Camino: Pasión y Determinación
        </Text>
        <Text variant="normal" size="h5">
          Mi nombre es Davy Rodríguez y soy un apasionado desarrollador
          fullstack dedicado a transformar ideas en experiencias digitales
          cautivadoras. Con habilidades técnicas en constante crecimiento y una
          mente creativa, mi objetivo es llevar cada proyecto al siguiente
          nivel, combinando eficiencia en el desarrollo backend con una estética
          cuidadosa en el frontend.
          <br />
          <br />
          Desde muy pequeño, he sentido un profundo interés por la tecnología y
          la creación. Cuando conocí el mundo del desarrollo de software di mis
          primeros pasos y al inicio me agobie. Sin embargo durante los últimos
          meses me he sumergido en un viaje de aprendizaje, práctica y mejora
          constante. Ahora más que nunca me enfoco en crear herramientas
          tecnológicas útiles y significativas.
        </Text>
      </div>
      <div className="flex flex-col gap-6">
        <Text size="h1" font="satoshi">
          Desarrollo Fullstack: Una Evolución Natural
        </Text>
        <Text variant="normal" size="h5">
          Comencé mi viaje en el desarrollo de proyectos enfocándome en el
          frontend, cautivado por la capacidad de dar vida a diseños y crear
          experiencias visuales cautivadoras. Sin embargo, mi ambición por
          crecer y enfrentar nuevos desafíos me llevó a expandir mis horizontes
          y convertirme en un desarrollador fullstack. Esta transición me ha
          permitido no solo comprender mejor la complejidad de los sistemas
          digitales, sino también ofrecer soluciones más completas y versátiles
          a mis clientes y usuarios finales. Además también tengo un peculiar
          interes por el muno de la Inteligencia Artificial.
        </Text>
      </div>
      <div className="flex flex-col gap-6">
        <Text size="h1" font="satoshi">
          Guiando el Rumbo: Mi Enfoque y Método de Trabajo
        </Text>
        <Text variant="normal" size="h5">
          Aunque mi experiencia laboral es aún incipiente, mi enfoque en cada
          proyecto, ya sea personal o para un cliente, es llevarlo a un nivel
          más alto. Mi determinación y ambición por crear algo valioso y útil me
          impulsan a superar obstáculos y alcanzar nuevas alturas en cada
          oportunidad.
          <br />
          <br />
          Antes de escribir una sola línea de código, recopilo información
          esencial sobre objetivos y desafíos del proyecto. Esto incluye
          investigar sobre las preferencias estéticas del cliente o las
          necesidades del usuario final, garantizando así una experiencia
          digital agradable y efectiva.
          <br />
          <br />
          Seguidamente paso al proceso de selección, en donde escojo
          cuidadosamente la pila tecnológica y el uso de las mejores prácticas y
          las mejores herramientas. Una vez obtenida la información necesaria mi
          siguiente paso es diseñar la estructura y el prototipo. Aprobados los
          diseños visuales, empiezo a escribir código real, siempre con un
          enfoque en la calidad y la eficiencia. [Puedes conocer sobre buenas
          prácticas de desarrollo de software en mi Blog (link)]
        </Text>
      </div>
      <div className="flex flex-col gap-6">
        <Text size="h1" font="satoshi">
          Descubriendo Horizontes: Educación y Crecimiento Continuo
        </Text>
        <Text variant="normal" size="h5">
          Mi educación y formación se basa en la experiencia y la práctica
          continua. Actualmente, estoy estudiando Ingeniería de Sistemas en la
          Universidad Nacional de Cajamarca, donde he encontrado un espacio para
          expandir mis conocimientos y habilidades en el mundo de la tecnología.
          No soy un estudiante ejemplar pero siempre estoy en constante
          aprendizaje.
          <br />
          <br />
          Además de mis estudios, tengo un profundo interés en una variedad de
          temas, desde las Finanzas hasta la Filosofía, que enriquecen mi
          perspectiva y alimentan mi curiosidad intelectual. Combinando el
          trabajo inteligente con el trabajo duro, busco mejorar cada área de mi
          vida para obtener la mejor versión de mí mismo.
        </Text>
      </div>
      <div className="flex flex-col gap-6">
        <Text size="h1" font="satoshi">
          Explorando el Mundo: Intereses y Pasiones
        </Text>
        <Text variant="normal" size="h5">
          En mi tiempo libre me gusta jugar videojuegos competitivos,
          particularmente prefiero los shooters sobre otros esports y soy un
          gran fanático de la saga Counter Strike. Además, tengo un profundo
          gusto por el buen cine y la música, explorando constantemente nuevas
          producciones y artistas. Mis intereses literarios abarcan desde la
          Ciencia Ficción y Fantasia en obras como Red Rising, Canción de Hielo
          y Fuego (la saga en la que se inspirí la aclamada serie de Juego de
          Tronos), Dune, entre otros, hasta el desarrollo personal en obras
          maestras como Hábitos Atómicos, De cero a uno : cómo inventar el
          futuro y Meditaciones, reflejando mi búsqueda constante de
          conocimiento y crecimiento personal.
        </Text>
      </div>
    </div>
  );
};

export default AboutPage;
