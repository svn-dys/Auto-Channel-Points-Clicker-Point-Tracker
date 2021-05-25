document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.sync.get(['points'], function(result) {
        function kFormatter(num) {
            return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
        }
        display_points_str = kFormatter(result.points);
        document.getElementById("num_points").innerHTML = display_points_str;
        console.log("Points restored:", display_points_str);
    });
}, false);

