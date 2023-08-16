export const routes = {
    HOME: "/",
    LOGIN: "/Login",
    REGISTER: "/Register",
    RESTAURANT: "/Restaurant/",
    MENU: "/Menu/",
    GASTRONOMYQUERY: "/Results/gastronomy/",
    TEXTQUERY: "/Results/",
} as const;

export const serverRoutes = {
    RESTAURANTS: "/restaurants",
    ONERESTAURANT: (id: string) => `/restaurant/${id}`,
};
export const FoodTypes = ["Pratos", "Bebidas", "Sobremesa"] as const;
