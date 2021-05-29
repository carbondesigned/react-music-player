import { v4 as uuidv4 } from "uuid"

const chillHop = () => {
  return [
    {
      name: "Jazz Cabbage",
      artist: "Ian Ewing, Strehlow",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9363",
      color: ["#FCE4BE", "#BCB4C3"],
      id: uuidv4(),
      active: true,
    },
    {
      id: uuidv4(),
      name: "By Chance",
      artist: "SwuM",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15224",
      active: false,
      color: ["#4A432F", "#5F472B"],
    },
    {
      id: uuidv4(),
      name: "Lonely Waves",
      artist: "C Y G N",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14981",
      active: false,
      color: ["#D883D7", "#455A73"],
    },
    {
      id: uuidv4(),
      name: "Toofpick",
      artist: "Blue Wednesday, Shopan",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11227",
      active: false,
      color: ["#53AD9F", "#E78971"],
    },
    {
      id: uuidv4(),
      name: "Lilo",
      artist: "Middle School, The Field Tapes",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11244",
      active: false,
      color: ["#53AD9F", "#E78971"],
    },
  ]
}

export default chillHop
