import Image from "next/image"

export const Loader = () => {
    return (
     <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="w-10 h-10 relative animate-spin">
                <Image alt="logo" fill src="/loader.png" />
                
            </div>
            <p className="tetx-sm text-muted-foreground">
                FusionX is thinking....
            </p>
     </div>
    
    )
    
}