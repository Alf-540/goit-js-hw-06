class Storage {
  #items = [];
  
  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items
  };

  addItem(newItem) {
    this.#items.push(newItem)
  };

  removeItem(item) {
    let newArr = [];
    for (const it of this.#items) {
      if (it !== item) {
        newArr.push(it);
      }
      this.#items = newArr;
    }
  };
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
