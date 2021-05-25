function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function main() {
    console.log('Auto Channel Points Clicker & Point Tracker: Waiting for page to load... then grabbing...');
    await sleep(4000);
    interval_Grabber = setInterval(function() {
        function clickTwitchButton() {
            document
              .getElementsByClassName(
                "ScCoreButton-sc-1qn4ixc-0 ScCoreButtonSuccess-sc-1qn4ixc-5 VGQNd"
              )[0]
              .click();
        }
        try {
            clickTwitchButton();
        } catch(err) {}
    }, 1000);
}    
main();