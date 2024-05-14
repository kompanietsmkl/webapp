"use client";

import { Button } from "@/components/ui/button";

export const Heading = () =>{
    return(
        <div className="max-w-3xl space-y-4">
             <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your ideas, documents and plans are unified. Welcome to <span 
                className="underline">Flowi</span>
             </h1>
             <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Flowy is a cloud workspace where <br />
                your ideas become action.
             </h3>
             <Button>
                Get Flowi free
             </Button>
        </div>
    )

}