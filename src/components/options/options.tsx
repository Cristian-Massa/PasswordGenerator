import { useState } from "react"
import Generate from "./generate/generate"
import { storePassword } from "../../store/zustand"
interface Options {
  Length: number,
  Uppercase: boolean,
  Lowercase: boolean,
  Numbers: boolean,
  Symbols: boolean
}

export default function Options() {
  const setState = storePassword(state => state.setPasswords)
  const [options, setOptions] = useState<Options>({
    Length: 12,
    Uppercase: false,
    Lowercase: false,
    Numbers: false,
    Symbols: false
  })

  function changeOption(event: React.FormEvent<HTMLInputElement>) {
    const { checked, value, id } = event.target as HTMLInputElement;
    if (id === 'Length') {
      Number(value) === 0 ?
        setOptions({
          ...options,
          [id]: 12
        }) :
        Number(value) > 15 ?
        
        setOptions({
          ...options,
          [id]: Number(15)
        }):
        
        setOptions({
          ...options,
          [id]: Number(value)
        })
    } else {
      setOptions({
        ...options,
        [id]: checked
      })
    }
  }
  function create(){
    const pass = Generate(options);
    if(pass){
      setState(pass)
    }
  }
  return (
    <div className="space-y-2">
      <div className="space-y-2">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="Length"
        >
          Length
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="Length"
          min={1}
          type="number"
          onChange={changeOption}
          defaultValue={12}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Include
        </label>
        <div className="space-x-2">
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="Uppercase" onChange={changeOption} />
            <label
              className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm"
              htmlFor="Uppercase"
            >
              Uppercase
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="Lowercase" onChange={changeOption} />
            <label
              className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm"
              htmlFor="Lowercase"
            >
              Lowercase
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="Numbers" onChange={changeOption} />
            <label
              className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm"
              htmlFor="Numbers"
            >
              Numbers
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="Symbols" onChange={changeOption} />
            <label
              className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm"
              htmlFor="Symbols"
            >
              Symbols
            </label>
          </div>
        </div>
      </div>
      <button onClick={create} className="hover:bg-black hover:text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
        Generate Password
      </button>
    </div>
  )
}