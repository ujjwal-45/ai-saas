import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export const LandingContent = () => {
   
    const testimonials = [
        {
            name: "Srisanth",
            avatar: "SN",
            title: "Web Designer",
            description: "This web app is the secret sauce to my productivity. It's like having a personal assistant that anticipates my needs. From generating images to simplifying texts, it's an invaluable asset in my toolkit."
        },
         {
            name: "Dipan",
            avatar: "DM",
            title: "Student",
            description: "I can't believe how much time I've saved since using this web app. It's a lifesaver."
        },
          {
            name: "Antoly",
            avatar: "SN",
            title: "Student",
            description: "This web app is a total game-changer! It's like having an entire team of experts at my disposal."
        },
           {
            name: "Rocky",
            avatar: "SN",
            title: "Web Developer",
            description: "I was skeptical at first, but this web app has won me over completely. It has saved me countless hours and improved my workflow significantly."
        },
    ]


    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-semibold mb-10 ">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white"  >
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                     <p className="text-sm text-zinc-400 font-light">{item.title}</p>

                                </div>
                                

                            </CardTitle>

                            <CardContent>
                                
                                <div className="text-sm px-0 pt-4">
                                    {item.description}
                                </div>
                            </CardContent>
                        </CardHeader>

                    </Card>
                ))}

            </div>

        </div>
    )
}