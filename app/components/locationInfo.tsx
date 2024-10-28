import { MapPin } from "lucide-react"

export default function LocationInfo({ city, country, available }: { city: string, country: string, available: boolean }) {
  return (
    <div className="flex items-center space-x-2 bg-secondary text-secondary-foreground rounded-full px-4 py-2 w-fit">
      <MapPin className="w-5 h-5" />
      <span className="font-medium">
        {city}, {country}
      </span>
      {available && (
        <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
          Available for work
        </span>
      )}
    </div>
  )
}