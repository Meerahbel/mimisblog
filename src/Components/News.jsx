const News = ({ item, index }) => {
  return (
    <div className="flex gap-2">
      <img
        src={item?.image}
        alt="news image"
        className="h-[200px] w-[150px] xl:h-[150px] object-cover rounded-md"
      />
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-[0.8rem] xl:text-[1rem]">
          {item?.title}
        </p>
        <p className="text-[0.8rem]">{item?.sub}</p>
        <div className="w-fit px-2 border-2 rounded-full text-[0.8rem]">
          {item?.tag}
        </div>
      </div>
    </div>
  );
};

export default News;
