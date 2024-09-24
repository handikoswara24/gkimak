'use client'

import SpeakerIcon from "@/components/Icons/SpeakerIcon";
import SpeakerXIcon from "@/components/Icons/SpeakerXIcon";
import Cover from "@/components/RSVP/Cover";
import Header from "@/components/RSVP/Header";
import RSVPComponent from "@/components/RSVP/RSVPComponent";
import TimeAndPlace from "@/components/RSVP/TimeAndPlace";
import { SONGURL } from "@/constants/common";
import coverAtom from "@/store/coverAtom";
import { useAtom } from "jotai";
import { useRef, useState } from "react";
import Timer from "../Timer/Timer";
import Photos from "./Photos";
import { Element } from "react-scroll";
import Menu from "./Menu";
import Footer from "./Footer";

const Wrapper = () => {
    const [cover] = useAtom(coverAtom);
    const song = useRef<HTMLAudioElement>(null);
    const [muted, setMuted] = useState(false);

    const onPlay = () => {
        song?.current?.play();
    }

    const onSilent = () => {
        if (song && song.current) {
            song.current.muted = !song.current.muted;
            setMuted(!muted);
        }
    }
    return (
        <div className="bg-white text-black font-montserrat pb-10">
            <div className="mx-auto max-w-md">
                {cover == 0 && (
                    <Cover onPlay={onPlay} />
                )}
                {cover == 1 && (
                    <div className="pb-6">
                        <Element name="home">
                            <Header />
                        </Element>
                        <Element name="acara">
                            <TimeAndPlace />
                            <Timer />
                        </Element>
                        <Element name="photo">
                            <Photos />
                        </Element>
                        <Element name="rsvp">
                            <RSVPComponent />
                        </Element>
                        <Menu />
                        <Footer />
                        <div className="fixed bottom-16 z-40 right-4 rounded-full bg-slate-400 cursor-pointer p-4" onClick={() => onSilent()}>
                            {muted && <SpeakerIcon className="size-6" />}
                            {!muted && <SpeakerXIcon className="size-6" />}
                        </div>
                    </div>
                )}

                <div>
                    <div className='hidden'>
                        <audio autoPlay loop ref={song}>
                            <source src={SONGURL}></source>
                        </audio>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Wrapper