// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark",
  },
  {
    code: "LA",
    name: "Lannister",
  },
  {
    code: "BA",
    name: "Baratheon",
  },
  {
    code: "TA",
    name: "Targaryen",
  },
];

const container = document.getElementById("house");

for (const house of houses) {
  const option = document.createElement("option");
  option.setAttribute("value", house.code);
  option.appendChild(document.createTextNode(house.name));
  container.appendChild(option);
}

container.addEventListener("change", (event) => {
  const selectedHouse = event.target.value;
  if (selectedHouse) {
    const chars = getCharacters(selectedHouse);
    emptyPreviousList();
    renderCharacters(chars);
  }
});

// Return an array of characters belonging to a house
const getCharacters = (houseCode) => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

const renderCharacters = (chars) => {
  const list = document.getElementById("characters");
  for (const char of chars) {
    const ele = document.createElement("li");
    ele.appendChild(document.createTextNode(char));
    list.appendChild(ele);
  }
};

const emptyPreviousList = () => {
  const node = document.getElementById("characters");
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};
