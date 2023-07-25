'use client'

import { Code, Text } from "lucide-react";
import ReactMarkdown from "react-markdown"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";

import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import Heading from "@/components/Heading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/Empty";
import { Loader } from "@/components/Loader";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/UserAvatar";
import { BotAvatar } from "@/components/BotAvatar";


const TextPage = () => {
    const router = useRouter();
    const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });
   
    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const userMessage: ChatCompletionRequestMessage = {
                role: "user",
                content: values.prompt,
            };
            const newMessages = [...messages, userMessage];

            const response = await axios.post("/api/text", {
                messages: newMessages,
            });

            setMessages((current) => [...current, userMessage, response.data]);

            form.reset();
        }
        catch (error: any) {
            // open pro model
            console.log(error);
        }
        finally {
            router.refresh();
        }
    }

    return (
        <div>
            <Heading
                title="Text Summarizer"
                description="AI summarizes texts efficiently."
                icon={Text}
                iconColor="text-blue-500"
                bgColor="bg-blue-400/10"
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
                                            placeholder="paste your text here"
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
                {isLoading && (
                    <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                        <Loader />
                    </div>
                )}
                {messages.length === 0 && !isLoading && (
                    <Empty label="No summary generated" />
                )}
                <div className="flex flex-col-reverse gap-y-4">
                    {messages.map((message) => (
                        <div key={message.content}
                            className={cn("p-8 w-full flex items-center gap-x-8 rounded-lg",
                            message.role === "user" ? "bg-white border border-black/10" : "bg-muted"
                            )}
                        >
                            {message.role === "user" ? <UserAvatar /> : <BotAvatar />} 
                            <p className="text-sm">
                                {message.content || ""}
                              
                            </p>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TextPage;