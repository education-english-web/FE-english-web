'use client'

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff } from 'lucide-react'
import { FaGoogle, FaFacebook } from 'react-icons/fa'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { AuthLayout } from "./auth-layout"
import { login } from "@/services/user/login"


export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Enter your email to sign in to your account"
    >
        <form
          className="space-y-4"  action={(formData: FormData) => {
            const rawInput = formData.get("email") as string;
            const password = formData.get("password") as string;

            const loginData = {
              phonenumber: rawInput.includes("@") ? undefined : rawInput,
              email: rawInput.includes("@") ? rawInput : undefined,
              password,
            };

            console.log("🚀 ~ login ~ loginData:", loginData);

            login(loginData);
          }}
        >

        <div className="space-y-2">
          <Label htmlFor="email">Email or Phone Number</Label>
          <Input
            id="email"
            name="email"
            placeholder="example@example.com"
            type="email"
            required
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link
              href="/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Input
              id="password"
              name="password"
              placeholder="********"
              type={showPassword ? "text" : "password"}
              required
              className="w-full pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-gray-500" />
              ) : (
                <Eye className="h-4 w-4 text-gray-500" />
              )}
            </Button>
          </div>
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid gap-2">
        <Button variant="outline" className="w-full">
          <FaGoogle className="mr-2 h-4 w-4" />
          Google
        </Button>
        <Button variant="outline" className="w-full">
          <FaFacebook className="mr-2 h-4 w-4" />
          Facebook
        </Button>
      </div>

      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-primary hover:underline">
          Sign up
        </Link>
      </div>
    </AuthLayout>
  )
}

