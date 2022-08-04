import {
  DashboardIcon,
  DesignIcon,
  OrderIcon,
  InventoryIcon,
  TruckIcon,
  ContactIcon,
  ProfileIcon,
  BillingIcon,
  HelpIcon,
  LogoutIcon,
  ChevronLeftIcon,
  ArrowLeftIcon,
  BoxIcon,
  TShirtIcon,
  ChevronRightIcon,
  InfoIcon,
} from "./assets/icons";
import {
  bulkSwag,
  logo,
  presetPack,
  shipment,
  storage,
  swagPack,
} from "./assets/imgs";

const menu = [
  [
    { name: "Dashboard", icon: DashboardIcon },
    { name: "Design", icon: DesignIcon },
    { name: "Orders", icon: OrderIcon },
    { name: "Inventory", icon: InventoryIcon },
    { name: "Shipments", icon: TruckIcon },
    { name: "Contacts", icon: ContactIcon },
  ],
  [
    { name: "Profile", icon: ProfileIcon },
    { name: "Billing", icon: BillingIcon },
    { name: "Help", icon: HelpIcon },
    { name: "Logout", icon: LogoutIcon },
  ],
];

const products = [
  { name: "Premium Pack", imgUrl: presetPack, color: "blue", category: "pack" },
  { name: "Eco Pack", imgUrl: swagPack, color: "custom", category: "pack" },
  { name: "On The Road", imgUrl: bulkSwag, color: "custom", category: "bulk" },
];

const orders = [
  {
    productName: "Swag",
    subtotal: 75,
    quantity: 100,
    totalOrder: 7500,
  },
  {
    productName: "Tech Pack",
    subtotal: 90,
    quantity: 100,
    totalOrder: 9500,
  },
  {
    productName: "Bella + Canvas",
    subtotal: 15,
    quantity: 100,
    totalOrder: 1500,
  },
  {
    productName: "Nike Cap",
    subtotal: 7.2,
    quantity: 100,
    totalOrder: 720,
  },
];

