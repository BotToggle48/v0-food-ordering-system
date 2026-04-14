"use client"

import { useState, useMemo } from 'react'
import { Header } from '@/components/header'
import { RestaurantCard } from '@/components/restaurant-card'
import { restaurants, categories } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const sortOptions = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'rating', label: 'Rating' },
  { value: 'delivery-time', label: 'Delivery Time' },
  { value: 'delivery-fee', label: 'Delivery Fee' },
]

export default function RestaurantsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('relevance')
  const [showOffers, setShowOffers] = useState(false)

  const filteredRestaurants = useMemo(() => {
    let filtered = [...restaurants]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        r =>
          r.name.toLowerCase().includes(query) ||
          r.cuisines.some(c => c.toLowerCase().includes(query))
      )
    }

    // Cuisine filter
    if (selectedCuisines.length > 0) {
      filtered = filtered.filter(r =>
        r.cuisines.some(c =>
          selectedCuisines.some(sc =>
            c.toLowerCase().includes(sc.toLowerCase())
          )
        )
      )
    }

    // Offers filter
    if (showOffers) {
      filtered = filtered.filter(r => r.discount)
    }

    // Sorting
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'delivery-time':
        filtered.sort((a, b) => {
          const aTime = parseInt(a.deliveryTime.split('-')[0])
          const bTime = parseInt(b.deliveryTime.split('-')[0])
          return aTime - bTime
        })
        break
      case 'delivery-fee':
        filtered.sort((a, b) => a.deliveryFee - b.deliveryFee)
        break
    }

    return filtered
  }, [searchQuery, selectedCuisines, sortBy, showOffers])

  const toggleCuisine = (cuisine: string) => {
    setSelectedCuisines(prev =>
      prev.includes(cuisine)
        ? prev.filter(c => c !== cuisine)
        : [...prev, cuisine]
    )
  }

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCuisines([])
    setSortBy('relevance')
    setShowOffers(false)
  }

  const hasActiveFilters = searchQuery || selectedCuisines.length > 0 || showOffers || sortBy !== 'relevance'

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">All Restaurants</h1>
          <p className="text-muted-foreground">
            {filteredRestaurants.length} restaurants available
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search restaurants or cuisines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter Button - Mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="sm:hidden">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
                {hasActiveFilters && (
                  <Badge variant="secondary" className="ml-2 bg-primary text-primary-foreground">
                    Active
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh]">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                {/* Sort */}
                <div>
                  <h3 className="font-semibold mb-3">Sort By</h3>
                  <div className="flex flex-wrap gap-2">
                    {sortOptions.map((option) => (
                      <Button
                        key={option.value}
                        variant={sortBy === option.value ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSortBy(option.value)}
                      >
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Cuisines */}
                <div>
                  <h3 className="font-semibold mb-3">Cuisines</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCuisines.includes(category.name) ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleCuisine(category.name)}
                      >
                        {category.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Offers */}
                <div>
                  <h3 className="font-semibold mb-3">Offers</h3>
                  <Button
                    variant={showOffers ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowOffers(!showOffers)}
                  >
                    With Offers Only
                  </Button>
                </div>

                {hasActiveFilters && (
                  <Button variant="ghost" onClick={clearFilters} className="w-full">
                    Clear All Filters
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Filters */}
        <div className="hidden sm:flex flex-wrap gap-3 mb-6">
          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort:</span>
            {sortOptions.map((option) => (
              <Button
                key={option.value}
                variant={sortBy === option.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSortBy(option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>

          <div className="w-px h-8 bg-border" />

          {/* Quick Filters */}
          <Button
            variant={showOffers ? "default" : "outline"}
            size="sm"
            onClick={() => setShowOffers(!showOffers)}
          >
            Offers
          </Button>

          {categories.slice(0, 5).map((category) => (
            <Button
              key={category.id}
              variant={selectedCuisines.includes(category.name) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleCuisine(category.name)}
            >
              {category.name}
            </Button>
          ))}

          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="text-destructive">
              <X className="w-4 h-4 mr-1" />
              Clear
            </Button>
          )}
        </div>

        {/* Active Filter Tags */}
        {selectedCuisines.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedCuisines.map((cuisine) => (
              <Badge
                key={cuisine}
                variant="secondary"
                className="cursor-pointer"
                onClick={() => toggleCuisine(cuisine)}
              >
                {cuisine}
                <X className="w-3 h-3 ml-1" />
              </Badge>
            ))}
          </div>
        )}

        {/* Restaurant Grid */}
        {filteredRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} {...restaurant} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No restaurants found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your filters or search query
            </p>
            <Button onClick={clearFilters}>Clear Filters</Button>
          </div>
        )}
      </main>
    </div>
  )
}
