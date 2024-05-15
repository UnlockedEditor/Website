import Image from "next/image"

export default function header() {
  return (
    <header className="px-4 py-3 text-black shadow-md flex items-center justify-between bg-gray-200 fixed inset-x-0 top-0 w-full">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Image 
          className="h-6 w-6"
          src="/logo.svg"
          alt="UEditor Logo"
          height="100"
          width="100"
          />
          <span className="font-medium">UEditor</span>
        </div>
      </div>
    </header>
  )
}
