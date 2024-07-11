import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    vus: 1,
    duration: '30s'
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1);
    http.get('https://test.k6.io/contacts.php');
    sleep(2);
    http.get('https://test.k6.io/news.php');
    sleep(2);
}

// Check http_req_failed: 0 
// Smoke testing (minimal load: 1-3 virtual users) does not belong to Performance testing, we just use it to make sure k6 works and server(application) works
// But smoke testing shows us the baseline performance values
// In CI/CD, production build, we could use smoke testing (1 user) to show is everything okay? (E.g. whenever a test script is updated)
// Smoke testing: low throughput, brief duration