import { cn } from "@/lib/utils"
import Image from 'next/image'
import authImage from '@/assets/img/auth.jpg'

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
  className?: string
}

export function AuthLayout({ children, title, subtitle, className }: AuthLayoutProps) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Form */}
      <div className="flex items-center justify-center p-8">
        <div className={cn("w-full max-w-sm space-y-6", className)}>
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-500 dark:text-gray-400">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
      
      {/* Right side - Image */}
      <div className="hidden lg:block relative overflow-hidden">
        <Image 
          src={authImage}
          alt="Authentication background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-30" />
      </div>
    </div>
  )
}


