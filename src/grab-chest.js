window.onload = () => {
    console.log("Twitch Auto Points Clicker & Point Tracker has initialized, looking for chests...");
}

function waitForElement(selector) {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver((mutations) => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document, {
            childList: true,
            subtree: true,
        });
    });
}

function addPointsToSyncProfile(pointsObtained) {
    chrome.storage.sync.get(["points"]).then((result) => {
        const newSum = (result.points += pointsObtained);
        chrome.storage.sync.set({ points: newSum }, () => {});
    });
}

function observePointCollectionAmount() {
    // Wait for chest point section to render on page
    waitForElement("div[class*='community-points']").then((pointSection) => {
        const observer = new MutationObserver((mutations) => {
            for (let mutation of mutations) {
                if (
                    mutation.target.innerText.includes("+50") ||
                    mutation.target.innerText.includes("+60") ||
                    mutation.target.innerText.includes("+70") ||
                    mutation.target.innerText.includes("+100")
                ) {
                    switch (mutation.target.innerText) {
                        case "+50":
                            addPointsToSyncProfile(50);
                            console.log(
                                "Twitch Channel Points Collector: Value collected is 50. Adding points to total."
                            );
                            return;
                        case "+60":
                            addPointsToSyncProfile(60);
                            console.log(
                                "Twitch Channel Points Collector: Value collected is 60. Adding points to total."
                            );
                            return;
                        case "+70":
                            addPointsToSyncProfile(70);
                            console.log(
                                "Twitch Channel Points Collector: Value collected is 70. Adding points to total."
                            );
                            return;
                        case "+100":
                            addPointsToSyncProfile(100);
                            console.log(
                                "Twitch Channel Points Collector: Value collected is 100. Adding points to total."
                            );
                            return;
                    }
                }
                return;
            }
        });

        observer.observe(pointSection, {
            childList: true,
            subtree: true,
        });
    });
}

observeAndCollectTwitchChests = () => {
    const observer = new MutationObserver((mutations) => {
        if (document.querySelector(".claimable-bonus__icon")) {
            for (mutation in mutations) {
                if (document.querySelector(".claimable-bonus__icon")) {
                    document.querySelector(".claimable-bonus__icon").click();
                    return;
                }
            }
        }
    });

    observer.observe(document, {
        childList: true,
        subtree: true,
    });
};

observePointCollectionAmount();
observeAndCollectTwitchChests();
