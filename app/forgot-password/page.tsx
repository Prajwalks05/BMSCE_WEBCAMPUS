"use client"

import { ForgotPasswordForm } from "@/components/auth/forgot-password-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ForgotPasswordPage() {
  const handleWebsiteClick = () => {
    window.open("https://www.bmsce.ac.in", "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23E2E8F0' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Header - Dark Blue Background */}
      <header className="relative z-10 w-full px-6 py-5 bg-blue-900 shadow-lg">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="bg-white text-blue-900 p-2.5 rounded-xl shadow-md">
              <GraduationCap className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">BMSCE CAMPUS</h1>
              <p className="text-sm text-blue-100 font-medium">Student Portal</p>
            </div>
          </div>
          <Button
            onClick={handleWebsiteClick}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent font-semibold px-8 py-2 transition-all duration-200"
          >
            WEBSITE
          </Button>
        </div>
      </header>

      {/* Main Content - White Background */}
      <div className="relative flex min-h-[calc(100vh-88px)] bg-white">
        {/* Left Side - White Background */}
        <div className="hidden lg:flex lg:w-3/5 flex-col justify-center items-center px-12 xl:px-16 bg-white relative overflow-hidden">
          {/* Very Subtle Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 rounded-full -translate-y-48 translate-x-48 opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-50 rounded-full translate-y-32 -translate-x-32 opacity-20"></div>

          <div className="relative z-10 max-w-xl text-center">
            {/* Clean White Illustration */}
            <div className="mb-12">
              <div className="relative w-full max-w-md mx-auto">
                <Image
                  src="/images/clean-white-illustration.png"
                  alt="Student working on campus portal"
                  width={400}
                  height={320}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl font-bold mb-4 leading-tight text-slate-900">
              Password Recovery
              <span className="block text-xl font-normal text-slate-600 mt-2">Reset Your Campus Portal Access</span>
            </h2>

            <p className="text-base text-slate-700 mb-8 leading-relaxed max-w-md mx-auto">
              Enter your USN to receive password reset instructions via your registered email address.
            </p>

            {/* Institution Info */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Autonomous Institution Affiliated to VTU
                <br />
                NAAC {"'A+'"} Grade | NBA Accredited
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - White Background */}
        <div className="flex-1 lg:w-2/5 flex items-center justify-center px-8 sm:px-12 lg:px-16 bg-white">
          <div className="w-full max-w-md">
            {/* Mobile Header */}
            <div className="lg:hidden text-center mb-8">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="bg-blue-900 text-white p-3 rounded-xl shadow-lg">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <div className="ml-3">
                  <h1 className="text-2xl font-bold text-slate-900">BMSCE</h1>
                  <p className="text-slate-600 text-sm">Campus Portal</p>
                </div>
              </div>
            </div>

            {/* Back to Sign In Link */}
            <div className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Sign In
              </Link>
            </div>

            {/* Forgot Password Card - Dark Blue Background */}
            <Card className="bg-blue-900 border border-blue-800 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Reset Password</h2>
                  <p className="text-blue-100">Enter your USN to reset your password</p>
                </div>
                <ForgotPasswordForm />
              </CardContent>
            </Card>

            {/* Footer - White Background */}
            <div className="mt-8 text-center bg-white">
              <p className="text-sm text-slate-700 font-medium">Protected by institutional security protocols</p>
              <p className="text-xs text-slate-500 mt-2">
                &copy; 2025 B.M.S. College of Engineering. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
