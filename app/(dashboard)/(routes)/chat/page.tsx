'use client'

import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import Heading from "@/components/Heading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const ChatPage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });
   
    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <div>
            <Heading
                title="Chat"
                description="Intelligent AI chat for natural conversations."
                icon={MessageSquare}
                iconColor="text-indigo-500"
                bgColor="bg-indigo-500/10"
            />

            <div className="px-4 lg:px-8">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}
                        className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
                    >
                        <FormField
                            name="prompt"
                            render={({ field }) => (
                                <FormItem className="col-span-12 lg:col-span-10">
                                    <FormControl>
                                        <Input className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                            disabled={isLoading}
                                            placeholder="Will AI cause world destruction?"
                                            {...field}
                                        />
                                     </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button className="col-span-12 lg:col-span-2 w-full " disabled={isLoading}>
                            Generate
                        </Button>

                    </form>
              </Form>
            </div>
            <div className="space-y-4 mt-4">
                Messages content
            </div>
        </div>
    )
}

export default ChatPage;