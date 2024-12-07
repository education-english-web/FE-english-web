'use client'

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FaGoogle, FaFacebook } from 'react-icons/fa'

import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Separator } from "@/src/components/ui/separator"
import { AuthLayout } from "./auth-layout"
import { signUp } from "@/src/services/user/sign_up"
import { Popup } from "@/src/components/Popup"

export function SignupForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState({
        email: "",
        phonenumber: "",
        password: "",
    })
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [popupMessage, setPopupMessage] = useState("")
    const router = useRouter()

    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhoneNumber = (phonenumber: string) => /^\d{10,}$/.test(phonenumber);
    const validatePassword = (password: string) =>
        /^(?=.*[A-Z])(?=.*[@!#$%^&*])[A-Za-z\d@!#$%^&*]{8,}$/.test(password);

    const handleInputChange = (field: string, value: string) => {
        setErrors((prev) => ({
            ...prev,
            [field]: "",
        }));

        if (field === "email" && !validateEmail(value)) {
            setErrors((prev) => ({
                ...prev,
                email: "Invalid email. Please include an '@' and a valid domain.",
            }));
        } else if (field === "phonenumber" && !validatePhoneNumber(value)) {
            setErrors((prev) => ({
                ...prev,
                phonenumber: "Phone number must have at least 10 digits.",
            }));
        } else if (field === "password" && !validatePassword(value)) {
            setErrors((prev) => ({
                ...prev,
                password: "Password must be at least 8 characters long, include at least one uppercase letter and one special character.",
            }));
        }
    };

    return (
        <AuthLayout
            title="Create an account"
            subtitle="Enter your information to get started"
        >
            <form
                className="space-y-4"
                onSubmit={async (event) => {
                    event.preventDefault()

                    const formData = new FormData(event.currentTarget)
                    const userData = {
                        username: formData.get('username') as string,
                        email: formData.get('email') as string,
                        password: formData.get('password') as string,
                        phonenumber: formData.get('phonenumber') as string,
                    }

                    if (Object.values(errors).some((error) => error)) {
                        console.error("Fix validation errors before submitting.")
                        return;
                    }

                    const response = await signUp(userData)

                    if (response.success) {
                        console.log('Sign up successful')
                        setPopupMessage("You have signed up successfully.")
                        setIsPopupOpen(true)
                        setTimeout(() => {
                            router.push('/login')
                        }, 1000)
                    } else {
                        console.error('Sign up failed:', response.error)
                        setPopupMessage("Sign up failed. Please try again.")
                        setIsPopupOpen(true)
                    }
                }}
            >
                <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        placeholder="example@example.com"
                        type="email"
                        required
                        onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                        <Input
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            type={showPassword ? "text" : "password"}
                            required
                            className="pr-10"
                            onChange={(e) => handleInputChange("password", e.target.value)}
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <EyeOff className="h-4 w-4 text-gray-500"/>
                            ) : (
                                <Eye className="h-4 w-4 text-gray-500"/>
                            )}
                        </Button>
                    </div>
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phonenumber">Phone Number</Label>
                    <Input
                        id="phonenumber"
                        name="phonenumber"
                        placeholder="0123456789"
                        type="tel"
                        required
                        onChange={(e) => handleInputChange("phonenumber", e.target.value)}
                    />
                    {errors.phonenumber && <p className="text-red-500 text-sm">{errors.phonenumber}</p>}
                </div>
                <Button type="submit" className="w-full">
                    Create Account
                </Button>
            </form>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full"/>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>

            <div className="grid gap-2">
                <Button variant="outline" className="w-full">
                    <FaGoogle className="mr-2 h-4 w-4"/>
                    Google
                </Button>
                <Button variant="outline" className="w-full">
                    <FaFacebook className="mr-2 h-4 w-4"/>
                    Facebook
                </Button>
            </div>

            <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline">
                    Sign in
                </Link>
            </div>
            <Popup
                message={popupMessage}
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)} subMessage={""}/>
        </AuthLayout>
    )
}
