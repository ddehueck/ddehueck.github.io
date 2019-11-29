
function getJsonObject(path, callback) {
  var request = new XMLHttpRequest()
  request.open('GET', path, true)
  request.send()
  request.onreadystatechange = function () {
    callback(JSON.parse(request.responseText))
  }
}