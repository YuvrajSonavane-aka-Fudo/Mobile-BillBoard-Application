package com.traffictracking.controller;

import com.traffictracking.model.Route;
import com.traffictracking.service.TrafficService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TrafficController {

    @Autowired
    private TrafficService trafficService;

    @GetMapping("/routes")
    public List<Route> getAllRoutes() {
        return trafficService.getAllRoutes();
    }

    @PostMapping("/routes")
    public Route saveRoute(@RequestBody Route route) {
        return trafficService.saveRoute(route);
    }

    @GetMapping("/optimize")
    public ResponseEntity<String> getOptimizedRoute(
            @RequestParam String origin,
            @RequestParam String destination,
            @RequestParam(required = false) List<String> waypoints) {
        String result = trafficService.getOptimizedRoute(origin, destination, waypoints);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/nearby")
    public ResponseEntity<String> getNearbyPlaces(
            @RequestParam String location,
            @RequestParam String radius,
            @RequestParam String type) {
        String result = trafficService.getNearbyPlaces(location, radius, type);
        return ResponseEntity.ok(result);
    }
}

