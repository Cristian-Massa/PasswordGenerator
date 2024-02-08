import { useEffect, useState } from "react"
type Pass ={
  pass: string
}

export default function GeneratedPass({pass}: Pass){
  const [copied, setCopied] = useState(false)
  function copy(){
   if(pass){
    setCopied(true)
    const password = pass
      navigator.clipboard.writeText(password)
   }
  }
  useEffect(()=>{
    if(copied){
      setTimeout(()=>{
        setCopied(false)
      }, 3000)
    }
  }, [copied])
    return(
        <div className="border p-4 rounded-md flex items-center space-x-2 text-lg">
          {pass ? <div className="font-mono">{pass}</div> : <div>Create a Password!</div>}
          <button onClick={copy} className="active:bg-gray-500 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <rect width={8} height={4} x={8} y={2} rx={1} ry={1} />
              <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
              <path d="M16 4h2a2 2 0 0 1 2 2v4" />
              <path d="M21 14H11" />
              <path d="m15 10-4 4 4 4" />
            </svg>
          </button>
            <p className={`${copied ? "opacity-100" : "opacity-0 cursor-default" } transition-all duration-20`} >Copied to clipboard</p>
        </div>
    )
}