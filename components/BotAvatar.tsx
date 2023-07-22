import { Avatar, AvatarImage } from "./ui/avatar"

export const BotAvatar = () => {
    return (
        <div>
            <Avatar className="h-8 w-8">
                <AvatarImage className="p-1" src="/logoX.jpg" />
            </Avatar>
        </div>
    )
}