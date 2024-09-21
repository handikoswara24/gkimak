'use client'

import Cover from "@/components/RSVP/Cover";
import Header from "@/components/RSVP/Header";
import RSVPComponent from "@/components/RSVP/RSVPComponent";
import TimeAndPlace from "@/components/RSVP/TimeAndPlace";
import coverAtom from "@/store/coverAtom";
import { useAtom } from "jotai";
import { useRef } from "react";

export default function Home() {
  const [cover] = useAtom(coverAtom);
  const song = useRef<HTMLAudioElement>(null);
  const linkSong = "https://res.cloudinary.com/dsntwgt8f/video/upload/v1726493182/ie7d9ncznbq1cj7ofb3g.mp3";

  const onPlay = () => {
    song?.current?.play();
  }
  return (
    <div className="bg-white text-black">
      {cover == 0 && (
        <Cover onPlay={onPlay} />
      )}
      {cover == 1 && (
        <div className="pb-6">
          <Header />
          <TimeAndPlace />
          <RSVPComponent />
        </div>
      )}
      <div>
        <div className='hidden'>
          <audio autoPlay loop ref={song}>
            <source src={linkSong}></source>
          </audio>
        </div>
      </div>
    </div>
  );
}
