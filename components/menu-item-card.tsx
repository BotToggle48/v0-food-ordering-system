"use client"

import Image from 'next/image'
import { Plus, Minus, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useCart } from '@/context/cart-context'

interface MenuItemCardProps {
  id: string
  name: string
  description: string
  price: number
  image: string
  isVeg: boolean
  isBestseller?: boolean
  restaurantId: string
  restaurantName: string
}

export function MenuItemCard({
  id,
  name,
  description,
  price,
  image,
  isVeg,
  isBestseller,
  restaurantId,
  restaurantName,
}: MenuItemCardProps) {
  const { items, addItem, updateQuantity } = useCart()
  const cartItem = items.find(item => item.id === id)
  const quantity = cartItem?.quantity || 0

  const handleAdd = () => {
    addItem({
      id,
      name,
      price,
      image,
      restaurantId,
      restaurantName,
    })
  }

  return (
    <div className="flex gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow">
      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          {isVeg ? (
            <span className="w-4 h-4 border border-accent rounded-sm flex items-center justify-center">
              <span className="w-2 h-2 bg-accent rounded-full" />
            </span>
          ) : (
            <span className="w-4 h-4 border border-destructive rounded-sm flex items-center justify-center">
              <span className="w-2 h-2 bg-destructive rounded-full" />
            </span>
          )}
          {isBestseller && (
            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-0">
              Bestseller
            </Badge>
          )}
        </div>

        <h3 className="font-semibold text-foreground mb-1 line-clamp-1">{name}</h3>
        <p className="text-lg font-bold text-foreground mb-2">${price.toFixed(2)}</p>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </div>

      {/* Image and Add Button */}
      <div className="relative shrink-0">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        {/* Add/Quantity Button */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
          {quantity === 0 ? (
            <Button
              onClick={handleAdd}
              size="sm"
              className="bg-card text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 shadow-md"
            >
              ADD
            </Button>
          ) : (
            <div className="flex items-center gap-0 bg-primary text-primary-foreground rounded-lg shadow-md overflow-hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-none hover:bg-primary/80 text-primary-foreground"
                onClick={() => updateQuantity(id, quantity - 1)}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center font-semibold text-sm">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-none hover:bg-primary/80 text-primary-foreground"
                onClick={() => updateQuantity(id, quantity + 1)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
