export interface RestaurantInfo{
    id: string,
    name: string,
    pictures: string[],
    highlights: string[],
    about: string,
    Gastronomy: {
        description: string
    },
    Comments?: [
        {
            comment: string,
            User: {
                name:string,
                image: string
            }    
        }
    ],
    Menu?:[
        {
            description:string,
            price: number,
            pictures: [
                ""
            ],
            FoodType: {
                description: string
            }
        }
    ]
}
