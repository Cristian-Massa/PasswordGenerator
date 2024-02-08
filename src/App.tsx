import GeneratedPass from "./components/generatedPass/genPass"
import History from "./components/history/history"
import Options from "./components/options/options"
import { storePassword } from "./store/zustand"

function App() {
  const state = storePassword(state => state.passwords)
  
  return (
    <div className="grid min-h-screen bg-gray-100 lg:grid-cols-[260px_1fr] dark:bg-gray-800">
      <div className="flex flex-col border-b lg:border-b-0 lg:border-r">
        <header className="flex items-center justify-between p-4 lg:p-6">
          <a className="flex items-center space-x-2 text-xl font-semibold" href="#">
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
              className="w-5 h-5"
            >
              <rect width={18} height={11} x={3} y={11} rx={2} ry={2} />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>Password Generator</span>
          </a>
        </header>
        <nav className="flex-1 overflow-y-auto py-4 lg:py-6">
          <div className="px-4 space-y-2">
            <a
              className="flex items-center p-2 text-sm font-semibold rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
              href="https://cristianmassa.vercel.app"
              target="_blank"
            >
              Portfolio
            </a>
            <a
              className="flex items-center p-2 text-sm font-semibold rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
              href="https://github.com/Cristian-Massa"
              target="_blank"
            >
              Github
            </a>
            <a
              className="flex items-center p-2 text-sm font-semibold rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
              href="https://www.linkedin.com/in/kris19920"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
        </nav>
      </div>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="mx-auto max-w-3xl space-y-4">
            <Options />
            <GeneratedPass pass={state[0]}/>
            <History history={state}/>
          </div>
        </main>
      </div>
    </div>

  )
}

export default App
