import { ListeningIcon } from "../based/icon/configIcon";

const DataMenuSpeaking = [
  {
    id: 1,
    title: "Tổng quan",
    menu: [
      {
        id: 1,
        title: "Tin tức",
        icon: <ListeningIcon.Podcast />,
        link: "/speaking/news",
      },
      {
        id: 3,
        title: "Luyện phát âm",
        icon: <ListeningIcon.Music />,
        link: "/speaking/pronunciation",
      },
      {
        id: 4,
        title: "Luyện nói",
        icon: <ListeningIcon.Topic />,
        link: "/speaking/speak",
      },
    ],
  },
  {
    id: 1,
    title: "Luyện tập",
    menu: [
      {
        id: 1,
        title: "Tham gia Discord",
        icon: <ListeningIcon.Discord />,
      },
    ],
  },
];

export { DataMenuSpeaking };
