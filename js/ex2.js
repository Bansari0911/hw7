const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan",
];

const input = document.getElementById("country");
input.addEventListener("keyup", (event) => {
  const value = event.target.value;
  if (!!value) {
    const filteredCountries = countryList.filter((country) => {
      return country.indexOf(value) > -1;
    });
    emptyPreviousList();
    renderSuggestions(filteredCountries);
  } else {
    emptyPreviousList();
  }
});

const renderSuggestions = (suggestions) => {
  const div = document.getElementById("suggestions");
  for (const suggestion of suggestions) {
    const ele = document.createElement("div");
    ele.appendChild(document.createTextNode(suggestion));
    ele.addEventListener("click", (event) => {
      input.value = suggestion;
    });
    div.appendChild(ele);
  }
};

const emptyPreviousList = () => {
  const node = document.getElementById("suggestions");
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};
