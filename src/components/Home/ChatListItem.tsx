// HW

import { SingleChatMessageType } from "@/types/MessageTypes";
import Image from "next/image";
import React from "react";
import LoadingSpinner from "../ui/LoadingSpinner";

type Props = {
  type: "user" | "ai";
  msg: string;
  loading?: boolean;
};

export default function ChatListItem({ type, msg, loading = false }: Props) {
  return (
    <div
      className={`flex ${
        type === "user" ? "pr-3 justify-end mb-4" : "pl-3 justify-start"
      } items-start`}
    >
      {/*need to stop overflowing of words -> if a certain amount of word is reached go to next line. Also, user icon has to be on the right side bottom corner. Must follow down with the increasing text (same goes for ai)*/}

      {type === "ai" && (
        <div className={`mr-2 h-10 w-10`}>
          <Image
            className="object-cover rounded-full"
            src={"/defaultProfilePic.jpeg"}
            width={80}
            height={80}
            alt="User profile picture"
          />
        </div>
      )}

      {
        // if loading is true -> show loading icon
        loading ? (
          <LoadingSpinner />
        ) : (
          <div
            className={`${
              type === "user" ? "bg-[#DFD7CB]" : "bg-white"
            } rounded-xl p-4 drop-shadow-sm max-w-[70%]`}
          >
            <p className="text-lg">{msg}</p>
          </div>
        )
      }

      {type === "user" && (
        <div className={`ml-2 h-10 w-10`}>
          <Image
            className="object-cover rounded-full"
            src={"/defaultProfilePic.jpeg"}
            width={80}
            height={80}
            alt="User profile picture"
          />
        </div>
      )}
    </div>
  );
}

// extra styling for overflowing words + profile pic -> HW
// Loading Spinner -> HW
