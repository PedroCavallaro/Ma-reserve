interface RestaurantCardProps {
    id: string;
    name: string;
    coverImage: string;
    highlights: string[];
    about: string;
    Gastronomy: {
        description: string;
    };
}
export default function RestaurantCard({
    id,
    name,
    about,
    coverImage,
    highlights,
    Gastronomy,
}: RestaurantCardProps) {
    return (
        <button>
            <div></div>
            <div></div>
        </button>
    );
}
