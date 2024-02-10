import article from "../Data/article.json";
import News from "./News";

const Popular = () => {
  const startIndex = 1;
  return (
    <section className="my-10">
      <p className="font-bold text-[2rem] mb-5">Popular Articles</p>
      <div className="flex flex-col xl:flex-row w-full">
        {/* for left side */}
        <div className="w-fit flex flex-col gap-3 pb-10 lg:pb-0">
          <img
            src="/images/food.jpg"
            alt="news"
            className="w-[340px] md:w-[600px] xl:w-[350px] h-[250px] object-cover rounded-md"
          />
          <p className="font-semibold">
            Minna protest rattles Tinubu administration, President gives orders
            on food prices
          </p>
          <div className="w-fit px-2 border-2 rounded-full">Food</div>
        </div>

        {/* for right side */}
        <div className="w-fit grid grid-cols-1 gap-8 lg:gap-3">
          {article?.slice(startIndex).map((item, index) => {
            return <News key={index} item={item} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
