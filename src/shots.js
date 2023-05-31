class Tile {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class shotTree {
  constructor(array) {
    this.array = array;
    this.root = this.buildShotTree(array);
    this.order = [];
  }

  buildShotTree(array) {
    if (array.length === 0) {
      return null;
    }
    let mid = Math.floor(array.length / 2);
    const root = new Tile(array[mid]);
    root.left = this.buildShotTree(array.slice(0, mid));
    root.right = this.buildShotTree(array.slice(mid + 1));
  }
}
