package com.traffictracking.service;

import com.traffictracking.model.Route;
import com.traffictracking.repository.RouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class TrafficService {

    @Autowired
    private RouteRepository routeRepository;

//    @Autowired
//    private RestTemplate restTemplate;
    @Autowired
    @Qualifier("hereMapsRestTemplate")  // ✅ Use Here Maps RestTemplate
    private RestTemplate restTemplate;

    @Autowired
    private String googleMapsApiKey;

    private static final String DIRECTIONS_API_URL = "https://maps.googleapis.com/maps/api/directions/json?";
    private static final String PLACES_API_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";

    public List<Route> getAllRoutes() {
        return routeRepository.findAll();
    }

    public Route saveRoute(Route route) {
        return routeRepository.save(route);
    }

    public String getOptimizedRoute(String origin, String destination, List<String> waypoints) {
        StringBuilder urlBuilder = new StringBuilder(DIRECTIONS_API_URL);
        urlBuilder.append("origin=").append(origin);
        urlBuilder.append("&destination=").append(destination);
        
        if (waypoints != null && !waypoints.isEmpty()) {
            urlBuilder.append("&waypoints=optimize:true|").append(String.join("|", waypoints));
        }
        
        urlBuilder.append("&key=").append(googleMapsApiKey);

        return restTemplate.getForObject(urlBuilder.toString(), String.class);
    }

    public String getNearbyPlaces(String location, String radius, String type) {
        StringBuilder urlBuilder = new StringBuilder(PLACES_API_URL);
        urlBuilder.append("location=").append(location);
        urlBuilder.append("&radius=").append(radius);
        urlBuilder.append("&type=").append(type);
        urlBuilder.append("&key=").append(googleMapsApiKey);

        return restTemplate.getForObject(urlBuilder.toString(), String.class);
    }
}

