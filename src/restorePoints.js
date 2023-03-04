function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

document.addEventListener("DOMContentLoaded", () =>  {
    chrome.storage.sync.get(["points"], (result) => {
        const NUM_POINTS_ELEMENT = document.getElementsByClassName("num-points-text")[0];
        const POINTS_GRABBED_STRING = "Points grabbed by extension:";
        const FORMATTED_POINTS = kFormatter(result.points);
        const UNFORMAtTED_POINTS = result.points;
        let bottom_text = POINTS_GRABBED_STRING + " " + FORMATTED_POINTS;
        
        NUM_POINTS_ELEMENT.innerHTML = bottom_text;
        NUM_POINTS_ELEMENT.title = `Total points grabbed by this extension at twitch.tv
        
Total Points: ${UNFORMAtTED_POINTS}\n\n`
        
        console.log("Points restored:", UNFORMAtTED_POINTS);
    });
});
