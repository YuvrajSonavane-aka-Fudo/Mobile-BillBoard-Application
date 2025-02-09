"use client"

import { useEffect, useRef } from "react"
import { initializeMap, addMarker } from "../services/hereMapService"
import type * as H from "@here/maps-api-for-javascript"

interface MapComponentProps {
  center?: { lat: number; lng: number }
  markers?: Array<{ lat: number; lng: number }>
}

export default function MapComponent({ center = { lat: 18.5204, lng: 73.8567 }, markers = [] }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<H.Map | null>(null)

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      const map = initializeMap(mapRef.current)
      mapInstanceRef.current = map

      // Add markers
      markers.forEach((marker) => {
        addMarker(map, marker)
      })
    } else if (mapInstanceRef.current) {
      mapInstanceRef.current.dispose()
      const map = initializeMap(mapRef.current)
      mapInstanceRef.current = map
      markers.forEach((marker) => {
        addMarker(map, marker)
      })
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.dispose()
      }
    }
  }, [markers])

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />
}

