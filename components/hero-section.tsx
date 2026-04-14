import { Search, MapPin } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 sm:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Delicious Food,{' '}
            <span className="text-primary">Delivered Fast</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-pretty">
            Order from the best local restaurants with easy on-demand delivery
          </p>

          {/* Search Box */}
          <div className="bg-card rounded-2xl p-2 shadow-lg border border-border max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                <Input
                  type="text"
                  placeholder="Enter delivery address"
                  className="pl-12 h-12 border-0 bg-secondary text-base"
                />
              </div>
              <Button size="lg" className="h-12 px-8 text-base font-semibold">
                <Search className="w-5 h-5 mr-2" />
                Find Food
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-10">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Restaurants</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-foreground">20 min</p>
              <p className="text-sm text-muted-foreground">Avg. Delivery</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-foreground">4.8</p>
              <p className="text-sm text-muted-foreground">App Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
