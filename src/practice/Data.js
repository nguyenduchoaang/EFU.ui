import { PracticeIcon } from "../based/icon/ConfigIcon";

const DataCard = [
  {
    id: 1,
    title: "Tổng số từ vựng",
    description: "Tổng số từ vựng của bạn",
    total: 100,
    color: "bg-totalWord",
    icon: <PracticeIcon.WordSuccess />,
  },
  {
    id: 2,
    title: "Tổng số từ đã biết",
    description: "Tổng số từ vựng bạn đã biết",
    total: 80,
    color: "bg-totalWordKnow",
    icon: <PracticeIcon.WordSuccess />,
  },
  {
    id: 3,
    title: "Tổng số từ đã nhớ",
    description: "Tổng số từ vựng đã nhớ, cần ôn tập lại",
    total: 20,
    color: "bg-totalWordRemember",
    icon: <PracticeIcon.WordSuccess />,
  },
  {
    id: 4,
    title: "Số điểm đạt được",
    description: "Số điểm bạn đạt được",
    total: 80,
    color: "bg-totalPoint ",
    icon: <PracticeIcon.WordSuccess />,
  },
];

const DataSelect = [
  {
    id: 1,
    title: "Ôn tập từ vựng",
    description: "Ôn tập lại các từ vựng của bạn",
    img: "https://friendlystock.com/wp-content/uploads/2019/09/6-brain-learning-cartoon-clipart.jpg",
    link: "/practice/word",
  },
  {
    id: 2,
    title: "Ôn tập ngữ pháp",
    description: "Ôn tập lại các ngữ pháp đã học",
    img: "https://image1.slideserve.com/2754609/learning-vocabulary-l.jpg",
    link: "/practice/grammar",
  },
  {
    id: 3,
    title: "Làm kiểm tra",
    description: "Làm các bài kiểm tra ôn tập",
    img: "https://clipground.com/images/a-clipart-test-1.png",
    link: "/practice/exam",
  },
];

export { DataCard, DataSelect };
