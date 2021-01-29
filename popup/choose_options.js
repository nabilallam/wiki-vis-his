function showVisitedPages() {
  console.log("hello world");
  browser.tabs.create({
    url:"/pages/stats_page.html"
  });
}

function resetVisitedPages() {
  console.log("by world");
  if(confirm("Are you sure?")) {
    browser.storage.local.clear();
    browser.storage.local.set({startet_at: new Date(), visits: {}});
  }
}

document.getElementById("showVisits").addEventListener("click", showVisitedPages);

document.getElementById("resetVisits").addEventListener("click", resetVisitedPages);
