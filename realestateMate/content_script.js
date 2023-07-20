var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
if (!location.ancestorOrigins.contains(extensionOrigin)) {
    var iframe = document.createElement('iframe');
    // Must be declared at web_accessible_resources in manifest.json
    iframe.src = chrome.runtime.getURL('frame.html');

    // Some styles for a fancy sidebar
    iframe.style.cssText = 'position:fixed;top:0;left:0;display:block;' +
                           'width:560px;height:450px;z-index:1000;opacity:0.7';
    document.body.appendChild(iframe);
}