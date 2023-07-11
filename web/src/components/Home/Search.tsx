import Image from "next/image";
import { Input } from "../Input";
import { Search } from 'lucide-react';

export default function SearchArea() {
    return(
        <div className="flex flex-col container mx-auto bg-gray-50 items-center justify-center p-2 relative">
          
            <h1>Onde será a reserva de hoje?</h1>
            <div className="flex">
                <Input type="text" name="search" />
                <button className="flex gap-2">
                    <Search/>
                    <p className="lg:flex hidden">Buscar</p>
                </button>
            </div>
        </div>
    )
};
