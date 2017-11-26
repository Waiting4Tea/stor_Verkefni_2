const jsonManager = (() => {
    function fetchData(API_URL) {
        let data;
        const http = new XMLHttpRequest();

        http.open('GET', API_URL, true);
        http.setRequestHeader("Content-type", "application/json");
        http.onreadystatechange = function fetchOnload() {
            if (http.status === 200 && http.readyState === 4) {
                data = (JSON.parse(http.response));
                console.log(data);

                // Hérna væri flott að kalla á fall sem notar data-breytuna og smíðar HTML elements
            } else {
                console.log('Tókst ekki að sækja gögn');
            }
        };
        http.send();
    }

    return {fetchData};
})();

document.addEventListener('DOMContentLoaded', () => {
    let API_URL = './videos.json';
    jsonManager.fetchData(API_URL);
});
