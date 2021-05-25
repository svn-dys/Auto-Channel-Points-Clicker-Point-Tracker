MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var observer = new MutationObserver(function(mutations, observer) {
    mutations.forEach(function(mutation) {
         if (mutation.type == "attributes") {
             if (mutation.attributeName == "id") {
                 if ((mutation.target.innerHTML).includes("100")) {
                    chrome.storage.sync.get(['points'], function(result) {
                        addToPoints = result.points + 100;
                        chrome.storage.sync.set({'points': addToPoints}, function(){});
                    })
                 }
                 if ((mutation.target.innerHTML).includes("70")) {
                    chrome.storage.sync.get(['points'], function(result) {
                        addToPoints = result.points + 70;
                        chrome.storage.sync.set({'points': addToPoints}, function() {});
                    }) 
                 }
                 if ((mutation.target.innerHTML).includes("60")) {
                    chrome.storage.sync.get(['points'], function(result) {
                        addToPoints = result.points + 60;
                        chrome.storage.sync.set({'points': addToPoints}, function() {});
                    }) 
                 }
                 if ((mutation.target.innerHTML).includes("50")) {
                    chrome.storage.sync.get(['points'], function(result) {
                        addToPoints = result.points + 50;
                        chrome.storage.sync.set({'points': addToPoints}, function() {});
                    })
                 }
             }
         }
    });
});

observer.observe(document, {
    subtree: true,
    attributes: true
    //...
});