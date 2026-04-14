import Image from 'next/image'
import Link from 'next/link'

interface CategoryCardProps {
  id: string
  name: string
  image: string
}

export function CategoryCard({ id, name, image }: CategoryCardProps) {
  return (
    <Link
      href={`/restaurants?category=${id}`}
      className="group flex flex-col items-center gap-3"
    >
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-secondary border-2 border-transparent group-hover:border-primary transition-all duration-300 group-hover:scale-105">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors text-center">
        {name}
      </span>
    </Link>
  )
}
