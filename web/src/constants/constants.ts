export const routes = {
    HOME: "/",
    LOGIN: "/Login",
    REGISTER: "/Register",
    RESTAURANT: "/Restaurant/",
    MENU: "Menu/",
} as const;

export const serverRoutes = {
    RESTAURANTS: "/restaurants",
    ONERESTAURANT: (id: string) => `/restaurant/${id}`,
};
export const FoodTypes = ["Pratos", "Sobremesa", "Bebidas"] as const;
