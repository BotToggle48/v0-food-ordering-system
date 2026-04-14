"use client"

import Link from 'next/link'
import { MapPin, Search, ShoppingCart, User, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCart } from '@/context/cart-context'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useState } from 'react'

export function Header() {
  const { totalItems } = useCart()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:block">FoodieHub</span>
          </Link>

          {/* Location */}
          <button className="hidden md:flex items-center gap-2 text-sm hover:text-primary transition-colors">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-medium">Deliver to:</span>
            <span className="text-muted-foreground">Select Location</span>
          </button>

          {/* Search - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for restaurants, cuisines..."
                className="w-full pl-10 bg-secondary border-0"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* User */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Select Location</span>
                  </Link>
                  <Link href="/cart" className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors">
                    <ShoppingCart className="w-5 h-5 text-primary" />
                    <span>Cart ({totalItems})</span>
                  </Link>
                  <Link href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors">
                    <User className="w-5 h-5 text-primary" />
                    <span>Sign In</span>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for restaurants, cuisines..."
                className="w-full pl-10 bg-secondary border-0"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
