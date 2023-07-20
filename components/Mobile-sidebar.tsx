'use client'

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

const MobileSidebar = () => {
    const [IsMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!IsMounted) {
        return null;
    }

  return (
      <Sheet>
          <SheetTrigger>
              <Button variant="ghost" size="icon" className="md:hidden" >
                  <Menu />
                  </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
              <Sidebar />
          </SheetContent>
           
          
          </Sheet>
  )
}

export default MobileSidebar;