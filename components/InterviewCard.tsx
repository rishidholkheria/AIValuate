import dayjs from "dayjs";
import React from "react";
import Image from "next/image";
import { getRandomInterviewCover } from "@/public/utils";

const InterviewCard = ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMM D, YYYY");

  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-50 m-3">
      <div className="dark-gradient rounded-2xl min-h-full flex flex-col p-6 relative overflow-hidden gap-10 justify-between">
        <div>
          <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
            <p className="text-sm font-semibold capitalize">{normalizedType}</p>
          </div>
          <Image
            src={getRandomInterviewCover()}
            alt="cover"
            width={40}
            height={40}
            className="rounded-full object-fit size-[60px]"
          />
          <h4 className="mt-5 capitalize text-[18px] font-semibold">
            {role} Interview
          </h4>
          <div>
            <div className="flex gap-4 mt-4">
              <Image
                src="/calendar.svg"
                alt="calender"
                width={16}
                height={16}
              />
              <p>{formattedDate}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center m-2">
        <button className="bg-white py-1 px-2 w-4/6 min-h-9 text-black rounded-2xl cursor-pointer">
          Take Interview
        </button>
      </div>
    </div>
  );
};

export default InterviewCard;
