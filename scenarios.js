import http from 'k6/http';
import {check} from 'k6';
import {sleep} from 'k6';
import exec from 'k6/execution';

export const options = {
    vus: 10,
    duration: '10s',
    thresholds: {
        http_req_duration: ['p(95)<100'],
        http_req_duration: ['max<2000'], //aggregation: slowest should be smaller than 2s
        http_req_failed: ['rate<0.01'], // failed request should be smaller than 1%
        http_reqs: ['count>20'], //aggregation: requests should be more than 20
        http_reqs: ['rate>4'], //aggregation: requests per second should be more than 4
        vus: ['value>9'], // virtual users should be always more than 10
        checks: ['rate>=0.99'] // request should be success more than 99%
    }
}

export default function () {
    const response = http.get('https://test.k6.io' + (exec.scenario.iterationInTest === 1 ? 'foo':''));
    console.log(exec.scenario.iterationInTest);
    // assertion
    /*
    check(true, {
        'true is true': (value) => value === true
    });
    */
    check(response, {
        'status is 200': (r) => r.status === 200,
        'page is startpage': (r) => r.body.includes('Collection of simple web-pages')
    });

}