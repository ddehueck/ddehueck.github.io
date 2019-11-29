
function loadListFromData(array, id, key) {
  // Reference list to add papers to
  let ul = document.getElementById(id);
  array.forEach(obj => {
    let li = document.createElement("li");
    li.innerHTML = obj[key];
    ul.appendChild(li);
  });
}

function addDataToTag(id, data) {
  let elem = document.getElementById(id);
  elem.innerHTML = data;
}

function sortByCreatedDate(array) {
  array.sort((a,b) => b.created_at - a.created_at);
}

