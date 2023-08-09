export const routes = {
    HOME: "/",
    LOGIN: "/Login",
    REGISTER: "/Register",
    RESTAURANT: "/Restaurant/",
    MENU: "/Restaurant/Menu/",
} as const;

export const gastronomiesSaved = [
    {
        name: "Brasileira",
    },
];

export const serverRoutes = {
    RESTAURANTS: "/restaurants",
    ONERESTAURANT: (id: string) => `/restaurant/${id}`,
};
