"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("56f08f6a-9d8f-4179-9e7f-6969934a2914")
    }, []);

    return null;
}