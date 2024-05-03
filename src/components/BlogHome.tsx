interface Article {
  name: string;
  date: string;
  image: string;
}

const articles: Article[] = [
  {
    name: "JavaScript vs TypeScript",
    date: "Diciembre, 2023",
    image: "/mandoSloganBlue.png",
  },
  {
    name: "Scrum vs Kanban",
    date: "Enero, 2024",
    image: "/mandoSloganBlue.png",
  },
  {
    name: "Patrones de diseño",
    date: "Febrero, 2024",
    image: "/mandoSloganBlue.png",
  },
  {
    name: "Asincronía en JavaScript",
    date: "Marzo, 2024",
    image: "/mandoSloganBlue.png",
  },
];

function Blog() {
  return (
    <div className="w-full min-h-screen p-2 flex  items-center justify-center flex-col gap-32">
      <h2 className="text-7xl font-bold text-center">BLOG</h2>
      <div className="flex flex-row w-full justify-center gap-3">
        {articles.map((article) => (
          <div className="flex flex-col items-start  justify-start gap-4 max-h-80 w-60">
            <div className="w-56 h-56 rounded-3xl overflow-hidden">
              <img src={article.image} alt="" className="w-full" />
            </div>
            <div>
              <h3 className="text-2xl font-normal text-start ">
                {article.name}
              </h3>
              <p className="text-sm font-normal text-start ">{article.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
