package com.traffictracking.controller;

import com.traffictracking.model.Route;
import com.traffictracking.model.dto.RouteOptimizationRequest;
import com.traffictracking.service.RouteOptimizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/routes")
public class RouteController {

    @Autowired
    private RouteOptimizationService routeOptimizationService;

    @PostMapping("/optimize")
    public ResponseEntity<Route> optimizeRoute(@RequestBody RouteOptimizationRequest request) {
        Route optimizedRoute = routeOptimizationService.optimizeRoute(request);
        return ResponseEntity.ok(optimizedRoute);
    }
}

