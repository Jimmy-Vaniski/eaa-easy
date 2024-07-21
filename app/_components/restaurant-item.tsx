import { Restaurant } from "@prisma/client";
import { BikeIcon, HeartIcon, StarIcon, TimerIcon  } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";


interface RestaurantItemProps {
    restaurant: Restaurant
}

const RestaurantItem = ({restaurant}: RestaurantItemProps) => {
    return (
        <div className="min-w-[266px] max-w-[266px] space-y-3">
            {/* imagem */}
            <div className="w-full h-[133px] relative">
                <Image 
                src={restaurant.imageUrl}
                 fill
                 className="object-cover rounded-lg"
                 alt={restaurant.name}
                />  
                {/* TODO: implementar avaliações. ainda está absoluto */}

            <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-primary px-2 py-[2px] text-white">
                <StarIcon className="fill-yellow-500 text-yellow-500" size={12} />
                <span className="text-xs font-semibold">
                 5.0
                </span>
            </div>

            {/* TODO: implementar restaurante como favorito falta logica */}
            
            <Button size= "icon" className="absolute top-2 right-2 bg-gray-700 w-7 h-7  rounded-full">
                <HeartIcon size="14" className="fill-white" />
            </Button>

            </div>
            {/* texto */}
            <div>
                <h3 className="font-semibold text-sm">{restaurant.name}</h3>
                {/* Info de entrega */}
                <div className="flex gap-3">
                    {/* taxa de entrega */}
                    <div className="flex gap-1 items-center">
                        <BikeIcon className="text-primary" size={14 }/>
                        <span className="text-xs text-muted-foreground">
                            {Number(restaurant.deliveryFee) == 0 ? 
                            "Entrega Gratuita" 
                            : formatCurrency(Number(restaurant.deliveryFee))}
                        </span>

                    </div>
                    {/* tempo de entrega */}
                    <div className="flex gap-1 items-center">
                        <TimerIcon className="text-primary" size={14 }/>
                        <span className="text-xs text-muted-foreground">
                            {restaurant.deliveryTimeMinutes} min
                        </span>

                    </div>


                </div>
            </div>
        </div>
    );
}
 
export default RestaurantItem;