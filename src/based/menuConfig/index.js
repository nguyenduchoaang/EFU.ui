import { HeaderIcon } from "../icon/ConfigIcon";

const MenuHeader = [
  {
    id: 1,
    link: "/",
    name: "Trang chủ",
    icon: <HeaderIcon.Home />,
  },
  {
    id: 2,
    link: "/speaking",
    name: "Luyện nói",
    icon: <HeaderIcon.Speaking />,
  },
  {
    id: 3,
    link: "/word",
    name: "Từ vựng",
    icon: <HeaderIcon.Word />,
  },
  {
    id: 4,
    link: "/practice",
    name: "Ôn tập",
    icon: <HeaderIcon.Practice />,
  },
];

export { MenuHeader };
