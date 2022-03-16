import { ChevronDownIcon, PlusIcon } from "@heroicons/react/outline";
import { MicrophoneIcon, PhoneIcon, CogIcon } from "@heroicons/react/solid";

import ServerIcon from "./ServerIcon";
import Channel from './Channel';
import Chat from './Chat'

import { auth, db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import {signOut} from 'firebase/auth';
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import {Navigate} from 'react-router-dom'


const Home = () => {
  const [user] = useAuthState(auth);
  const [channels] = useCollection(collection(db,"channels"));

 /*
  const channels = [
    {id:1,name:"among-us-lfg"},
    {id:2,name:"valorant-lfg"},
    {id:3,name:"uno-lfg"},
    {id:4,name:"tarkov-lfg"}
  ]
 */

  /*
  const user={
    uid:"87318511",
    displayName:"Yuno",
    photoURL:"https://i.ibb.co/HG30vhL/schezwan.png"
  }
  */

  const handleAddChannel = async() => {
    const channelName = prompt("Enter a new channel name");
  
    if(channelName){
      await addDoc(collection(db,"channels"),{
          channelName:channelName,
      })


    }
  }

  return (
    <>
      {!user && <Navigate to="/"/>}
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

          <div className="server-default hover:bg-discord_green group">
            <PlusIcon className="text-discord_green h-7 group-hover:text-white"/>
          </div>
        </div>

       {/*Channels*/}
        <div className="bg-[#2f3136] flex flex-col min-w-max">
          <h2 className="flex text-white font-bold text-sm items-center justify-between border-b border-gray-800 p-4 hover:bg-[#34373C] cursor-pointer">
            SUShi  <ChevronDownIcon className="h-5 ml-2" />
          </h2>
          <div className="text-[#8e9297] flex-grow">
            <div className="flex items-center p-2 mb-2">
              <ChevronDownIcon className="h-3  mr-2" />
              <h4 className="font-semibold ">Channels</h4>
              <PlusIcon
                className="h-6 ml-auto cursor-pointer hover:text-white"
                onClick={handleAddChannel}
              />
            </div>
            <div className="flex flex-col space-y-2 px-2 mb-4">
              {channels?.docs.map((channel) => (
                <Channel key={channel.id} id={channel.id} channelName={channel.data().channelName}/>
              ))}
            </div>
          </div>

          {/*User Info*/}
          <div className="bg-[#292b2f] p-2 flex justify-between items-center space-x-4">
            <div className="flex items-center space-x-1">
              <img src={user?.photoURL} alt="" className="h-10 rounded-full"  onClick={() => signOut(auth)}/>
              <h4 className="text-white text-xs font-medium">
                {user?.displayName}{" "}
                <span className="text-[#b9bbbe] block">
                  #{user?.uid.substring(0,4)}
                </span>
              </h4>
            </div>

            <div className="text-gray-400 flex items-center">
                <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                  <MicrophoneIcon className="h-5 icon " />
                </div>
                <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                  <PhoneIcon className="h-5 icon" />
                </div>
                <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                  <CogIcon className="h-5 icon" />
                </div>
            </div>
          </div>
        </div>

        {/* Chat */}
        <div className="bg-[#36393f] flex-grow">
          <Chat/>             
        </div>
      </div>
    </>
  )
}

export default Home




