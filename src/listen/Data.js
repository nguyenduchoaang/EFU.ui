import { ListeningIcon } from "../based/icon/configIcon";

const DataMenuSpeaking = [
  {
    id: 1,
    title: "Tổng quan",
    menu: [
      {
        id: 1,
        title: "Nghe podcast",
        icon: <ListeningIcon.Podcast />,
        link: "/speaking/speak",
      },
      {
        id: 2,
        title: "Nghe nhạc",
        icon: <ListeningIcon.Music />,
        link: "/speaking/pronunciation",
      },
    ],
  },
  {
    id: 1,
    title: "Luyện tập",
    menu: [
      {
        id: 3,
        title: "Nghe cơ bản",
        icon: <ListeningIcon.Discord />,
      },
      {
        id: 4,
        title: "Nghe nâng cao",
        icon: <ListeningIcon.Discord />,
      },
      {
        id: 4,
        title: "Tham gia Discord",
        icon: <ListeningIcon.Discord />,
      },
    ],
  },
];

export { DataMenuSpeaking };
