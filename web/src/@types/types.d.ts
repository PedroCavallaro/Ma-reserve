export type SignInData = {
    email: string;
    password: string;
};
export type RegisterData = {
    name: string;
    email: string;
    password: string;
};

export type Gastronommy = {
    description: true;
};
export type RestaurantInfo = {
    id: string;
    name: string;
    pictures: string[];
    coverImage: string;
    highlights: string[];
    about: string;
    latitude: number;
    longitude: number;
    Gastronomy: {
        description: string;
    };
    Comments?: [
        {
            comment: string;
            User: {
                name: string;
                image: string;
            };
        }
    ];
    Menu?: [
        {
            description: string;
            price: number;
            pictures: Array<string>;
            FoodType: {
                description: string;
            };
        }
    ];
};
