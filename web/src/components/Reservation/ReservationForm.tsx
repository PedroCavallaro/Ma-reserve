import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../Button";

const schema = z.object({
    name: z.string().min(4, "O nome deve ser maior"),
    phone: z.string().min(11).max(11),
    guests: z.number().min(1),
    day: z.coerce.date(),
    time: z.string().max(5),
});
type FormData = z.infer<typeof schema>;
export default function ReservationForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        mode: "onBlur",
        resolver: zodResolver(schema),
    });
    return (
        <div className="px-2">
            <form className="flex flex-col gap-4 overflow-x-hidden">
                <div className="flex flex-col">
                    <Input
                        label="Nome"
                        {...register("name")}
                        errors={errors.name?.message}
                        placeholder="Seu nome"
                        className="w-full"
                    />
                </div>
                <div className="flex gap-4">
                    <div className="flex flex-col">
                        <Input
                            label="Telefone"
                            {...register("phone")}
                            placeholder="(11) 99999-9999"
                        />
                    </div>
                    <div>
                        <Input
                            type="number"
                            label="Lugares"
                            {...register("guests")}
                            className="w-full px-2 "
                            placeholder="2"
                        />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex flex-col">
                        <Input
                            label="Data da reserva"
                            {...register("day")}
                            type="date"
                            className="w-[14rem]"
                        />
                    </div>
                    <div>
                        <Input
                            label="Horário"
                            {...register("time")}
                            maxLength={5}
                            className="px-2"
                            placeholder="19:30"
                        />
                    </div>
                </div>
                <Button>
                    <p>Reservar</p>
                </Button>
            </form>
        </div>
    );
}
