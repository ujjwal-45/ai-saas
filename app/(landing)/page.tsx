import { LandingContent } from "@/components/LandingContent";
import { LandingHero } from "@/components/LandingHero";
import { LandingNavbar } from "@/components/LandingNavbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
    return (
        <div>
            <LandingNavbar />
            <LandingHero />
            <LandingContent />
            
        </div>
    )
}

export default LandingPage;