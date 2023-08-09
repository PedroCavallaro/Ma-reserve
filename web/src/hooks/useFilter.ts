import { useCallback, useEffect, useState } from "react";
import { api } from "../lib/api";
import { Gastronommy } from "@/@types/types";

export function useFilter() {
    const [gastronomies, setGastronomies] = useState<Gastronommy[]>();

    const handleGastronmy = useCallback(async () => {
        const res = await api.get("/gastronomy");
        setGastronomies(res.data);
    }, []);

    useEffect(() => {
        handleGastronmy();
    }, [handleGastronmy]);

    return {
        gastronomies,
    };
}
