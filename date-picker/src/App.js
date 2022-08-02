function App() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg flex">
        <div className="py-6 border-r border-gray-100">
          <ul className="flex flex-col text-sm font-medium">
            <li>
              <button className="px-6 py-1.5 w-full leading-5 hover:bg-gray-50 hover:text-blue-600 text-left">
                Last 7 days
              </button>
            </li>
            <li>
              <button className="px-6 py-1.5 w-full leading-5 hover:bg-gray-50 hover:text-blue-600 text-left">
                Last 14 days
              </button>
            </li>
            <li>
              <button className="px-6 py-1.5 w-full leading-5 hover:bg-gray-50 hover:text-blue-600 text-left">
                Last 30 days
              </button>
            </li>
            <li>
              <button className="px-6 py-1.5 w-full leading-5 hover:bg-gray-50 hover:text-blue-600 text-left">
                Last 3 months
              </button>
            </li>
            <li>
              <button className="px-6 py-1.5 w-full leading-5 hover:bg-gray-50 hover:text-blue-600 text-left">
                Last 12 months
              </button>
            </li>
            <li>
              <button className="px-6 py-1.5 w-full leading-5 hover:bg-gray-50 hover:text-blue-600 text-left">
                Month to date
              </button>
            </li>
            <li>
              <button className="px-6 py-1.5 w-full leading-5 hover:bg-gray-50 hover:text-blue-600 text-left">
                Quarter to date
              </button>
            </li>
            <li>
              <button className="px-6 py-1.5 w-full leading-5 hover:bg-gray-50 hover:text-blue-600 text-left">
                All time
              </button>
            </li>
            <li>
              <button className="px-6 py-1.5 w-full leading-5 hover:bg-gray-50 hover:text-blue-600 text-left">
                Custom
              </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="flex divide-x">
            <div className="flex flex-col px-6 pt-5 pb-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <button className="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
                  <svg
                    className="w-6 h-6 text-gray-900 stroke-current"
                    fill="none"
                  >
                    <path
                      d="M13.25 8.75L9.75 12l3.5 3.25"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="text-sm font-semibold">February</div>
                <button className="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
                  <svg
                    className="w-6 h-6 text-gray-900 stroke-current"
                    fill="none"
                  >
                    <path
                      d="M10.75 8.75l3.5 3.25-3.5 3.25"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-7 text-sm text-center text-gray-900">
                <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                  Mo
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                  Tu
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                  We
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                  Th
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                  Fri
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                  Sa
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                  Su
                </span>

                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  1
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  2
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  3
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  4
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  5
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  6
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  7
                </span>

                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  8
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg bg-gray-50">
                  9
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  10
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  11
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  12
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  13
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  14
                </span>

                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  15
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  16
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  17
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-l-lg">
                  18
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                  19
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                  20
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none rounded-tr-lg bg-gray-50">
                  21
                </span>

                <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none rounded-l-lg bg-gray-50">
                  22
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                  23
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                  24
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                  25
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                  26
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none bg-gray-50">
                  27
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold text-blue-600 rounded-none rounded-br-lg bg-gray-50">
                  28
                </span>

                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  1
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  2
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  3
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  4
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  5
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  6
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  7
                </span>
              </div>
            </div>
            <div className="flex flex-col px-6 pt-5 pb-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <button className="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
                  <svg
                    className="w-6 h-6 text-gray-900 stroke-current"
                    fill="none"
                  >
                    <path
                      d="M13.25 8.75L9.75 12l3.5 3.25"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="text-sm font-semibold">March</div>
                <button className="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
                  <svg
                    className="w-6 h-6 text-gray-900 stroke-current"
                    fill="none"
                  >
                    <path
                      d="M10.75 8.75l3.5 3.25-3.5 3.25"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-7 text-xs text-center text-gray-900">
                <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                  Mo
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                  Tu
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                  We
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                  Th
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                  Fri
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                  Sa
                </span>
                <span className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                  Su
                </span>

                <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none rounded-tl-lg bg-gray-50">
                  1
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
                  2
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
                  3
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
                  4
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
                  5
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
                  6
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
                  7
                </span>

                <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none rounded-bl-lg bg-gray-50">
                  8
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
                  9
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-none bg-gray-50">
                  10
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-r-lg">
                  11
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  12
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  13
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  14
                </span>

                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  15
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  16
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  17
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  18
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  19
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  20
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  21
                </span>

                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  22
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  23
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  24
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  25
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  26
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  27
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  28
                </span>

                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  29
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  30
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                  31
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  1
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  2
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  3
                </span>
                <span className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                  4
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <input
                type="text"
                className="flex items-center w-32 px-4 py-2 text-sm text-gray-900 rounded-lg bg-gray-50 focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-none"
                placeholder="18 / 02 / 2021"
              />
              <div className="p-1">
                <svg
                  className="w-6 h-6 text-gray-900 stroke-current"
                  fill="none"
                >
                  <path
                    d="M6.738 12.012h10.5m-4.476 4.25l4.5-4.25-4.5-4.25"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="flex items-center w-32 px-4 py-2 text-sm text-gray-900 rounded-lg bg-gray-50 focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-none"
                placeholder="11 / 03 / 2021"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 text-sm rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-gray-100">
                Cancel
              </button>
              <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-blue-700">
                Set Date
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
