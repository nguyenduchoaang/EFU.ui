const DataCategory = [
  {
    id: 1,
    title: "Chủ đề",
  },
  {
    id: 2,
    title: "Mục tiêu",
  },
  {
    id: 3,
    title: "Ôn thi",
  },
];

const DataMenu = [
  {
    id: 1,
    title: "Chủ đề gia đình",
    subMenu: [
      {
        id: 11,
        title: "Cơ bản",
      },
      {
        id: 12,
        title: "Trung cấp",
      },
      {
        id: 13,
        title: "Nâng cao",
      },
    ],
  },
  {
    id: 2,
    title: "Chủ đề công việc",
    subMenu: [
      {
        id: 21,
        title: "Cơ bản",
      },
      {
        id: 22,
        title: "Trung cấp",
      },
      {
        id: 23,
        title: "Nâng cao",
      },
    ],
  },
  {
    id: 3,
    title: "Chủ đề du lịch",
    subMenu: [
      {
        id: 31,
        title: "Cơ bản",
      },
      {
        id: 32,
        title: "Trung cấp",
      },
      {
        id: 33,
        title: "Nâng cao",
      },
    ],
  },
];

const ButtonData = [
  {
    id: 1,
    title: "Đã biết",
  },
  {
    id: 2,
    title: "Đã nhớ",
  },
  {
    id: 3,
    title: "Flash Card",
  },
];

const WordData = [
  {
    id: 1,
    type: "adj",
    word: "family",
    img: "https://www.google.com.vn/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    spelling: "/ˈfæm.ɪ.li/",
    meaning: "gia đình",
    describe:
      "A group of people who are related to each other, such as a mother, a father, and their children",
    example: "My family is very big.",
    example_vietnamese: "Gia đình tôi rất đông.",
  },
  {
    id: 2,
    type: "adj",
    word: "friend",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png",
    spelling: "/frend/",
    meaning: "bạn bè",
    describe:
      "A person who you know well and who you like a lot, but who is usually not a member of your family",
    example: "I have many friends at school.",
    example_vietnamese: "Tôi có nhiều bạn ở trường.",
  },
  {
    id: 3,
    type: "verb",
    word: "love",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/1200px-Love_Heart_symbol.svg.png",
    spelling: "/lʌv/",
    meaning: "tình yêu",
    describe:
      "To like another adult very much and be romantically and sexually attracted to them, or to have strong feelings of liking a friend or person in",
    example: "Love is a beautiful feeling.",
    example_vietnamese: "Tình yêu là một cảm giác tuyệt đẹp.",
  },
  {
    id: 4,
    type: "pronoun",
    word: "home",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Home_icon_black.svg/1200px-Home_icon_black.svg.png",
    spelling: "/hoʊm/",
    meaning: "nhà",
    describe:
      "The house, apartment, etc. where you live, especially with your family",
    example: "My home is my castle.",
    example_vietnamese: "Nhà tôi là lâu đài của tôi.",
  },
  {
    id: 6,
    type: "noun",
    word: "happiness",
    img: "https://cdn-icons-png.flaticon.com/512/3671/3671419.png",
    spelling: "/ˈhæp.i.nəs/",
    meaning: "hạnh phúc",
    describe: "The feeling of being happy",
    example: "Happiness is a choice.",
    example_vietnamese: "Hạnh phúc là một sự lựa chọn.",
  },
];

export { DataMenu, DataCategory, ButtonData, WordData };
