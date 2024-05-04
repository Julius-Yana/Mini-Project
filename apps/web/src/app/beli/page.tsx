import React from 'react';
import Link from 'next/link';

export default function page() {
  return (
    <div className="container mx-auto ">
      <div className="h-70 ">
        <div className="flex items-start space-x-12 ">
          <div className="w-full border">
            <img className="w-96" src="/westlife.png" alt="westlife" />
            <div className="w-full">
              <h1 className="text-4xl mt-7 mb-4 sm:text-3xl uppercase">
                Westlife
              </h1>
              <p className="text-sm text-slate-200 sm:text-xl">Back to 90'</p>
              <div className="text-slate-200 mt-3 sm:text-sm">
                <p className="text-2xl mt-7 mb-4 sm:text-3xl">
                  <svg
                    className="inline-block w-6 h-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 4h10a2 2 0 011.99 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V10a2 2 0 012-2h10a2 2 0 012-2V7H6a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2H6a2 2 0 012-2z"
                    />
                  </svg>
                  01 Juni 2024
                </p>
                <p className="text-4xl mt-7 mb-4 sm:text-3xl">
                  <svg
                    className="inline-block w-6 h-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 01.553-.894L9 2m0 18l5.447 2.724A1 1 0 0015 20.382V9.618a1 1 0 00-.553-.894L9 6m0 14V6m0 0L3 9.382m6-3.764L15 9.382M15 6v14.382a1 1 0 01-.553.894L9 23.382"
                    />
                  </svg>
                  Surabaya
                </p>

                <p className="text-4xl mt-7 mb-4 sm:text-3xl">
                  <svg
                    className="inline-block w-6 h-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-2.28 0-4 1.79-4 4s1.72 4 4 4 4-1.79 4-4-1.72-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM12 6V4m0 16v-2m8-8h2M4 12H2m16 4h2m-2-8h2M6 18v2m0-16V2m12 0v2m-6 16h4m-6 0H6m6-16h-4m6 0H6m6 16V6m0 0V4"
                    />
                  </svg>
                  Rp 100.000
                </p>
              </div>
              <button className="px-5 py-2 border-2 mt-5 border-white hover:bg-white hover:text-black transition-all ease-in duration-200">
                <Link href="/beli">Beli Tiket</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
