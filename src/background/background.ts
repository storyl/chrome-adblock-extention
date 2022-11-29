chrome.webRequest.onBeforeRequest.addListener((details) => {
  console.log(details)
  return {
    cancel: true,
  }
}, 
{
  urls: ['*://*.googleadservices.com/*', '*://*adclick.g.doubleclick.net*',
'*://*.tpc.googlesyndication.com/*']
},
 ['blocking']
)