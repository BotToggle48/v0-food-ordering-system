"use client"

import { use, useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { MenuItemCard } from '@/components/menu-item-card'
import { getRestaurant, getMenuItems } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useCart } from '@/context/cart-context'
import {
  Star,
  Clock,
  MapPin,
  ArrowLeft,
  ChevronRight,
  Search,
  ShoppingCart,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { notFound } from 'next/navigation'

export default function RestaurantPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const restaurant = getRestaurant(id)
  const menuItems = getMenuItems(id)
  const { items, totalPrice } = useCart()

  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  if (!restaurant) {
    notFound()
  }

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(menuItems.map(item => item.category))]
    return cats
  }, [menuItems])

  // Filter menu items
  const filteredItems = useMemo(() => {
    let filtered = menuItems

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        item =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      )
    }

    if (activeCategory) {
      filtered = filtered.filter(item => item.category === activeCategory)
    }

    return filtered
  }, [menuItems, searchQuery, activeCategory])

  // Group items by category
  const groupedItems = useMemo(() => {
    const groups: Record<string, typeof menuItems> = {}
    filteredItems.forEach(item => {
      if (!groups[item.category]) {
        groups[item.category] = []
      }
      groups[item.category].push(item)
    })
    return groups
  }, [filteredItems])

  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Restaurant Header */}
      <div className="relative h-48 sm:h-64 md:h-80">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Back Button */}
        <div className="absolute top-4 left-4">
          <Link href="/restaurants">
            <Button variant="secondary" size="icon" className="rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Restaurant Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                {restaurant.discount && (
                  <Badge className="mb-2 bg-primary text-primary-foreground">
                    {restaurant.discount}
                  </Badge>
                )}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                  {restaurant.name}
                </h1>
                <p className="text-white/80 text-sm sm:text-base">
                  {restaurant.cuisines.join(' • ')}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-white font-semibold">{restaurant.rating}</span>
                  <span className="text-white/70 text-sm">({restaurant.reviewCount}+)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5">
                  <Clock className="w-4 h-4 text-white" />
                  <span className="text-white font-medium">{restaurant.deliveryTime} min</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5">
                  <MapPin className="w-4 h-4 text-white" />
                  <span className="text-white font-medium">${restaurant.deliveryFee.toFixed(2)} delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories (Desktop) */}
          <aside className="hidden lg:block w-48 shrink-0">
            <div className="sticky top-24">
              <h3 className="font-semibold text-foreground mb-4">Categories</h3>
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeCategory === null
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-secondary'
                  }`}
                >
                  All Items
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between ${
                      activeCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-secondary'
                    }`}
                  >
                    {category}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Menu Content */}
          <div className="flex-1 min-w-0">
            {/* Search & Category Pills (Mobile) */}
            <div className="mb-6 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search menu items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Pills - Mobile */}
              <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <Button
                  variant={activeCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(null)}
                  className="shrink-0"
                >
                  All
                </Button>
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category)}
                    className="shrink-0"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Menu Items */}
            {Object.keys(groupedItems).length > 0 ? (
              <div className="space-y-8">
                {Object.entries(groupedItems).map(([category, items]) => (
                  <section key={category}>
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      {category}
                      <span className="text-muted-foreground font-normal text-base ml-2">
                        ({items.length})
                      </span>
                    </h2>
                    <div className="grid gap-4">
                      {items.map(item => (
                        <MenuItemCard
                          key={item.id}
                          {...item}
                          restaurantId={restaurant.id}
                          restaurantName={restaurant.name}
                        />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">No items found</h3>
                <p className="text-muted-foreground">
                  Try a different search term or category
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Sticky Cart Button (Mobile) */}
      {cartItemCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-card border-t border-border lg:hidden">
          <Link href="/cart">
            <Button className="w-full h-14 text-base font-semibold" size="lg">
              <ShoppingCart className="w-5 h-5 mr-2" />
              View Cart ({cartItemCount} items) • ${totalPrice.toFixed(2)}
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
