//package com.traffictracking.config;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.client.RestTemplate;
//
//@Configuration
//public class GoogleMapsConfig {
//
//    @Value("${google.maps.api.key}")
//    private String apiKey;
//
//    @Bean
//    public RestTemplate restTemplate() {
//        return new RestTemplate();
//    }
//
//    @Bean
//    public String googleMapsApiKey() {
//        return apiKey;
//    }
//}
//
package com.traffictracking.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class GoogleMapsConfig {

//    @Value("${google.maps.api.key}")
//    private String apiKey;
    @Value("${google.maps.api.key:DEFAULT_VALUE}")
    private String apiKey;

    @Bean(name = "googleMapsRestTemplate") // ✅ Assign a unique bean name
    public RestTemplate googleMapsRestTemplate() {
        return new RestTemplate();
    }

    @Bean
    public String googleMapsApiKey() {
        return apiKey;
    }
}
