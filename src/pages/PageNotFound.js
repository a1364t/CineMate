import image_404 from "../assets/404.png";

export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10">
            Oops! Page Not Found
          </p>
          <div className="max-w-lg">
            <img className="rounded" src={image_404} alt="404 page not found" />
          </div>
        </div>
      </section>
    </main>
  );
};
