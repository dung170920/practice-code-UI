import {galleryPage, logo, organicLandingPage, posDashboard, trafficLandingPage, wfhLandingPage} from './assets/images'
import { OverviewIcon, ShoppingBagIcon, GraphIcon,CalendarIcon, WalletIcon, FileIcon, ChatIcon, GroupChatIcon, SettingsIcon, LogoutIcon, PlusIcon, LayersIcon, DraftIcon, InvisibleIcon, RejectedIcon, MailIcon, FilterIcon, FigmaIcon, SketchIcon, AIIcon, PencilIcon, TrashIcon, ChevronLeftIcon, ChevronRightIcon} from './assets/icons'

const sidebar = [
  [
    { name: "Overview", icon: OverviewIcon },
    { name: "Products", icon: ShoppingBagIcon },
    { name: "Analytics", icon: GraphIcon },
    { name: "Schedule", icon: CalendarIcon },
    { name: "Payout", icon: WalletIcon },
    { name: "Statements", icon: FileIcon },
  ],
  [
    { name: "Help", icon: ChatIcon },
    { name: "Community", icon: GroupChatIcon },
    { name: "Settings", icon: SettingsIcon },
    { name: "Logout", icon: LogoutIcon },
  ],
];

const status = [
  { name: "Published", icon: LayersIcon },
  { name: "Draft", icon: DraftIcon },
  { name: "Hidden", icon: InvisibleIcon },
  { name: "Rejected", icon: RejectedIcon },
  { name: "Under Review", icon: MailIcon },
];

const products = [
  {
    name: "Organic Landing page",
    category: "Web Design",
    imageUrl: organicLandingPage,
    price: 20,
    downloaded: 793,
    rating: 4.9,
    platformIcons: [FigmaIcon, SketchIcon],
    createdAt: "12/01/22",
  },
  {
    name: "Traffic Landing page",
    category: "Web Design",
    imageUrl: trafficLandingPage,
    price: 24,
    downloaded: 34,
    rating: 4.4,
    platformIcons: [FigmaIcon, AIIcon],
    createdAt: "10/01/22",
  },
  {
    name: "POS Dashboard",
    category: "Web Design",
    imageUrl: posDashboard,
    price: 16,
    downloaded: 896,
    rating: 4.6,
    platformIcons: [FigmaIcon, SketchIcon],
    createdAt: "01/01/22",
  },
  {
    name: "Gallery page",
    category: "Web Design",
    imageUrl: galleryPage,
    price: 38,
    downloaded: 194,
    rating: 4.6,
    platformIcons: [FigmaIcon, SketchIcon],
    createdAt: "04/01/22",
  },
  {
    name: "WFH Landing page",
    category: "Web Design",
    imageUrl: wfhLandingPage,
    price: 22,
    downloaded: 404,
    rating: 4.3,
    platformIcons: [FigmaIcon, SketchIcon],
    createdAt: "12/12/21",
  },
];

