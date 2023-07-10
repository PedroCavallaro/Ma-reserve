import { Input } from "./Input";
import { Search } from 'lucide-react';

export default function Hero() {
    return(
        <div className="flex flex-col container mx-auto bg-gray-50 items-center justify-center p-2">
            <h1>Procure um restaurante!</h1>
            <div className="flex">
                <Input type="text" name="search" />
                <button className="flex gap-2">
                    <Search/>
                    <p className="lg:flex hidden">Procurar</p>
                </button>
            </div>
        </div>
    )
};
