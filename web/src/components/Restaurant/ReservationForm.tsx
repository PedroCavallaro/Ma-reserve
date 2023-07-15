import {z} from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { Input } from "../Input"
import Button from "../Button"
import { ReactNode } from "react"

const schema = z.object({
    date: z.coerce.date({

    }),
    guests: z.coerce.number({
        invalid_type_error: "Apenas numeros"
    }).min(1, {
        message: "teste"
    })
})
type FormData = z.infer<typeof schema>
export function ReservationForm({children} : {children: ReactNode}) {
    const {
        handleSubmit,
        register,
        formState: {errors}
    } = useForm<FormData>({
        mode: "onBlur",
        resolver: zodResolver(schema)
    })

  
    return(
        <form className="p-1 flex flex-col gap-3 ">
            <section className="flex gap-2">
                {children}
            <div className="flex flex-col p-1 shadow">
            <p className="text-orange-orangePrimary">Reservar</p>
                <div className="flex gap-2 ">
                    <label htmlFor=""
                    >
                        <p className="text-sm text-orange-orangePrimary">Data da reserva</p>
                        <Input type="date" className="text-sm "/>
                    </label>
                    <label htmlFor=""
                    className="text-sm">
                        <p className="text-sm text-orange-orangePrimary">Lugares</p>
                        <Input type="text" maxLength={2} 
                        {...register("guests")}
                        placeholder="2"
                        className={`text-sm p-1 w-7 border-2 rounded-sm ${ errors.guests ? "border-red-500" : "border-orange-orangePrimary"}`}/>
                   
                    </label>    
                </div>
                    <label htmlFor="">
                        <p className="text-sm text-orange-orangePrimary">Horário de chegada</p>
                        <Input type="text" 
                        maxLength={5}
                        placeholder="19:30"
                        className="w-24 border-2 p-1 rounded-sm border-orange-orangePrimary" />
                    </label>
                </div>       
                </section>
                <div className=" left-0  flex justify-center items-center bottom-2 z-50">
                    <Button type="submit" 
                    className="w-[90%] text-md"
                    title="Reservar" />
                </div>
            </form>
    )
};
