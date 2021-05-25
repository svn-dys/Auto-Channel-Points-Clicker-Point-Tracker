document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.sync.get(['points'], function(result) {
        console.log(result.points);
        document.getElementById('num_points').title = result.points;
    });
},false);