function App() {
  return (
    <div className="w-full  min-h-screen font-primary text-gray-900 bg-gray-50 flex">
      <aside className='py-6 px-10 w-64 border-r border-gray-200'>
        <img src={logo} alt="" className='w-28'/>
        {sidebar.map((items, index) =>
        <ul className="flex flex-col gap-y-6 pt-20" key={index}>
          {items.map(item => 
            <li key={item.name}>
              <a href="/#" className="flex items-start gap-x-4 py-2 text-gray-500 hover:text-indigo-600 group">
                <span className="absolute w-1.5 h-8 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 ease-in-out bg-indigo-600 transition-transform"></span>
                <item.icon className="w-6 h-6 fill-current"/>
                <span>{item.name}</span>
              </a>
            </li>
          )}
        </ul>
        )}
      </aside>
      <main className="flex-1 pb-8">
        <div className="flex items-center justify-between py-7 px-10">
          <div className="">
            <h1 className="text-gray-800 text-2xl font-semibold leading-relaxed">Products</h1>
            <p className="text-sm font-medium text-gray-500">Let's grow to your business! Create your product and upload here</p>
          </div>
          <button className="py-2.5 px-6 text-white bg-indigo-600 rounded-xl inline-flex gap-x-2 items-center hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
            <PlusIcon className="w-6 h-6 fill-current"/>
            <span className="text-sm font-semibold tracking-wide">Create Item</span>
          </button>
        </div>

        <ul className="flex gap-x-24 items-center px-4 border-y border-gray-200">
          {status.map(s => <li key={s.name}>
            <button className="flex gap-x-2 items-center py-5 px-6 text-gray-500 hover:text-indigo-600 group relative">
              <s.icon className="w-6 h-6 fill-current"/>
              <span className="font-medium">{s.name}</span>
              <span className="absolute left-3 w-full h-0.5 bg-indigo-600 rounded bottom-0 scale-x-0 group-hover:scale-x-100 ease-in-out transition-transform"></span>
            </button>
          </li>)}
        </ul>

        <table className="w-full border-b border-gray-200">
          <thead>
            <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
              <td className="pl-10">
                <div className="flex items-center gap-x-4">
                  <input type="checkbox" className="w-6 h-6 text-indigo-600 rounded-md border-gray-300" indeterminate="indeterminate"/>
                  <span>Product Name</span>
                </div>
              </td>
              <td className="py-4 px-4 text-center">Pricing</td>
              <td className="py-4 px-4 text-center">Downloaded</td>
              <td className="py-4 px-4 text-center">Rating</td>
              <td className="py-4 px-4 text-center">Platforms</td>
              <td className="py-4 pr-10 pl-4 text-center">
              <FilterIcon className="w-6 h-6 fill-current"/>
            </td>
            </tr>
          </thead>
          <tbody>
            {products.map(product => 
            <tr key={product.name} className="hover:bg-gray-100 transition-colors group">
              <td className="flex gap-x-4 items-center py-4 pl-10">
                <input type="checkbox" className="w-6 h-6 text-indigo-600 rounded-md border-gray-300"/>
                <img src={product.imageUrl} alt="" className="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"/>
                <div className="">
                <a href="/" className="text-lg font-semibold text-gray-700">{product.name}</a>
                <div className="font-medium text-gray-400">{product.category}</div>
                </div>
              </td>
              <td className="font-medium text-center">${product.price}</td>
              <td className="font-medium text-center">{product.downloaded}</td>
              <td className="text-center">
                <span className="font-medium">{product.rating}</span>
                <span className="text-gray-400">/5</span>
              </td>
              <td>
                <div className="flex gap-x-2 justify-center items-center">
                {product.platformIcons.map((Platform, index) => 
                  <a href="/" key={index} className="p-2 bg-gray-200 rounded-md hover:bg-gray-300">
                    <Platform className="w-6 h-6"/>
                  </a>
                )}
                </div>
                </td>
              <td>
                <span className="inline-block group-hover:hidden w-20">{product.createdAt}</span>
                <div className="hidden group-hover:flex group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2 group-hover:w-20">
                  <button className="p-2 hover:rounded-md hover:bg-gray-200 hover:text-indigo-600">
                    <PencilIcon className="w-6 h-6 fill-current"/>
                  </button>
                  <button className="p-2 hover:rounded-md hover:bg-gray-200 hover:text-indigo-600">
                    <TrashIcon className="w-6 h-6 fill-current"/>
                  </button>
                </div>
              </td>
            </tr>
            )}
          </tbody>
        </table>

        <div className="flex gap-x-2 justify-center pt-8">
          <button className="flex justify-center items-center w-8 h-8">
            <ChevronLeftIcon className="w-6 h-6 stroke-current hover:text-indigo-600"/>
          </button>
          {[...Array(6).keys()].map((i) => <button className={`flex items-center justify-center w-8 h-8 font-semibold rounded-full ${i === 0 ? "bg-gray-800 text-white" : "text-gray-400 hover:text-indigo-600"}`} key={i}>{++i}</button>)}
          <button className="flex justify-center items-center w-8 h-8">
            <ChevronRightIcon className="w-6 h-6 stroke-current hover:text-indigo-600"/>
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
