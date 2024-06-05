'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CardContent, Card } from "@/components/ui/card"
import Image from "next/image"
import { JSX, SVGProps } from "react"
import Profile from "@/components/ui/profile"
import { useState } from "react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays } from "lucide-react"


export default function Plugins() {
  const plugins = [
    { title: 'Test', imageAlt: 'ABZÛ', imageUrl: '/fortnite.png', username: 'veygax', isPremium: false },

  ];
  const [selectedFile, setSelectedFile] = useState(null);
  function handleFileUpload(event: any) {
    setSelectedFile(event.target.files[0]);
  }


  return (
    <div className="bg-white min-h-screen p-4 md:p-8">
      <header className="flex items-center justify-between mb-8 md:mb-12">
        <div className="flex items-center space-x-2 md:space-x-4">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Plugins</h1>
        </div>
        <div className="flex items-center space-x-4 md:space-x-6">
          <input type="file" id="fileUpload" style={{display: 'none'}} onChange={handleFileUpload}/>
          <Button className="text-gray-900 text-sm md:text-base flex items-center space-x-2" variant="ghost" onClick={() => {
            const uploadButton = document.getElementById('fileUpload');
            if (uploadButton) {
              uploadButton.click();
            }
          }}>
            <UploadIcon className="h-5 w-5 md:h-6 md:w-6"/>
            <span>Upload</span>
          </Button>
          <Profile/>
        </div>
      </header>
      <div className="flex items-center space-x-2 md:space-x-4 mb-6 md:mb-8">
        <Input className="flex-1 bg-gray-200 rounded text-black" placeholder="Game Title"/>
        <Button className="text-gray-900 text-sm md:text-base" variant="ghost">
          Free
        </Button>
        <Button className="text-gray-900 text-sm md:text-base" variant="ghost">
          Premium
        </Button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 min-w-screen">
        {plugins.map((plugin, index) => (
            <PluginCard key={index} {...plugin} />
        ))}
      </div>
    </div>
  )
}

function PluginCard({title, imageAlt, imageUrl, isPremium, username /*downloadUrl*/}: {
  title: string;
  imageAlt: string;
  imageUrl: string;
  isPremium: boolean;
  username: string;
  /*downloadUrl: string;*/
}) {
  return (
      <Card className="bg-white rounded shadow-md">
        <CardContent className="p-0">
          <Image
              alt={imageAlt}
              className="rounded-t-md w-full object-cover"
              height="200"
              src={imageUrl}
              style={{
                aspectRatio: "350/200",
                objectFit: "cover",
              }}
              width="350"
          />
          <div className="p-3 md:p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-900 text-base md:text-lg font-bold">{title}</h3>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button className="text-gray-900 dark:text-gray-900" variant="link">@{username}</Button>
                </HoverCardTrigger>
                <HoverCardContent className="rounded w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/veygax.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{username}</h4>
                      <p className="text-sm">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        I am a plugin dev. Yep, that's me.
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                        Joined December 1996
                      </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            <div className="flex items-center justify-between mt-2">
              <Badge variant='secondary' className={`text-xs md:text-sm ${isPremium ? 'bg-green-500 text-white dark:bg-green-500': 'bg-black text-white'}`}>
                {isPremium && <DollarSignIcon className="mr-1 h-4 w-4" />}
                {isPremium ? 'Premium' : 'Free'}
              </Badge>
              <Button
                  variant="default"
              >
                Install
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
  );
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
