import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react"
import { createContext, useContext, useState } from "react"
import fleche from "../src/assets/fleche.png"
import memkin from "../src/assets/memkin.png"
import { Link } from "react-router-dom"

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true)

    return (
        <>
        <div className="flex min-h-screen">
            <aside>
                <nav className="h-full flex flex-col bg-black border-r shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center h-20">
                         <img src={memkin} className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} />
                        <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-orange-100 hover:bg-red-200">
                            {expanded ? <ChevronFirst /> : <ChevronLast />}
                        </button>
                    </div>

                    <SidebarContext.Provider value={{ expanded }}>

                        <ul className="flex-1 px-3">{children}</ul>

                    </SidebarContext.Provider>

                    <div className="border-t flex p-3">
                        <img src={fleche} className="w-10 h-10 bg-orange-100 rounded-md" />
                        <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `}>
                            <div className="leading-4">
                                <h4 className="font-semibold">Memkin</h4>
                                <span className="text-xs text-red-200"><a href="https://github.com/ph8zgvy5w5-oss/mem-kin-client" title="Github">Github</a></span>
                            </div>
                            <MoreVertical size={20} />
                        </div>
                    </div>
                </nav>
            </aside>
           
         </div>
        </>
    )
}

export function SidebarItem({ icon, text, active, alert, to="#" }) {
    const { expanded } = useContext(SidebarContext)
    return (
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-lime-50 from-orange-100 to-red-200 text-grey-100" : "hover:bg-stone-500 text-orange-100"}`}>
        <Link to={to} className="flex items-center w-full ">
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
            </Link>
            {alert && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-red-200 ${expanded ? "" : "top-2"}`}>

                </div>
            )}

            {!expanded && (
                <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-lime-50 text-orange-100 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {text}
                </div>
            )}
        </li> 
    
    )
}



