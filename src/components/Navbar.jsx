import { useState } from 'react';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [offcanvas, setOffCanvas] = useState(false);

  return (
    <>
      <section className="container mx-auto font-jakarta flex items-center py-3 justify-between px-5 lg:px-0">
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="logo" className="w-7 h-7" />
            <h1 className="text-lg font-bold">Destinize</h1>
          </div>
          <div className="ml-52 md:ml-[610px] lg:hidden inline-block text-right">
            <button onClick={() => setOffCanvas(!offcanvas)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-5/12 hidden lg:block">
          <input
            className="w-full px-10 py-4 bg-gray-200/60 rounded-full text-xs text-gray-600"
            placeholder="Cari apapun disini..."
          />
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center space-x-3 relative">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0003 18.3332C14.6027 18.3332 18.3337 14.6022 18.3337 9.99984C18.3337 5.39746 14.6027 1.6665 10.0003 1.6665C5.39795 1.6665 1.66699 5.39746 1.66699 9.99984C1.66699 14.6022 5.39795 18.3332 10.0003 18.3332Z"
                stroke="#9A9EA6"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66667 2.5H7.5C5.875 7.36667 5.875 12.6333 7.5 17.5H6.66667"
                stroke="#9A9EA6"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 2.5C14.125 7.36667 14.125 12.6333 12.5 17.5"
                stroke="#9A9EA6"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 13.3333V12.5C7.36667 14.125 12.6333 14.125 17.5 12.5V13.3333"
                stroke="#9A9EA6"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 7.5C7.36667 5.875 12.6333 5.875 17.5 7.5"
                stroke="#9A9EA6"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2 className="text-gray-500 text-sm">Bahasa Indonesia</h2>
            <button onClick={() => setDropdown(!dropdown)}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9465 6.25342H7.79316H4.05317C3.41317 6.25342 3.09317 7.02675 3.5465 7.48008L6.99983 10.9334C7.55317 11.4868 8.45317 11.4868 9.0065 10.9334L10.3198 9.62008L12.4598 7.48008C12.9065 7.02675 12.5865 6.25342 11.9465 6.25342Z"
                  fill="#9A9EA6"
                />
              </svg>
            </button>
            {dropdown && (
              <ul className="absolute top-10 -left-5 flex flex-col bg-primary shadow-xl text-white w-full space-y-3 p-3 rounded-xl font-semibold">
                <li>
                  <a href="#">Bahasa Indonesia</a>
                </li>
                <li>
                  <a href="#">Bahasa Inggris</a>
                </li>
                <li>
                  <a href="#">Bahasa Korea</a>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex space-x-3 items-center">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0004 11.1917C11.4363 11.1917 12.6004 10.0276 12.6004 8.5917C12.6004 7.15576 11.4363 5.9917 10.0004 5.9917C8.56445 5.9917 7.40039 7.15576 7.40039 8.5917C7.40039 10.0276 8.56445 11.1917 10.0004 11.1917Z"
                  stroke="#4475F2"
                  strokeWidth="1.2"
                />
                <path
                  d="M3.01675 7.07484C4.65842 -0.141827 15.3501 -0.133494 16.9834 7.08317C17.9418 11.3165 15.3084 14.8998 13.0001 17.1165C11.3251 18.7332 8.67508 18.7332 6.99175 17.1165C4.69175 14.8998 2.05842 11.3082 3.01675 7.07484Z"
                  stroke="#4475F2"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
            <div className="">
              <p className="text-xs text-gray-600">Lokasi</p>
              <h2 className="flex text-primary font-bold">
                Indonesia, Yogyakarta{' '}
                <button>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1"
                  >
                    <path
                      d="M14.9336 8.31641H9.74194H5.06695C4.26695 8.31641 3.86695 9.28307 4.43361 9.84974L8.75028 14.1664C9.44195 14.8581 10.5669 14.8581 11.2586 14.1664L12.9003 12.5247L15.5753 9.84974C16.1336 9.28307 15.7336 8.31641 14.9336 8.31641Z"
                      fill="#4475F2"
                    />
                  </svg>
                </button>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div
        className={`fixed bg-primary z-10 top-0 h-full w-full text-white p-10 lg:hidden -right-full transition-all duration-300 ${
          offcanvas ? 'left-0' : '-left-full'
        }`}
      >
        <div className="flex">
          <ul className="flex flex-col space-y-5 text-xl font-semibold">
            <li>
              <a href="#">Cek</a>
            </li>
            <li>
              <a href="#">Cek</a>
            </li>
            <li>
              <a href="#">Cek</a>
            </li>
            <li>
              <a href="#">Cek</a>
            </li>
          </ul>
          <button
            className="absolute right-10"
            onClick={() => setOffCanvas(!offcanvas)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
