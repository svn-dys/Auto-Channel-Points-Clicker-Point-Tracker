function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function main() {
    console.log('Auto Channel Points Clicker & Point Tracker: Waiting for page to load... then grabbing...');
    await sleep(4000);
    interval_Grabber = setInterval(function() {
        function clickTwitchButton() {
            document.getElementsByClassName("tw-button tw-button--success")[0].click();
        }
        try {
            clickTwitchButton();
        } catch(err) {}
    }, 1000);
}    
main();