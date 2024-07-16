import { useState, useReducer, useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { DataMenu, DataCategory, ButtonData, WordData } from "./Data";
import reducer, { initState } from "./wordReducer/reducer";
import { Card, CardContent } from "../components/ui/card";
import styled from "styled-components";
import { ToastAction } from "../components/ui/toast";
import { useToast } from "../components/ui/use-toast";
import Common from "../based/Common";
import { Link } from "react-router-dom";
import CardWord from "../based/CardWord";

import {
  SET_MENU,
  SET_CATEGORY,
  SHOW_MARK,
  ADD_WORD,
  REMOVE_WORD,
} from "./wordReducer/action";
import MenuToggle from "../based/MenuToggle";

export default function Word() {
  const { toast } = useToast();
  const [state, dispatch] = useReducer(reducer, initState);
  const {
    selectedCategory,
    categories,
    selectedMenu,
    selectedLevel,
    showMark,
    listWord,
  } = state;

  const handleToast = (props) => {
    const { title, item, indexItem } = props;
    let toastTitle, description, actionText, link;

    switch (title) {
      case "Đã biết":
        toastTitle = "Từ Đã Biết 💯 ";
        description = "Bạn đã thêm từ vào danh sách từ vựng Đã Biết !";
        actionText = "Hoàn tác";
        link = "/practice/word";
        break;
      case "Đã nhớ":
        toastTitle = "Từ Đã Nhớ 🔔 ";
        description = "Bạn đã thêm từ vào danh sách từ vựng Đã Nhớ !";
        actionText = "Hoàn tác";
        link = "/practice/word";
        break;
      case "Flash Card":
        toastTitle = "Thêm vào Flash Card 📖 ";
        description = "Bạn đã thêm từ vào danh sách Flash Card !";
        actionText = "Hoàn tác";
        link = "/practice/word";
        break;
      default:
        break;
    }

    toast({
      title: toastTitle,
      variant: "success",
      description: description,
      status: "success",
      action: (
        <div className="flex flex-col">
          <Link to={link}>
            <ToastAction className="w-[150px] mb-2 " altText="Xem danh sách">
              Xem danh sách
            </ToastAction>
          </Link>
          <ToastAction
            onClick={() =>
              dispatch(
                ADD_WORD({
                  item: item,
                  indexItem: indexItem,
                })
              )
            }
            altText="Hoàn tác"
          >
            {actionText}
          </ToastAction>
        </div>
      ),
    });
  };

  useEffect(() => {}, []);

  return (
    <WordWrapper className="flex min-h-screen max-md:flex-col   w-full bg-background">
      <aside className="  md:flex md:flex-col max-md:w-full  w-1/4 border-r bg-background p-6 gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium">Danh mục từ vựng</h3>
          <div
            className="flex items-center overflow-x-auto scrollbar-hide 
              scrollbar scrollbar-thumb-accent scrollbar-track-muted"
          >
            <div className="flex gap-4 py-2">
              {DataCategory.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={`px-4 py-2 rounded-full bg-background text-muted-foreground hover:bg-muted hover:text-muted-foreground ${
                    selectedCategory === item.id
                      ? "bg-color2 text-primary-foreground hover:bg-color2/90 hover:text-primary-foreground"
                      : ""
                  }`}
                  onClick={() => dispatch(SET_CATEGORY(item.id))}
                >
                  {item.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="grid gap-2">
            <section>
              <div className="max-w-3xl mx-auto">
                <MenuToggle
                  data={DataMenu}
                  onSelect={(data) => dispatch(SET_MENU(data))}
                />
              </div>
            </section>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium">Search</h3>
          <Input
            type="search"
            placeholder="Search for a word..."
            className="rounded-md bg-muted px-3 py-2 text-sm"
          />
        </div>
      </aside>

      <main className="flex-1 p-6">
        <div className="grid gap-6">
          <section className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {listWord.length > 0 ? (
              listWord?.map((item, index) => (
                <CardWord
                  item={item}
                  indexItem={index}
                  showButton={true}
                  dataBtn={ButtonData}
                  handleToast={handleToast}
                  handleOnClickBtn={(props) => {
                    dispatch(REMOVE_WORD(props.item.id));
                  }}
                  minHeight="580px"
                  handleOnClick={(id) => dispatch(SHOW_MARK(id))}
                  showMark={showMark}
                  index={index}
                ></CardWord>
              ))
            ) : (
              <div>Không có dữ liệu</div>
            )}
          </section>
        </div>
      </main>
    </WordWrapper>
  );
}

const WordWrapper = styled.div`
  .button_action {
    border-radius: ${(props) => props.border};
  }
`;
