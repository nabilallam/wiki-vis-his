generateTable();

async function generateTable() {
  let tbody = document.getElementById("data-table-body");
  let data = await browser.storage.local.get(null);
  let totalVisits = 0;

  for (let url in data) {
    let value = data[url];
    totalVisits += getVisits(value);
    console.log(totalVisits);
    let row = tbody.insertRow();
    let cell1 = row.insertCell();
    //let text1 = document.createTextNode(`${key}`);
    cell1.appendChild(createLink(url));

    let cell2 = row.insertCell();
    let text2 = document.createTextNode(value);
    cell2.setAttribute('class', 'right');
    cell2.appendChild(text2);
  }
}

function getVisits(value) {
  if(Number.isInteger(value)){
    return value;
  }else { return 0; }
}

function createLink(url) {
  let a = document.createElement('a');
  let link = document.createTextNode(url);
  a.appendChild(link);
  a.title = link;
  a.href = url;

  return a;
}

function articleTopic(url) {
  url.split('/').pop();
}

function isWikipediaUrl(url) {
  if (/^http|https/.test(url) && /wikipedia\.org/.test(url)) { return true; }
  else { return false;}
}