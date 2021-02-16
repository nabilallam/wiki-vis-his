generateTable();

async function generateTable() {
  let tbody = document.getElementById("data-table-body");
  let data = await browser.storage.local.get(null);
  let totalVisits = 0;

  for (let url in data) {
    if(isWikipediaUrl(url)) {
      let value = data[url];
      totalVisits += getVisits(value);

      let row = tbody.insertRow();
      let cell1 = row.insertCell();
      cell1.appendChild(createLink(url));

      let cell2 = row.insertCell();
      let text2 = document.createTextNode(articleLanguage(url));
      cell2.appendChild(text2);

      let cell3 = row.insertCell();
      let text3 = document.createTextNode(value);
      cell3.setAttribute('class', 'right');
      cell3.appendChild(text3);
    }
  }

  let row = tbody.insertRow();
  let totalTextCell = row.insertCell();
  let totalText = document.createTextNode('Total');
  totalTextCell.appendChild(totalText);

  let empyCell = row.insertCell();

  let totalNumber = row.insertCell();
  let textNode = document.createTextNode(totalVisits);
  totalNumber.setAttribute('class', 'right');
  totalNumber.appendChild(textNode);
}

function getVisits(value) {
  if(Number.isInteger(value)){
    return value;
  }else { return 0; }
}

function createLink(url) {
  let a = document.createElement('a');
  a.setAttribute('class', 'normal_weight');
  let link = document.createTextNode(articleTopic(url));
  a.appendChild(link);
  a.title = link;
  a.href = url;

  return a;
}

function articleLanguage(url) {
  return url.split('.').shift().substr(-2,2);
}

function articleTopic(url) {
  return url.split('/').pop();
}

function isWikipediaUrl(url) {
  if (/^http|https/.test(url) && /wikipedia\.org/.test(url)) { return true; }
  else { return false;}
}
