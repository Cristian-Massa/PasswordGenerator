type Info = {
    history: string[]
}

export default function History({history}: Info) {
    
    return (
        <div className="mt-4">
            <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
            >
                <div className="flex flex-col space-y-1.5 p-4">
                    <h3 className="font-semibold whitespace-nowrap tracking-tight text-sm">
                        History
                    </h3>
                </div>
                {history ?
                    history.map((element: string, key = 0) => {
                        return (
                            <div key={key++} className="flex items-center justify-between p-2">
                                <div className="text-sm">{element}</div>
                            </div>
                        )
                    })
                    :
                    null
                }
            </div>
        </div>
    )
}