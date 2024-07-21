import { db } from "../_lib/prisma";
import RestaurantItem from "./restaurant-item";

const RestaurantList = async () => {
    
    // TODO: pegar restaurantes  com maior numero de pedidos
    const restaurants = await db.restaurant.findMany({take: 10})
    return ( 

        <div className="px5 flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
            {restaurants.map((restaurant) => (
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
             ))}
        </div>
    );
}
 
export default RestaurantList;  