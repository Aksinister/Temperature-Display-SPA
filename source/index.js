function manageSearchRequest(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input-bar");
  let cityItem = document.querySelector("#city-item");
  cityItem.innerHTML = searchInput.value;
}

let searchFormItem = document.querySelector("#search-form");
searchFormItem = addEventListener("submit", manageSearchRequest);
