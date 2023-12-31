import Heading from "@/components/Heading";
import { SettingsIcon } from "lucide-react";

const SettingsPage = () => {
    return (
        <div>
            <Heading
                title="Settings"
                description="Manage account settings"
                icon={SettingsIcon}
                iconColor="text-gray-800"
                bgColor="bg-gray-700/10"
            />

            <div className="px-4 lg:px-8 space-y-4">
                <div className="text-muted-foreground text-sm">
                    You are currently on free plan.

                </div>
                
            </div>

        </div>
    )
}

export default SettingsPage;