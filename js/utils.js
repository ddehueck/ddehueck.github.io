
function loadListFromData(array, id, key) {
	// Sort by date
  array.sort((a,b) => b.created_at - a.created_at);
  // Reference list to add papers to
  let ul = document.getElementById(id);
  array.forEach(obj => {
  	let li = document.createElement("li");
  	li.innerHTML = obj[key];
  	ul.appendChild(li);
  });
}

