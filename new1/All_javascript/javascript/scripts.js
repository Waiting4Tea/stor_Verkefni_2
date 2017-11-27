document.addEventListener('DOMContentLoaded', function() {
    program.init();
});

var program = (function() {

    function aldur(b) {
        var gamalt = new Date(b);
        var nuna = Date.now();
        var gamaltD = (new Date() - new Date(b)) / (1000 * 60 * 60 * 24);
        var nunaD = new Date() / (1000 * 60 * 60 * 24);
    
        if ((nuna.getFullyear() - gamalt.getFullYear()) > 0) { /*Fyrir ár*/
            if ((nuna.getFullyear() - gamalt.getFullYear()) == 1) {
                return 'Fyrir' + (nuna.getFullyear() - gamalt.getFullYear()) + 'ári síðan';
            } else {
                return 'Fyrir' + (nuna.getFullyear() - gamalt.getFullYear()) + 'árum síðan';
            }
        } else if ((nuna.getMonth() - gamalt.getMonth()) > 0) { /*Fyrir mánuði*/
            if ((nuna.getMonth() - gamalt.getMonth()) == 1) {
                return 'Fyrir' + (nuna.getMonth() - gamalt.getMonth()) + 'mánuði síðan';
            } else {
                return 'Fyrir' + (nuna.getMonth() - gamalt.getMonth()) + 'mánuðum síðan';
            }
    
        } else if ((nunaD - gamaltD) > 7) { /*Fyrir vikur*/
            var vikur = Math.floor((nunaD - gamaltD) / 7);
            if (vikur == 1) {
                return 'Fyrir' + vikur + 'viku síðan';
            } else {
                return 'Fyrir' + vikur + 'vikum síðan';
            }
    
        } else if ((nunaD - gamaltD) > 0) { /*Fyrir daga*/
            if ((nunaD - gamaltD) == 1) {
                return 'Fyrir' + (nunaD - gamaltD) + 'degi síðan';
            } else {
                return 'Fyrir' + (nunaD - gamaltD) + 'dögum síðan';
            }
    
        } else { /*Fyrir klukkustundir*/
            if ((nuna.getHours() - gamalt.getHours()) == 1) {
                return 'Fyrir' + (nuna.getHours() - gamalt.getHours()) + 'klukkustund síðan';
            } else {
                return 'Fyrir' + (nuna.getHours() - gamalt.getHours()) + 'klukkustundum síðan';
            }
        }
    }
    function kalla_aldur() {
    }

    function jsonStation() {
        function fetchData(API_URL) {
            let data;
            const http = new XMLHttpRequest();

            http.open('GET', API_URL, true);
            http.setRequestHeader("Content-type", "application/json");
            http.onreadystatechange = function fetchOnLoad() {
                if (http.status === 200 && http.readyState === 4) {
                    data = (JSON.parse(http.response));
                    console.log(data);
                } else {
                    console.log("Tókst ekki að sækja gögn");
                }
            }
            http.send();
        }
        return(fetchData);
    }
    function init() {   // main
        var section = document.querySelector('.section');
        section.addEventListener('DOMContentLoaded', () => {
            let API_URL = './videos.json';
            jsonManager.fetchData(API_URL);
        });
    }
    return {
        init: init
    };
})();
