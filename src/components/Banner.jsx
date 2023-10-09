export default function Banner() {
  return (
    <section className="container mx-auto font-jakarta mb-44 lg:mb-52 px-5 lg:px-0">
      <div className="w-full h-full lg:h-[380px] flex flex-col md:flex-row justify-between bg-primary rounded-xl shadow-2xl overflow-hidden">
        <div className="px-14 py-10 w-full lg:w-6/12 text-white ">
          <h1 className="text-xl md:text-3xl lg:text-[40px] font-bold lg:leading-snug">
            Masih bingung cari tempat yang cocok? 🤔
          </h1>
          <p className="text-md lg:text-lg my-8">
            Tenang, kami mempunyai fitur rekomendasi yang membantu kamu mencari
            tempat berlibur yang tepat dengan menjawab pertanyaan yang kami
            berikan.
          </p>
          <a href="#" className="text-md md:text-xl font-semibold">
            Mulai Sekarang
          </a>
        </div>
        <div className="hidden md:block">
          <img
            src="/banner.png"
            className="bg-cover bg-center h-full md:scale-100 scale-0"
          />
        </div>
      </div>
    </section>
  );
}
