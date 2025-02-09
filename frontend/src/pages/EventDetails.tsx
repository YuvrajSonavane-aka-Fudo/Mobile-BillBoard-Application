import { MapPin, Calendar, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import MapComponent from "../components/MapComponent"

export default function EventDetails() {
  const eventLocation = { lat: 18.5204, lng: 73.8567 } // Example coordinates for Pune

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-serif mb-6">Event Details</h1>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>

          <div className="flex gap-4 mb-8">
            <Card className="bg-[#90EE90] px-6 py-3 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Location</span>
            </Card>
            <Card className="bg-[#FFD700] px-6 py-3 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Date</span>
            </Card>
            <Card className="bg-[#90EE90] px-6 py-3 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>4:00 PM to 6:00 PM</span>
            </Card>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Route:</h2>
        </div>

        <Card className="aspect-square p-0 overflow-hidden">
          <MapComponent center={eventLocation} markers={[eventLocation]} />
        </Card>
      </div>
    </div>
  )
}

