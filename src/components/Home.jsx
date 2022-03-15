import { ChevronDownIcon, PlusIcon } from "@heroicons/react/outline";
import { MicrophoneIcon, PhoneIcon, CogIcon } from "@heroicons/react/solid";

import ServerIcon from "./ServerIcon";

const Home = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="flex flex-col space-y-3 bg-[#202225] p-3 min-w-max">

          {/*Sidebar*/}
          
          <div className="server-default hover:bg-discord_purple">
            <img src="https://rb.gy/kuaslg" alt="" className="h-5" />
          </div>
          <hr className="border-gray-700 border w-8 mx-auto"/>
          <ServerIcon image="https://i.ibb.co/p35CFdX/pngtree-sushi-logo-template-png-image-3584220.jpg"/>
          <ServerIcon image="https://i.ibb.co/xDdVDk2/UnYKQdu.png"/>
          <ServerIcon image="https://i.ibb.co/7YnR8M4/93a579a6839c18712dc83b9dc375ea9d.jpg"/>
          <ServerIcon image="https://i.ibb.co/B6BCVqg/6f5e1a3906c376d4966c378713b7940c.jpg"/>
        </div>
      </div>
    </>
  )
}

export default Home




