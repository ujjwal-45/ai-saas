'use client'

import { Card } from "@/components/ui/card"
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, Text, VideoIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

const tools = [
  {
    label: "Chat",
    icon: MessageSquare,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    href: "/chat"
  },
   {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-red-500",
        bgColor: "bg-red-500/10"
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music",
      color: "text-teal-500",
        bgColor: "bg-teal-500/10"
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
      color: "text-cyan-500",
        bgColor: "bg-cyan-400/10"
    },
    {
        label: "Text Summarizer",
        icon: Text,
        href: "/text",
      color: "text-blue-500",
        bgColor: "bg-blue-500/10"
    },
]

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the Limitles Power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Unleashing Innovation Through FusionX!
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card key={tool.href}
            onClick={() => router.push(tool.href)}
          className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />

          </Card>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage