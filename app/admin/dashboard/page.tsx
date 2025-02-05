"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminDashboard() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleUpload = () => {
    if (selectedFile) {
      // Here you would typically upload the file to your backend
      console.log("Uploading file:", selectedFile.name)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Upload Image</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <Input type="file" accept="image/*" onChange={handleFileChange} />
            <Button onClick={handleUpload} disabled={!selectedFile}>
              Upload
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Gallery Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Here you can manage your gallery images. (Functionality to be implemented)</p>
        </CardContent>
      </Card>
    </div>
  )
}

