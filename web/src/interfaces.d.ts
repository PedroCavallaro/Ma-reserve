export interface RestaurantInfo{
    id: string,
    name: string,
    pictures: string[],
    highlights: string[],
    about: string,
    FoodType: {
        description: string
    },
    Comments?: [
        {
            comment: string
        }
    ]
}
