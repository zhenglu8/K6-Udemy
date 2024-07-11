import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    vus: 10,
    duration: '10s'
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1)
}

// http_req_duration: time takes from request to response
// p(90): 90% of request are equal or faster

// Service-Level Objective (SLO)
// Availability: The application will be available 99.8% of the time
// Response Time:
// 90% of response are within 0.5 seconds of receiving a request
// 95% of response are within 0.9 seconds of receiving a request
// 99% of response are within 2.5 seconds of receiving a request

// Scalability
// Vertical Scaling: server with additional RAM memory, faster CPU; but there is a limitation
// Horizontal Scaling: more servers (Elastic scaling: pay as much as your usage)

// Monolithic architecture: difficult to scale horizontally
// Microservices architecture: relatively easy to scale horizontally
