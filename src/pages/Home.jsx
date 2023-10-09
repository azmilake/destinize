import Accordion from 'src/components/Accordion';
import Footer from 'src/components/Footer';
import Navbar from 'src/components/Navbar';
import CardReview from 'src/components/CardReview';
import Banner from 'src/components/Banner';
import SectionTitleFirst from 'src/components/SectionTitleFirst';
import SectionTitleSecondBody from 'src/components/SectionTitleSecondBody';
import CardPopular from 'src/components/CardPopular';
import Benefit from 'src/components/Benefit';
import Client from 'src/components/Client';
import FindLoc from 'src/components/FindLoc';
import SubMenu from 'src/components/SubMenu';

export default function Home() {
  return (
    <>
      <Navbar />

      <hr className="my-3" />

      <SubMenu />

      {/* header (finished) */}
      <section className="container mx-auto font-jakarta flex justify-between px-5 lg:px-0">
        <div className="">
          <div className="flex flex-col">
            <div className="py-2 bg-secondary text-primary text-xs lg:text-sm font-bold w-full lg:w-[300px] rounded-full flex justify-center mb-3">
              <p>✈️ &bull; Explore the wonderful indonesia!</p>
            </div>
            <h1 className="w-full lg:w-[700px] text-4xl lg:text-7xl font-bold mb-8 text-center md:text-left">
              Liburan & nikmati{' '}
              <span className="text-primary">tempat baru</span> di indonesia 🌴
            </h1>
            <div className="w-full lg:w-[470px] font-medium text-base mb-8 text-center md:text-left">
              <p>
                Destinize membuat kamu selalu update terkait tempat liburan baru
                di Indonesia dengan mengikuti perkembangan para influencer di
                sosial media ✨
              </p>
            </div>
            <div className="flex items-center space-x-5 justify-center md:justify-start">
              <button className="px-4 lg:px-6 py-4 bg-primary rounded-md text-white text-sm lg:text-base font-bold">
                Mulai sekarang
              </button>
              <button className="flex space-x-4 items-center">
                <img src="play-icon.png" />
                <p className="text-gray-600 font-bold">Putar Demo</p>
              </button>
              {/* <div className="w-12 h-12 bg-primary outline-blue-600 outline-1 rounded-full items-center flex justify-center">
                1
              </div> */}
            </div>
          </div>
        </div>
        <div>
          <img src="/header.png" className="scale-125 pt-10 hidden md:flex" />
        </div>
      </section>

      <Client />

      {/* favorite destinations (finished) */}
      <section className="container mx-auto font-jakarta mb-40 mt-60 lg:mt-0">
        <SectionTitleSecondBody
          title="Destinasi Favorit"
          mainTitle="✈️ &bull; Temukan Destinasi Favoritmu"
          link="Lihat Semua"
        />

        <CardPopular />
      </section>

      {/* benefit (finished) */}
      <section className="mb-28 font-jakarta px-5 lg:px-0">
        <div className="max-w-7xl mx-auto relative px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 pl-0 lg:pl-8 pr-0 lg:pr-20">
              <div className="flex flex-col mb-16">
                <h3 className="uppercase text-md lg:text-lg mb-2 text-primary font-semibold">
                  Reservasi Tempat
                </h3>
                <h3 className="text-2xl lg:text-5xl text-gray-900 leading-tight lg:leading-snug capitalize mb-10 font-bold">
                  Gak mau ngantri? reservasi aja! 🤙🏻
                </h3>
                <Benefit />
              </div>
            </div>
            <div className="w-full lg:w-5/12 flex items-center justify-center mt-10 lg:mt-0">
              <div className="w-[370px] relative">
                <div className="absolute h-80 w-80 sm:-right-0 overflo-hidden">
                  <div className="w-60 h-60 rounded-full blur-3xl absolute z-10 -top-10 -right-10 bg-primary/60"></div>
                </div>

                <div className="absolute bottom-16 -right-3 lg:right-0 transform translate-x-0 lg:translate-x-1/2 bg-white rounded-2xl w-[263px] z-30 shadow-lg p-4 pr-7">
                  <div className="flex">
                    <span className="w-12 h-12 overflow-hidden rounded-full flex-none mr-3">
                      <img
                        width="100"
                        height="100"
                        src="/flag.png"
                        alt="flag"
                      />
                    </span>
                    <div className="flex flex-col w-full mb-2">
                      <span className="text-sm text-gray-500">Ongoing</span>
                      <h6 className="font-bold text-lg mb-2">
                        Jelajah Indonesia
                      </h6>
                      <span className="text-xs mb-1">
                        <span className="text-accent-9">40%</span>
                        <span className="text-gray-900">completed</span>
                      </span>
                      <span className="w-full bg-gray-200 h-1 rounded-full overflow-hidden flex">
                        <span className="rounded-full bg-primary w-16 h-full"></span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl h-full w-full relative z-20 shadow-lg pt-4 pb-5">
                  <div className="mx-4 rounded-3xl h-40 relative overflow-hidden mb-6">
                    <img
                      src="/destination-5.jpg"
                      className="bg-cover bg-center"
                    />
                  </div>
                  <h6 className="font-bold text-lg px-4 mb-2">
                    Liburan ke Bali 🚗
                  </h6>
                  <div className="flex text-gray-500 px-4 mb-4">
                    <h6>14-29 June</h6>
                    <span className="mx-2">|</span>
                    <h6 className="">by Justin Bay</h6>
                  </div>
                  <div className="flex gap-x-3 mx-4 mb-6">
                    <span className="bg-gray-100 text-gray-500 rounded-full flex items-center justify-center w-9 h-9">
                      <span className="text-base">
                        <img src="/leaf-icon.svg" alt="leaf-icon" />
                      </span>
                    </span>
                    <span className="bg-gray-100 text-gray-500 rounded-full flex items-center justify-center w-9 h-9">
                      <span className="text-base">
                        <img src="/map-icon.svg" alt="map-icon" />
                      </span>
                    </span>
                    <span className="bg-gray-100 text-gray-500 rounded-full flex items-center justify-center w-9 h-9">
                      <span className="text-base">
                        <img src="/send-icon.svg" alt="send-icon" />
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between mx-4">
                    <span className="text-gray-500 mr-3 text-xl">
                      <img src="/building-icon.svg" />
                    </span>
                    <span className="text-gray-500 mr-auto">
                      16 Orang pergi bersama
                    </span>
                    <span>
                      <img src="/love-icon.svg" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* find loc (finished) */}
      <section className="container mx-auto font-jakarta mb-44 px-5 lg:px-0">
        <SectionTitleFirst
          title="Cari Tempat Wisata"
          mainTitle="🗺️ &bull; Cari Tempat Wisata Didekatmu"
          description="Fitur ini memungkinkan kamu untuk mencari tempat wisata atau tempat yang sedang populer di daerah kamu dengan begitu kamu akan selalu update dan gak kudet lagi 👍🏻"
        />
        <div className="mb-12">
          <img src="/map.jpg" className="rounded-md bg-cover bg-center" />
        </div>

        <FindLoc />
      </section>

      {/* gallery (finished) */}
      <section className="container mx-auto font-jakarta mb-52 px-5 lg:px-0">
        <SectionTitleSecondBody
          title="Mengenal Destinize"
          mainTitle="🖼️ &bull; Galeri Pariwisata & Blog Travel"
          link="Lihat Semua"
        />

        <div className="flex flex-col lg:flex-row space-x-8 mb-6">
          <div className="w-full lg:w-3/12 mb-5 lg:mb-0">
            <div className="w-full bg-white shadow-xl h-full rounded-lg overflow-hidden">
              <div className="">
                <img src="/destination-1.jpg" alt="foto" className="w-full" />
              </div>
              <div className="p-7">
                <p className="uppercase text-sm text-gray-400 font-bold mb-3">
                  26 desember 2021
                </p>
                <h1 className="text-base font-bold text-gray-900 mb-3">
                  Tips naik gunung Bromo Biar gak capek cyin 😥😛
                </h1>
                <p className="text-sm text-gray-500 font-bold mb-3">
                  Jadi gini gann, anda tau bromo? yaaa gunung kann!
                </p>
                <a href="#" className="text-primary text-sm font-bold">
                  Baca selengkapnya ..
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-9/12 shadow-xl">
            <div className="w-full h-full relative -ml-8 lg:-ml-0">
              <img
                src="/gallery-cover.jpg"
                alt="photo2"
                className="rounded-lg bg-cover bg-center"
              />
              <div className="absolute w-12 h-12 md:w-24 md:h-24 bg-primary rounded-full top-16 md:top-44 md:left-[375px] left-36 flex items-center justify-center">
                <img src="/play-icon.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full h-full lg:h-[200px] relative block rounded-lg">
            <div
              className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"
              style={{ zIndex: 1 }}
            ></div>
            <div
              className="w-full h-full bg-green-300 p-7"
              style={{
                backgroundImage: 'url("/gallery-sub-cover.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 2,
                borderRadius: '10px',
              }}
            >
              <h1 className="text-white font-bold text-2xl relative z-10 lg:w-[650px] leading-relaxed mb-4 w-full">
                Tips melakukan perjalanan liburan yang menyenangkan
              </h1>
              <p className="w-full lg:w-[417px] text-base font-medium text-white relative z-10 leading-relaxed mb-4">
                Ingin liburan? ketahui tips - tips liburan agar liburanmu
                menyenangkan
              </p>
              <span className="text-white flex space-x-3 relative z-10 font-bold text-sm">
                <a href="#">Google</a>
                <a href="#">Trending</a>
                <a href="#">Baru</a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* testimonial */}
      <section className="container mx-auto font-jakarta mb-32 lg:mb-52 px-5 lg:px-0">
        <SectionTitleFirst
          title="Testimonial Destinize"
          mainTitle="💭 &bull; Apa Kata Mereka Tentang Kami"
          description="Penasaran apa saja review dari pengguna yang memakai aplikasi dan website Destinize buat nentuin kemana liburan mereka selanjutnya? Yuk cek dibawah!"
        />
        <div className="flex flex-col lg:flex-row lg:space-x-20 space-y-5 lg:space-y-0">
          <CardReview />
        </div>
      </section>

      <Accordion />

      <Banner />

      <Footer />
    </>
  );
}
