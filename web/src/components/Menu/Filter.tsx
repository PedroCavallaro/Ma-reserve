import { SetStateAction } from "react";
import { Button } from "../Button";
import { FoodTypes } from "@/constants/constants";

interface FilterProps {
    filtering: (type: string) => void;
    actualType: string;
}

export default function Filter({ filtering, actualType }: FilterProps) {
    return (
        <>
            {FoodTypes?.map((description, index) => {
                return (
                    <Button
                        className="bg-white flex flex-col"
                        onClick={() => filtering(description)}
                        key={index.toString()}
                    >
                        <p
                            className={`${
                                actualType === description
                                    ? "text-orange-400"
                                    : "text-black"
                            } `}
                        >
                            {description}
                        </p>
                        {actualType === description ? (
                            <span className="w-full h-1 bg-orange-400"></span>
                        ) : (
                            ""
                        )}
                    </Button>
                );
            })}
        </>
    );
}
