export class User {
  id: number;
  name: string;
  image: string;
  constructor(id: number = null, name: string = null, image: string = null) {
    this.id = id;
    this.name = name;
    this.image = image;
  }
}