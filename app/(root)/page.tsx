import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { dummyInterviews } from "@/constants";
import InterviewCard from "../components/InterviewCard";

const Page = () => {
  return (
    <>
      <section className="flex flex-row blue-gradient-dark rounded-3xl px-16 py-6 items-center justify-between max-sm:px-4">
        <div className="flex flex-col gap-4 max-w-lg">
          <h2 className="text-gray-100">
            AI powered Interview Practice & Feedback
          </h2>
          <p>
            Get unlimited mock interviews and improve yourself for your next
            Interview!
          </p>
          <Button>
            <Link className="font-bold" href="/interview">
              Start an interview
            </Link>
          </Button>
        </div>
        <Image src="/robot.png" alt="robotImg" width={400} height={400} />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div>
          <p>You have not taken any interviews yet.</p>
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key = {interview.id} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div>
          <p>There are no interviews available</p>
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key = {interview.id}/>
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
