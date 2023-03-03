function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

document.addEventListener('DOMContentLoaded', () =>  {
    chrome.storage.sync.get(['points'], (result) => {
        display_points_str = kFormatter(result.points);
        document.getElementById("num_points").innerHTML = display_points_str;
        console.log("Points restored:", display_points_str);
    });
});