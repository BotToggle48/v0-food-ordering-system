"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { CartItem } from '@/components/cart-item'
import { useCart } from '@/context/cart-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
  ArrowLeft,
  ShoppingBag,
  Tag,
  Truck,
  CreditCard,
  CheckCircle,
  MapPin,
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

export default function CartPage() {
  const { items, totalPrice, clearCart } = useCart()
  const [promoCode, setPromoCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null)
  const [showCheckout, setShowCheckout] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const deliveryFee = items.length > 0 ? 2.99 : 0
  const discount = appliedPromo === 'SAVE20' ? totalPrice * 0.2 : 0
  const tax = (totalPrice - discount) * 0.08
  const grandTotal = totalPrice - discount + deliveryFee + tax

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'SAVE20') {
      setAppliedPromo('SAVE20')
    }
    setPromoCode('')
  }

  const handlePlaceOrder = () => {
    setOrderPlaced(true)
    setTimeout(() => {
      clearCart()
    }, 500)
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-accent" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Order Placed!</h1>
            <p className="text-muted-foreground mb-8">
              Your delicious food is being prepared and will arrive shortly. Thank you for ordering with FoodieHub!
            </p>
            <div className="bg-card rounded-xl border border-border p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-muted-foreground">Order ID</span>
                <span className="font-mono font-semibold">#FH{Date.now().toString().slice(-6)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Estimated Delivery</span>
                <span className="font-semibold text-accent">25-35 minutes</span>
              </div>
            </div>
            <Link href="/">
              <Button size="lg" className="w-full">
                Continue Ordering
              </Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven&apos;t added anything to your cart yet. Start exploring restaurants and find something delicious!
            </p>
            <Link href="/restaurants">
              <Button size="lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Browse Restaurants
              </Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6">
        {/* Back Link */}
        <Link
          href="/restaurants"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Continue Shopping
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-8">Your Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}

            {/* Promo Code */}
            <div className="bg-card rounded-xl border border-border p-4">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Apply Promo Code</h3>
              </div>
              {appliedPromo ? (
                <div className="flex items-center justify-between bg-accent/10 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="font-medium text-accent">{appliedPromo} applied</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setAppliedPromo(null)}
                    className="text-muted-foreground"
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleApplyPromo} disabled={!promoCode}>
                    Apply
                  </Button>
                </div>
              )}
              <p className="text-xs text-muted-foreground mt-2">
                Try SAVE20 for 20% off!
              </p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
              <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">${totalPrice.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm text-accent">
                    <span>Promo Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Truck className="w-4 h-4" />
                    Delivery Fee
                  </span>
                  <span className="text-foreground">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="text-foreground">${tax.toFixed(2)}</span>
                </div>
              </div>

              <Separator className="mb-4" />

              <div className="flex justify-between mb-6">
                <span className="text-lg font-bold text-foreground">Total</span>
                <span className="text-lg font-bold text-foreground">${grandTotal.toFixed(2)}</span>
              </div>

              <Button
                className="w-full h-12 text-base font-semibold"
                size="lg"
                onClick={() => setShowCheckout(true)}
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Proceed to Checkout
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                Secure checkout powered by FoodieHub
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Checkout Dialog */}
      <Dialog open={showCheckout} onOpenChange={setShowCheckout}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Checkout</DialogTitle>
            <DialogDescription>
              Complete your order details below
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* Delivery Address */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Delivery Address
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Enter your address"
                  className="pl-10"
                  defaultValue="123 Main St, City, State 12345"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Payment Method
              </label>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="h-auto py-3 justify-start">
                  <CreditCard className="w-4 h-4 mr-2" />
                  <span className="text-sm">Card</span>
                </Button>
                <Button variant="outline" className="h-auto py-3 justify-start opacity-50" disabled>
                  <span className="text-sm">Cash on Delivery</span>
                </Button>
              </div>
            </div>

            {/* Card Details */}
            <div className="space-y-3">
              <Input placeholder="Card Number" defaultValue="4242 4242 4242 4242" />
              <div className="grid grid-cols-2 gap-3">
                <Input placeholder="MM/YY" defaultValue="12/28" />
                <Input placeholder="CVC" defaultValue="123" />
              </div>
            </div>

            {/* Order Total */}
            <div className="bg-secondary rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Total to Pay</span>
                <span className="text-xl font-bold text-primary">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <Button
              className="w-full h-12 text-base font-semibold"
              size="lg"
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
