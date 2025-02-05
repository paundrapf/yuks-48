import type { ReactNode } from "react"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">YUKS48 Admin Panel</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}

