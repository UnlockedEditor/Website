import Link from "next/link"
import Image from "next/image"
import { JSX, SVGProps } from "react"


export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white dark:bg-black">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <div>
          <div className="dark:hidden block">
            <Link href="#" className="flex items-center" prefetch={false}>
              <Image className="h-6 w-6 mr-2" 
              src="./UEditor Logo Black.svg"
              alt="UEditor Logo"
              width={500}
              height={500}
              />
              <span className="sr-only">UEditor</span>
            </Link>
          </div>
          <div className="hidden dark:block">
            <Link href="#" className="flex items-center" prefetch={false}>
              <Image className="h-6 w-6 mr-2" 
              src="./UEditor Logo White.svg"
              alt="UEditor Logo"
              width={500}
              height={500}
              />
              <span className="sr-only">UEditor</span>
            </Link>
          </div>
        </div>     
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            href="https://id.ueditor.lol"
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
            prefetch={false}
          >
            <UserIcon className="h-4 w-4 mr-2" />
            Account
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
            prefetch={false}
          >
            <DownloadIcon className="h-4 w-4 mr-2" />
            Download
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
            prefetch={false}
          >
            <ShoppingBagIcon className="h-4 w-4 mr-2" />
            Store
          </Link>
          <Link
            href="https://dev.ueditor.lol"
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
            prefetch={false}
          >
            <CodeIcon className="h-4 w-4 mr-2" />
            Developers
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-24 lg:py-32 space-y-6">
        <div className="max-w-3xl text-left space-y-4 self-start">
          <h1 className="font-bold tracking-tighter text-6xl">
            Mods
          </h1>
          <h1 className="font-bold pt-2 tracking-tighter text-7xl">
            Done
          </h1>
          <h1 className="font-bold pt-2 tracking-tighter text-8xl">
            Right
          </h1>
          <p className="text-muted-foreground md:text-xl">
            A one click modding solution for all <strong>Unreal Engine</strong> games.
          </p>
        </div>
        <div className="flex flex-col self-start gap-2 min-[400px]:flex-row">
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center bg-black dark:bg-white text-white dark:text-black rounded-md bg-primary px-8 text-sm font-medium shadow transition-colors"
            prefetch={false}
          >
            <DownloadIcon className="h-4 w-4 mr-2" />
            Download
          </Link>
          {/*<Link
            href="#"
            className="inline-flex h-10 items-center justify-center dark:bg-black bg-white dark:text-white text-black rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <InfoIcon className="h-4 w-4 mr-2" />
            Learn More
          </Link>*/}
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 UEditor LLC. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="https://ueditor.notion.site/Terms-and-Conditions-03697fd79b2a4fd4a4b3921336afbe1d" target="_blank" className="text-xs hover:underline underline-offset-4 flex items-center" prefetch={false}>
            <FileTextIcon className="h-4 w-4 mr-2" />
            Terms of Service
          </Link>
          <Link href="https://ueditor.notion.site/Privacy-Policy-fcdcf68d04b4477b82f0ffafb35b766e" target="_blank" className="text-xs hover:underline underline-offset-4 flex items-center" prefetch={false}>
            <LockIcon className="h-4 w-4 mr-2" />
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function DownloadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


function FileTextIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}


function InfoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function LockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PlayIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}


function ShoppingBagIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}


function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}