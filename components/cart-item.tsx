"use client"

import Image from 'next/image'
import { Plus, Minus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart, CartItem as CartItemType } from '@/context/cart-context'

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className="flex gap-4 p-4 bg-card rounded-xl border border-border">
      {/* Image */}
      <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground line-clamp-1">{item.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{item.restaurantName}</p>
        <p className="font-bold text-foreground">${(item.price * item.quantity).toFixed(2)}</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-end justify-between">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground hover:text-destructive"
          onClick={() => removeItem(item.id)}
        >
          <Trash2 className="w-4 h-4" />
        </Button>

        <div className="flex items-center gap-0 bg-secondary rounded-lg overflow-hidden">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            <Minus className="w-4 h-4" />
          </Button>
          <span className="w-8 text-center font-semibold text-sm">{item.quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
