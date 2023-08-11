import { HiArrowNarrowRight } from "react-icons/hi";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";
import { decoration, screen1, screen2 } from "./assets";

function App() {
  return (
    <div className="min-h-screen w-full font-sans bg-gray-800 text-white relative">
      <div className="bg-gray-900 absolute inset-y-0 w-2/5 right-0"></div>
      <div className="mx-auto max-w-7xl px-4 pt-8 relative">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-32">
            <a href="#" className="text-2xl font-bold">
              Razor
            </a>
            <ul className="flex items-center gap-12 font-medium text-gray-100">
              <li>
                <a href="#" className="hover:text-white">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4 font-medium text-gray-100">
            <a href="#" className="hover:text-white">
              Sign in
            </a>
            <a href="#" className="text-teal-500 relative">
              <span>Request Demo</span>
              <img src={decoration} alt="" className="absolute bottom-0" />
            </a>
          </div>
        </nav>
        <div className="grid grid-cols-2 pt-6">
          <div className="max-w-2xl pr-24">
            <div className="w-36 border-t border-gray-700 pt-2 flex items-center justify-between">
              <span className="text-teal-500 text-sm">Sales@Razor.uk</span>
              <HiArrowNarrowRight className="text-gray-100 h-4 w-4" />
            </div>
            <div className="pt-16">
              <span className="text-gray-500">&#8212; Get the App</span>
              <h1 className="text-6xl font-bold pt-6 relative leading-tight">
                Enter your email &#8212; We&rsquo;ll send you a download link
                <img src={decoration} alt="" className="absolute -bottom-2" />
              </h1>

              <div className="flex items-center my-10">
                <input
                  type="text"
                  placeholder="Sales@dstudio.digital"
                  className="px-6 py-4 border-2 rounded-l-lg border-gray-700 bg-gray-900 placeholder:text-gray-500 font-normal border-r-0 focus:border-teal-500 outline-none flex-1 shadow-glow transition ease-out hover:shadow-teal-500/40"
                />
                <button className="px-6 py-4 bg-teal-500 text-gray-900 font-bold rounded-r-lg border-2 border-teal-500 ">
                  Get Link
                </button>
              </div>
              <p className="text-sm tracking-wide text-gray-100 font-normal">
                By signing up, I agree to the Razor{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>{" "}
                &{" "}
                <a href="#" className="underline">
                  Term of Service
                </a>
              </p>
              <div className="flex items-center gap-4 pt-12">
                <button className="flex gap-2 items-center py-4 px-6 bg-black border border-gray-500 rounded-xl shadow-glow transition ease-out hover:-translate-y-1 hover:shadow-teal-500/40">
                  <IoLogoGooglePlaystore className="h-6 w-6" />
                  <span>Play Store</span>
                </button>
                <button className="flex gap-2 items-center py-4 px-6 bg-black border border-gray-500 rounded-xl shadow-glow transition ease-out hover:-translate-y-1 hover:shadow-teal-500/40">
                  <IoLogoAppleAppstore className="h-6 w-6" />
                  <span>App Store</span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center gap-8">
              <img src={screen2} alt="" className="w-64 h-full animate-hover" />
              <img
                src={screen1}
                alt=""
                className="w-64 h-full mt-24 animate-hover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
