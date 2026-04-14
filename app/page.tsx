import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { CategoryCard } from '@/components/category-card'
import { RestaurantCard } from '@/components/restaurant-card'
import { categories, restaurants } from '@/lib/data'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  const featuredRestaurants = restaurants.filter(r => r.featured)
  const popularRestaurants = restaurants.slice(0, 6)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />

      {/* Categories Section */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                What&apos;s on your mind?
              </h2>
              <p className="text-muted-foreground mt-1">Explore categories</p>
            </div>
          </div>

          <div className="flex gap-6 sm:gap-8 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                image={category.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-10 sm:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Featured Restaurants
              </h2>
              <p className="text-muted-foreground mt-1">Handpicked just for you</p>
            </div>
            <Link href="/restaurants">
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                See all
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                {...restaurant}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Restaurants */}
      <section className="py-10 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Popular Near You
              </h2>
              <p className="text-muted-foreground mt-1">Top-rated restaurants in your area</p>
            </div>
            <Link href="/restaurants">
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                See all
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {popularRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                {...restaurant}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">F</span>
                </div>
                <span className="text-xl font-bold text-foreground">FoodieHub</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Delivering happiness to your doorstep, one meal at a time.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Safety</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} FoodieHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
