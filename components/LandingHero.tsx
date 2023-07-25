'use client'

import { useAuth } from "@clerk/nextjs"
import  TypewriterContent  from "typewriter-effect"
import { Button } from "./ui/button";
import Link from "next/link";

export const LandingHero = () => {
    const { isSignedIn } = useAuth();

    return (
        <div className="text-white font-bold py-36 text-center space-y-5">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
                <h1>
                    The Best AI tool for
                </h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
                    <TypewriterContent
                        options={{
                            strings: [
                               "Chatbot.",
                            "Image generation.",
                              "Code generation.",
                            "Video generation.",
                            "Music Generation.",
                                 "Text Summarizer.",
                            ],

                            autoStart: true,
                            loop: true
                           
                    }}
                    />

                </div>
                <div className="text-sm text-zinc-400 font-light md:text-xl">
                    Unlock Creativity at Warp Speed with AI.
                </div>
                <div>
                    <Link href={isSignedIn ? "/dashboard" : "/sign-up"} >
                        <Button className="md:text-lg p-4 md:p-6 rounded-full font-semibold" variant="premium">
                            Start Generating For Free
                        </Button>
                    
                    </Link>
                </div>
                
            </div>

        </div>
    )
}