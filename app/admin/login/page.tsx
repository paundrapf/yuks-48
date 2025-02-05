"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AdminLogin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === "yuks48admin" && password === "yuks48pass") {
      router.push("/admin/dashboard")
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <div className="flex items-center justify-between p-4 bg-gray-800">
        <Link href="/" className="text-white hover:text-gray-300">
          ← Back to Website
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Admin Login</h2>
          <div className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full">
              Log In
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

