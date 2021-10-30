chrome.runtime.onMessage.addListener(function(message) {
  if (message.id === 'tabs') {
    chrome.storage.local.get(['urls'], function(result) {
      const storedUrls = result.urls[message.groupId].urls
      const isPinnedSelector = `${message.groupId}IsPinned`
      const isPinned = result.urls[message.groupId][isPinnedSelector]
      const urlsArray = Object.entries(storedUrls)
      for (let item in urlsArray) {
        chrome.tabs.create({ url: urlsArray[item][1], pinned: isPinned })
      }
    })
  }
  if (message.id === 'setUrls') {
    chrome.storage.local.set({
      urls: message.payload
    });
  }
})