'use client'

import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export async function login(body: {
    phonenumber?: string;
    email?: string;
    password: string;
}) {
    console.log("🚀 ~ login ~ body:", body);
    try {
        const response = await axios.post(`${API_BASE_URL}/users/login`, body, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });

        if (response.status !== 200) {
            throw new Error("Login failed");
        }

        console.log("🚀 ~ login ~ response.status:", response.status);

        const data = response.data;

        localStorage.setItem('userData', JSON.stringify(data));

        console.log("🚀 ~ login ~ data:", data);
        return {success: true, data};
    } catch (error) {
        console.error("Login error:", error);
        return {success: false, error: (error as Error).message};
    }
}