function App() {
  const formatMoney = (value) =>
    new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    }).format(value);
  // const totalOrder = () =>
  //   orders.value.reduce((total, order) => total + order.subtotal, 0);

  return (
    <div className="flex w-full h-screen font-primary text-gray-900 bg-white">
      <aside className="flex relative flex-col py-4 px-6 w-52 border-r border-gray-200">
        <button className="absolute -right-2.5 top-5 flex justify-center items-center bg-gray-100 rounded-full border border-gray-200">
          <ChevronLeftIcon className="w-4 h-4 text-gray-400" />
        </button>
        <a href="/#">
          <img src={logo} alt="" className="w-24" />
        </a>
        {menu.map((items, index) => (
          <ul
            key={index}
            className={`flex flex-col gap-y-5 pt-12 ${
              index === 0 ? "flex-1" : ""
            }`}
          >
            {items.map((item) => (
              <li>
                <a href="/" className="flex gap-x-3 items-center group">
                  <item.icon className="w-5 h-5 fill-current text-gray-400 group-hover:text-blue-500" />
                  <span className="inline-block text-sm leading-6 text-gray-600 group-hover:text-gray-800 group-hover:font-bold font-semibold">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        ))}
      </aside>
      <main className="overflow-y-scroll flex-1">
        <div className="flex flex-col flex-1 py-4 px-10">
          <button className="flex gap-x-1 items-center text-gray-400">
            <ArrowLeftIcon className="w-4 h-4 fill-current" />
            <span className="inline-block pt-0.5 text-sm leading-6">
              Back to Order
            </span>
          </button>
          <section className="pt-6">
            <h1 className="text-2xl font-bold text-gray-900">Products</h1>
            <div className="grid grid-cols-3 gap-x-6 py-6">
              {products.map((product) => (
                <article className="overflow-hidden rounded-2xl border border-gray-100">
                  <div className="flex justify-center items-center bg-gray-100 aspect-square">
                    <img src={product.imgUrl} alt="" />
                  </div>
                  <div className="flex flex-col p-6">
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold tracking-wide">
                        {product.name}
                      </h2>
                      <span className="flex gap-x-1 items-center">
                        {product.category === "pack" ? (
                          <BoxIcon className="w-4 h-4 text-gray-400 fill-current" />
                        ) : (
                          <TShirtIcon className="w-4 h-4 text-gray-400 fill-current" />
                        )}
                        <span className="text-sm font-semibold tracking-wide text-gray-800 capitalize">
                          {product.category}
                        </span>
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">
                      Color:{" "}
                      <span className="text-gray-600 capitalize font-semibold">
                        {product.color}
                      </span>
                    </span>
                    <a
                      href="/#"
                      className="inline-block mt-6 text-sm font-semibold text-center text-blue-500 hover:text-blue-600"
                    >
                      View Mockups
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className="pt-5">
            <h1 className="text-2xl font-bold text-gray-900">
              Shipping & Storage
            </h1>
            <div className="grid grid-cols-2 gap-x-6 pt-6">
              <div className="overflow-hidden relative p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <h3 className="font-semibold">Ship Swag to Recipients</h3>
                  <a
                    href="/#"
                    className="flex items-center text-sm font-semibold text-blue-500 hover:text-blue-600"
                  >
                    <span>View Shipments</span>
                    <ChevronRightIcon class="w-4 h-4 fill-current" />
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-x-4 pt-4">
                  <div>
                    <div className="text-sm text-gray-600">
                      Shipments Created
                    </div>
                    <div className="pt-2 text-lg font-semibold">2</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Total Shipment</div>
                    <div className="pt-2 text-lg font-semibold">
                      {formatMoney(30)}
                    </div>
                  </div>
                </div>
                <button className="py-2 px-5 mt-4 text-sm font-semibold leading-relaxed text-blue-500 rounded-full border border-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500">
                  Create Shipment
                </button>
                <img
                  src={shipment}
                  alt=""
                  className="absolute right-0 bottom-0 w-28"
                />
              </div>
              <div className="overflow-hidden relative p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <h3 className="font-semibold">Send Swag to Storage</h3>
                  <a
                    href="/#"
                    className="flex items-center text-sm font-semibold text-blue-500 hover:text-blue-600"
                  >
                    <span>View SwagUp Storage</span>
                    <ChevronRightIcon class="w-4 h-4 fill-current" />
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-x-4 pt-4">
                  <div>
                    <div className="text-sm text-gray-600">
                      Sending to Storage
                    </div>
                    <div className="pt-2 text-lg font-semibold">350</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Total Storage</div>
                    <div className="pt-2 text-lg font-semibold">
                      {formatMoney(1400)}
                    </div>
                  </div>
                </div>
                <button className="py-2 px-5 mt-4 text-sm font-semibold leading-relaxed text-blue-500 rounded-full border border-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500">
                  Update Storage
                </button>
                <img
                  src={storage}
                  alt=""
                  className="absolute right-0 bottom-0 w-28"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <aside className="flex flex-col w-72 border-l border-gray-200">
        <div className="py-4 px-6 border-b border-gray-200">
          <div className="font-semibold leading-relaxed text-gray-800">
            Order #22353 Summary
          </div>
          <div className="text-xs leading-loose text-gray-400">
            Order Placed: 12-30-2020
          </div>
        </div>
        <ul className="overflow-y-scroll flex-1 px-6">
          {orders.map((order) => (
            <li className="py-2 border-b border-gray-200 last:border-none">
              <div className="mt-2 text-sm font-semibold text-gray-800">
                {order.productName}
              </div>
              <div className="flex justify-between items-center mt-1 text-xs text-gray-400">
                <span>
                  {" "}
                  {formatMoney(order.subtotal)} x {order.quantity}{" "}
                </span>
                <span className="font-bold text-gray-800">
                  {formatMoney(order.totalOrder)}
                </span>
              </div>
              <a
                href="/#"
                className="inline-block mt-3 text-xs font-semibold leading-relaxed text-blue-500 hover:text-blue-600"
              >
                Edit breakdown
              </a>
            </li>
          ))}
        </ul>
        <div className="px-6 pb-4 border-t border-gray-200">
          <div className="py-2">
            <div className="flex justify-between items-center py-1">
              <div className="text-xs text-gray-400">Subtotal</div>
              <span className="font-semibold"> {formatMoney(12560)} </span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="flex gap-x-1 items-center">
                <div className="text-xs text-gray-400">Shipping</div>
                <InfoIcon className="w-4 h-4 text-gray-300 stroke-current" />
              </span>
              <span className="text-sm text-gray-300"> TBD </span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="flex gap-x-1 items-center">
                <div className="text-xs text-gray-400">Warehouse</div>
                <InfoIcon className="w-4 h-4 text-gray-300 stroke-current" />
              </span>
              <span className="text-sm text-gray-300"> TBD </span>
            </div>
          </div>
          <div className="flex justify-between items-center py-4 border-t border-gray-200">
            <div className="text-sm text-gray-400">Total</div>
            <div className="text-lg font-semibold">{formatMoney(14928)}</div>
          </div>
          <button className="flex justify-center items-center py-4 w-full text-sm font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600">
            Continue
          </button>
        </div>
      </aside>
    </div>
  );
}

export default App;
