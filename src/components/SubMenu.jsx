/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function SubMenu() {
  const [dropdown2, setDropdown2] = useState(false);

  const subMenu = [
    {
      id: 1,
      name: 'Gunung',
    },
    {
      id: 2,
      name: 'Pantai',
    },
    {
      id: 3,
      name: 'Kuliner',
    },
    {
      id: 4,
      name: 'Outbond',
    },
    {
      id: 5,
      name: 'Sejarah',
    },
    {
      id: 6,
      name: 'Edukasi',
    },
    {
      id: 7,
      name: 'Romantis',
    },
    {
      id: 8,
      name: 'Alam',
    },
  ];

  return (
    <section className="container mx-auto font-jakarta mb-5 lg:mb-20 px-5 lg:px-0">
      <div className="flex flex-reverse first-letter:items-center justify-between">
        <div className="hidden lg:flex flex-col md:flex-row md:flex-wrap md:space-x-10 space-y-5 md:space-y-0">
          {subMenu.map((menu) => (
            <div className="flex items-center space-x-2" key={menu.id}>
              <h3 className="text-sm text-gray-600">{menu.name}</h3>
              <button>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.2797 6.9668L7.99968 11.6668L2.71973 6.9668"
                    stroke="#9A9EA6"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <div className="space-x-2 hidden lg:flex">
          <div className="h-12 w-12 bg-primary flex items-center justify-center rounded-full">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.34186 1.6665L4.3252 4.6915"
                stroke="white"
                strokeWidth="1.2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.6582 1.6665L15.6749 4.6915"
                stroke="white"
                strokeWidth="1.2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.66699 6.54167C1.66699 5 2.49199 4.875 3.51699 4.875H16.4837C17.5087 4.875 18.3337 5 18.3337 6.54167C18.3337 8.33333 17.5087 8.20833 16.4837 8.20833H3.51699C2.49199 8.20833 1.66699 8.33333 1.66699 6.54167Z"
                stroke="white"
                strokeWidth="1.2"
              />
              <path
                d="M8.13379 11.6665V14.6248"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M11.9668 11.6665V14.6248"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M2.91699 8.3335L4.09199 15.5335C4.35866 17.1502 5.00033 18.3335 7.38366 18.3335H12.4087C15.0003 18.3335 15.3837 17.2002 15.6837 15.6335L17.0837 8.3335"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="h-12 w-12 bg-secondary flex items-center justify-center rounded-full">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99967 9.99984C12.3009 9.99984 14.1663 8.13436 14.1663 5.83317C14.1663 3.53198 12.3009 1.6665 9.99967 1.6665C7.69849 1.6665 5.83301 3.53198 5.83301 5.83317C5.83301 8.13436 7.69849 9.99984 9.99967 9.99984Z"
                stroke="#4475F2"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.1585 18.3333C17.1585 15.1083 13.9501 12.5 10.0001 12.5C6.05013 12.5 2.8418 15.1083 2.8418 18.3333"
                stroke="#4475F2"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative lg:hidden mb-10">
        <button
          className="flex items-center space-x-2"
          onClick={() => setDropdown2(!dropdown2)}
        >
          <h2 className="text-primary font-semibold lg:hidden">Category</h2>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="lg:hidden"
          >
            <path
              d="M13.2797 6.9668L7.99968 11.6668L2.71973 6.9668"
              stroke="#9A9EA6"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {dropdown2 && (
          <div className="absolute bg-primary mt-2 w-6/12 lg:w-3/12 space-y-6 rounded-md text-white p-6">
            {subMenu.map((menu) => (
              <div className="flex items-center space-x-2" key={menu.id}>
                <h3 className="text-sm">{menu.name}</h3>
                <button>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.2797 6.9668L7.99968 11.6668L2.71973 6.9668"
                      stroke="#FFFFFF"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
