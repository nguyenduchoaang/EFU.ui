import { CarouselCard } from "../../based/CarouselCard";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { WordData } from "../../word/Data";
import CardWord from "../../based/CardWord";
import { CarouselItem } from "../../components/ui/carousel";
export default function ExamWord() {
  const [listData, setListData] = useState(WordData);

  return (
    <div className="flex justify-center">
      <CarouselCard data={listData} />
    </div>
  );
}
