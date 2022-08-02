import { CheckOrangeIcon, CheckTealIcon } from "./assets/icons";
import {
  avatar2,
  avatar3,
  avatar4,
  avatar6,
  avatar7,
  avatar8,
  bg1,
  bg2,
  bg3,
  bg4,
  bg6,
  bg7,
} from "./assets/imgs";
import CardPrimary from "./components/CardPrimary";
import CardSecondary from "./components/CardSecondary";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const primaryCard = [
  {
    title: "How to do Basic Jumping and how to landing safely",
    avatar: avatar3,
    background: bg1,
    name: "Thomas Hope",
    views: "53K views",
    created_at: "2 weeks ago",
    check_icon: CheckTealIcon,
    duration: "7 min",
  },
  {
    title: "Skateboard Tips You need to know",
    avatar: avatar2,
    background: bg2,
    name: "Tony Andrew",
    views: "52K views",
    created_at: "1 weeks ago",
    check_icon: CheckOrangeIcon,
    duration: "10 min",
  },
];
const secondaryCard = [
  {
    title: "Basic how to ride your skateboard comfortly",
    avatar: avatar6,
    background: bg3,
    name: "Andy William",
    views: "53K views",
    created_at: "2 weeks ago",
    color: "green",
    duration: "7 min",
  },
  {
    title: "Prepare for your first skateboard jump",
    avatar: avatar4,
    background: bg7,
    name: "Johny Wise",
    views: "53K views",
    created_at: "2 weeks ago",
    color: "orange",
    duration: "7 min",
  },
  {
    title: "Tips to playing skateboard on the ramp",
    avatar: avatar8,
    background: bg6,
    name: "Budi Hakim",
    views: "53K views",
    created_at: "2 weeks ago",
    color: "orange",
    duration: "7 min",
  },
  {
    title: "Basic Equipment to play skateboard safely",
    avatar: avatar7,
    background: bg4,
    name: "Wijaya Abadi",
    views: "53K views",
    created_at: "2 weeks ago",
    color: "green",
    duration: "7 min",
  },
];

function App() {
  return (
    <div className="flex font-primary text-white bg-gray-900">
      <div className="flex flex-col min-h-screen w-80">
        <div className="px-8 py-8">
          <h1 className="text-xl font-semibold">skateboard</h1>
        </div>
        <Sidebar />
      </div>
      <div className="flex flex-col w-full pl-5 pr-14 pt-7">
        <Navbar />
        <div className="pt-10">
          <h2 className="text-4xl font-semibold">Discover</h2>
          <div className="flex space-x-6 py-7">
            {primaryCard.map((card, index) => (
              <CardPrimary content={card} key={card.name} index={index} />
            ))}
          </div>
        </div>
        <div className="pt-4">
          <h2 className="text-2xl font-medium">Most watched</h2>
          <div className="flex justify-between py-6">
            {secondaryCard.map((card) => (
              <CardSecondary content={card} key={card.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
