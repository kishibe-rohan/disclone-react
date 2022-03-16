import { HashtagIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

import {useDispatch} from 'react-redux'
import {setChannelInfo} from '../redux/channelSlice'

function Channel({id,channelName}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const setChannel = () => {
        dispatch(
            setChannelInfo({
                channelId: id,
                channelName: channelName,
            })
        )

        navigate(`/channels/${id}`)
    }

   return(
       <div className="font-medium flex items-center cursor-pointer hover:bg-[#3A3C43] p-1 rounded-md  hover:text-white" onClick={setChannel}>
           <HashtagIcon className="h-5 mr-2"/>
           {channelName}
       </div>
   )
}

export default Channel;