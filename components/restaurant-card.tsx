import Image from 'next/image'
import Link from 'next/link'
import { Star, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface RestaurantCardProps {
  id: string
  name: string
  image: string
  rating: number
  reviewCount: number
  deliveryTime: string
  deliveryFee: number
  cuisines: string[]
  discount?: string
}

export function RestaurantCard({
  id,
  name,
  image,
  rating,
  reviewCount,
  deliveryTime,
  deliveryFee,
  cuisines,
  discount,
}: RestaurantCardProps) {
  return (
    <Link
      href={`/restaurant/${id}`}
      className="group block bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {discount && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground font-semibold">
            {discount}
          </Badge>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-20" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="text-white font-medium text-sm flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {deliveryTime} min
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {name}
          </h3>
          <div className="flex items-center gap-1 bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-md shrink-0">
            <Star className="w-3.5 h-3.5 fill-primary text-primary" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-1 mb-2">
          {cuisines.join(' • ')}
        </p>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            {reviewCount}+ ratings
          </span>
          <span className="text-muted-foreground">
            ${deliveryFee.toFixed(2)} delivery
          </span>
        </div>
      </div>
    </Link>
  )
}
