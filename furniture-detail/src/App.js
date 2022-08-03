import { useState } from "react";
import {
  ArrowLeftIcon,
  CartIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FacebookIcon,
  HeartIcon,
  InstagramIcon,
  Logo,
  MenuIcon,
  MinusIcon,
  PinterestIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
  TwitterIcon,
} from "./assets/icons";
import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
} from "./assets/imgs";

const menu = ["Shop", "Collective", "Designer", "About us", "Contact"];

const products = [product1, product2, product3, product4, product5, product6];

function App() {
  const [count, setCount] = useState(1);
  return (
    <div className="font-primary text-gray-900">
      <header className="flex items-center border-b border-gray-900/20">
        <div className="flex items-center justify-between flex-1 pl-20 pr-4">
          <a href="/">
            <Logo />
          </a>
          <nav className="flex items-center space-x-10 text-sm font-medium text-gray-900 uppercase">
            {menu.map((item) => (
              <a
                className="py-1 hover:border-b hover:border-gray-900"
                href="/"
                key={item}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center">
            <button className="h-16 px-6">
              <MenuIcon />
            </button>
            <button className="h-16 px-6">
              <SearchIcon />
            </button>
          </div>
        </div>
        <button className="flex items-center justify-center h-16 px-6 border-l border-gray-900/20">
          <CartIcon />
        </button>
      </header>
      <main className="pt-10 pb-12 pl-20">
        <button>
          <ArrowLeftIcon />
        </button>
        <div className="flex">
          <div className="flex flex-col w-1/2">
            <div className="max-w-md">
              <div className="flex items-center text-sm pt-9">
                <span className="text-gray-900/40">Chair&nbsp;</span>
                <span>/ Meryl Lounge Chair</span>
              </div>
              <div className="pt-10">
                <h1 className="text-4xl font-bold tracking-wide">
                  Meryl Lounge Chair
                </h1>
              </div>
              <div className="flex items-center justify-between pt-4">
                <span className="text-3xl">$149.99</span>
                <div className="flex items-center">
                  <div className="flex space-x-px">
                    <StarIcon v-for="i in 5" />
                  </div>
                  <div className="pl-2 leading-none">
                    4.6 / 5.0 <span className="text-gray-900/40"> (556)</span>
                  </div>
                </div>
              </div>
              <p className="pt-8 leading-relaxed">
                The gently curved lines accentuated by sewn details are kind to
                your body and pleasant to look at. Also, there’s a tilt and
                height-adjusting mechanism that’s built to outlast years of ups
                and downs.
              </p>
              <div className="flex pt-8 space-x-4">
                <button className="w-5 h-5 rounded-full bg-[#58737d] hover:ring-4 hover:ring-gray-900/20" />
                <button className="w-5 h-5 rounded-full bg-[#58737d] hover:ring-4 hover:ring-gray-900/20" />
                <button className="w-5 h-5 rounded-full bg-[#545454] hover:ring-4 hover:ring-gray-900/20" />
                <button className="w-5 h-5 rounded-full bg-[#CBA5A5] hover:ring-4 hover:ring-gray-900/20" />
              </div>
              <div className="flex space-x-6 pt-9">
                <div className="flex items-center border rounded-sm border-gray-900/30">
                  <button
                    className="p-4"
                    onClick={() => setCount((prev) => prev - 1)}
                  >
                    <MinusIcon />
                  </button>
                  <input
                    value={count}
                    type="text"
                    className="w-16 h-full text-center outline-none"
                    onChange={(e) =>
                      setCount((prev) => (prev = parseInt(e.target.value) || 0))
                    }
                  />
                  <button
                    className="p-4"
                    onClick={() => setCount((prev) => prev + 1)}
                  >
                    <PlusIcon />
                  </button>
                </div>
                <button className="py-4 text-sm font-bold text-white uppercase bg-teal-500 rounded-sm px-14 hover:bg-teal-600">
                  Add to cart
                </button>
              </div>
              <div className="pt-8">
                Free 2-5 day shipping • Tool-free assembly • 30-day trial
              </div>
              <div className="flex items-center justify-between pt-12">
                <button className="flex items-center px-4 py-2 space-x-2 text-teal-500 hover:text-teal-600">
                  <HeartIcon className="stroke-current" />
                  <span>Add to Wishlist</span>
                </button>
                <div className="flex items-center space-x-6">
                  <button>
                    <FacebookIcon className="w-5 h-5" />
                  </button>
                  <button>
                    <TwitterIcon className="w-5 h-5" />
                  </button>
                  <button>
                    <PinterestIcon className="w-5 h-5" />
                  </button>
                  <button>
                    <InstagramIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-end w-1/2">
            <div className="flex items-start pr-20 space-x-2">
              <span className="text-3xl font-bold leading-tight">01 </span>
              <span className="text-xl">/ 05</span>
            </div>
            <div className="flex pr-10 space-x-16">
              <button className="p-3">
                <ChevronLeftIcon />
              </button>
              <button className="p-3">
                <ChevronRightIcon />
              </button>
            </div>
            <img src={product1} alt="" />
            <div className="absolute w-[440px] h-[250px] bg-gradient-to-r from-transparent to-teal-600/20 top-24 right-0" />
            <div className="flex pr-20 space-x-4">
              {[...Array(6).keys()].map((i) => (
                <div
                  className="w-24 h-24 pl-1 border-2 cursor-pointer border-gray-900/10 hover:border-teal-500"
                  key={i}
                >
                  <img
                    src={products[i]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
