import * as H from "@here/maps-api-for-javascript"

const HERE_API_KEY = "Tgo1fjTxsltoD63xjqLlxIGXe4qc1txHasjtCymR-SU"

export const initializeMap = (container: HTMLElement) => {
  const platform = new H.service.Platform({
    apikey: HERE_API_KEY,
  })

  const defaultLayers = platform.createDefaultLayers()

  const map = new H.Map(container, defaultLayers.vector.normal.map, {
    zoom: 12,
    center: { lat: 18.5204, lng: 73.8567 }, // Pune coordinates
  })

  const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map))
  const ui = H.ui.UI.createDefault(map, defaultLayers)

  return map
}

export const addMarker = (map: H.Map, coordinates: { lat: number; lng: number }) => {
  const marker = new H.map.Marker(coordinates)
  map.addObject(marker)
}

export const calculateRoute = async (origin: string, destination: string) => {
  const router = platform.getRoutingService(null, 8)

  const routeParams = {
    routingMode: "fast",
    transportMode: "car",
    origin: origin,
    destination: destination,
    return: "polyline,summary",
  }

  try {
    const result = await router.calculateRoute(routeParams)
    return result.routes[0]
  } catch (error) {
    console.error("Error calculating route:", error)
    throw error
  }
}

