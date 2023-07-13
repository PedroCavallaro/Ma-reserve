import { Input } from "../Input";
import { Search } from 'lucide-react';

export default function SearchArea() {
    return(
        <div className="flex group flex-col container mx-auto min-h-[100px] lg:min-h-[150px] mt-5 items-center justify-center p-2 relative">
            <h1 className="text-lg">Onde será a reserva de hoje?</h1>
            <div className="flex ">
                <Input type="text" name="search"
                className="border-t-2 border-l-2 border-b-2 rounded-tl-2xl rounded-bl-2xl lg:w-[25rem] outline-orange-orangePrimary pl-1" />
                <button className="flex w-14 lg:w-auto justify-center items-center gap-2 bg-orange-orangePrimary rounded-br-2xl rounded-tr-2xl p-1
                transition-all hover:bg-orange-500" >
                    <Search color="#ffff" />
                    <p className="lg:flex hidden text-white">Buscar</p>
                </button>
            </div>
        </div>
    )
};
