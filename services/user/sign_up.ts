'use client'

import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export async function signUp(body: {
    username: string;
    email: string;
    password: string;
    phonenumber: string;
}) {
    try {
        const response = await axios.post(`${API_BASE_URL}/users/sign-up`, body, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status !== 200) {
            throw new Error("Sign up failed");
        }

        const data = response.data;

        localStorage.setItem('userData', JSON.stringify(data));

        console.log("🚀 ~ signUp ~ data:", data);
        return {success: true, data};
    } catch (error) {
        console.error("Sign up error:", error);
        return {success: false, error: (error as Error).message};
    }
}