import {z} from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { Input } from "../Input"

const schema = z.object({

})
type FormData = z.infer<typeof schema>
export function ReservationForm() {
    const {
        handleSubmit,
        register,
        formState: {errors}
    } = useForm<FormData>()

   
    return(
        <section className="w-[100%] flex flex-col top-0 gap-2">           
            <p className="text-orange-orangePrimary">Reservar</p>
            <form className="shadow p-1 h-[100%] flex flex-col gap-3 ">
                <div className="flex gap-2">
                    <label htmlFor=""
                    >
                        <p className="text-sm text-orange-orangePrimary">Data da reserva</p>
                        <Input type="date" className="text-sm "/>
                    </label>
                    <label htmlFor=""
                    className="text-sm">
                        <p className="text-sm text-orange-orangePrimary">Lugares</p>
                        <Input type="text" maxLength={2} 
                        placeholder="2"
                        className="text-sm p-1 w-7 border-2 rounded-sm border-orange-orangePrimary"/>
                    </label>
                </div>
                <label htmlFor="">
                    <p className="text-sm text-orange-orangePrimary">Horário de chegada</p>
                    <Input type="text" 
                    placeholder="19:30"
                    className="w-24 border-2 p-1 rounded-sm border-orange-orangePrimary" />
                </label>
         
            </form>
        </section>
    )
};
