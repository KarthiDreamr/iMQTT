
chrome.action.onClicked.addListener(function () {
  // Open the HTML page in a new window.
  chrome.windows.create({
    'url': "popup.html",
     'type': 'popup',
    //  'width': 400,
    //  'height': 600
  }
    );
});

