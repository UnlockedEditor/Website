/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/dm4mW6sVvex
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CardContent, Card } from "@/components/ui/card"
import Image from "next/image"
import { JSX, SVGProps } from "react"

export default function Plugins() {
  return (
    <div className="bg-white min-h-screen p-4 md:p-8">
      <header className="flex items-center justify-between mb-8 md:mb-12">
        <div className="flex items-center space-x-2 md:space-x-4">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Plugins</h1>
        </div>
        <div className="flex items-center space-x-4 md:space-x-6">
          <Button className="text-gray-900 text-sm md:text-base flex items-center space-x-2" variant="ghost">
            <UploadIcon className="h-5 w-5 md:h-6 md:w-6" />
            <span>Upload</span>
          </Button>
        </div>
      </header>
      <div className="flex items-center space-x-2 md:space-x-4 mb-6 md:mb-8">
        <Input className="flex-1" placeholder="Game Title" />
        <Button className="text-gray-900 text-sm md:text-base" variant="ghost">
          Free
        </Button>
        <Button className="text-gray-900 text-sm md:text-base" variant="ghost">
          Premium
        </Button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8">
        <Card className="bg-white shadow-md">
          <CardContent className="p-0">
            <Image
              alt="ABZÛ"
              className="rounded-t-md w-full object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "350/200",
                objectFit: "cover",
              }}
              width="350"
            />
            <div className="p-3 md:p-4">
              <h3 className="text-gray-900 text-base md:text-lg font-bold">ABZÛ</h3>
              <div className="flex items-center justify-between mt-2">
                <Badge className="text-xs md:text-sm" variant="default">
                  Free
                </Badge>
                <Button
                  className="text-sm md:text-base bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  variant="link"
                >
                  Install
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardContent className="p-0">
            <Image
              alt="Ad Infinitum"
              className="rounded-t-md w-full object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "350/200",
                objectFit: "cover",
              }}
              width="350"
            />
            <div className="p-3 md:p-4">
              <h3 className="text-gray-900 text-base md:text-lg font-bold">Ad Infinitum</h3>
              <div className="flex items-center justify-between mt-2">
                <Badge className="text-xs md:text-sm bg-green-500 text-white" variant="secondary">
                  <DollarSignIcon className="mr-2 h-4 w-4" />
                  Premium
                </Badge>
                <Button
                  className="text-sm md:text-base bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  variant="link"
                >
                  Install
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardContent className="p-0">
            <Image
              alt="ADACA"
              className="rounded-t-md w-full object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "350/200",
                objectFit: "cover",
              }}
              width="350"
            />
            <div className="p-3 md:p-4">
              <h3 className="text-gray-900 text-base md:text-lg font-bold">ADACA</h3>
              <div className="flex items-center justify-between mt-2">
                <Badge className="text-xs md:text-sm bg-green-500 text-white" variant="secondary">
                  <DollarSignIcon className="mr-2 h-4 w-4" />
                  Premium
                </Badge>
                <Button
                  className="text-sm md:text-base bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  variant="link"
                >
                  Install
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md">
          <CardContent className="p-0">
            <Image
              alt="ABZÛ"
              className="rounded-t-md w-full object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "350/200",
                objectFit: "cover",
              }}
              width="350"
            />
            <div className="p-3 md:p-4">
              <h3 className="text-gray-900 text-base md:text-lg font-bold">ABZÛ</h3>
              <div className="flex items-center justify-between mt-2">
                <Badge className="text-xs md:text-sm" variant="default">
                  Free
                </Badge>
                <Button
                  className="text-sm md:text-base bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  variant="link"
                >
                  Install
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function DollarSignIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function UploadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}