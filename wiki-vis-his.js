incrementVisists(window.location.href);
initializeDate();

//browser.storage.local.get(null).then((item) => console.log(item));
async function incrementVisists(url) {
  let storage_value = browser.storage.local.get(url);

  console.log(url);
  await storage_value.then(function(item){
    let visits = item[url] || 0;
    let jsonVariable = {};

    visits += 1;
    jsonVariable[url] =  visits;
    browser.storage.local.set(jsonVariable);
  });
}

function initializeDate() {
  let storage_value = browser.storage.local.get("started_at");

  storage_value.then(function(item){
    if(item["started_at"] === undefined){
      browser.storage.local.set({"started_at": new Date()});
    }
  });
}
