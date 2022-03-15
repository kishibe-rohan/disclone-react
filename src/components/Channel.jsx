import { HashtagIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

function Channel({id,channelName}) {
    const navigate = useNavigate();

   return(
       <div className="font-medium flex items-center cursor-pointer hover:bg-[#3A3C43] p-1 rounded-md  hover:text-white">
           <HashtagIcon className="h-5 mr-2"/>
           {channelName}
       </div>
   )
}

export default Channel;