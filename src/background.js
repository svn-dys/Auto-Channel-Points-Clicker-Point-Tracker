chrome.runtime.onInstalled.addListener(
    function(details) {
        if (details.reason == "install") {
            console.log("Installed.");
            chrome.storage.sync.get(['points'], (result) => {
                if (result > 0) {   
                    console.log(`Welcome back. Points restored: ${result.points}`);
                } else {
                    let points = 0;
                    chrome.storage.sync.set({"points": points}, () => {});
                    console.log("Thank you for installing my extension! PogU");
                }
            });
        }
});
