"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value.trim(); 
    
        if (keyword && (event.key === "Enter" || event.type === "click")) {
            event.preventDefault();
            router.push(`/search/${keyword}`);
        } else {
            
        }
    }
    

    return (
        <div className={"relative"}>
            <input 
                placeholder="cari film..." 
                className="w-full p-2 rounded" 
                ref={searchRef}
                onKeyDown={handleSearch}
                />
            <button className="absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}

export default InputSearch