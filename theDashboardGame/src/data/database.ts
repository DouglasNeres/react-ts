import Image1 from "../assets/Rectangle 1.png"
import Image2 from "../assets/Rectangle 2.png"
import Image3 from "../assets/Rectangle 3.png"

export interface iGame{
  image: string;
  name: string;
  category: string;
}

export const gameData: iGame[] = [
  {
    image: Image1,
    name: 'Lorem Ipsum Game 1',
    category: 'RPG',
  },
  {
    image: Image2,
    name: 'Lorem Ipsum Game 2',
    category: 'FPS',
  },
  {
    image: Image3,
    name: 'Lorem Ipsum Game 3',
    category: 'Adventure',
  },
  {
    image: Image1,
    name: 'Lorem Ipsum Game 4',
    category: 'RPG',
  },
]