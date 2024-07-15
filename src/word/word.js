import { useState, useReducer, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import DropdownMenu from "../based/Dropdown";
import { DataMenu, DataCategory, ButtonData, WordData } from "./Data";
import reducer, { initState } from "./wordReducer/reducer";
import { Card, CardContent } from "../components/ui/card";
import styled from "styled-components";
import { HeaderIcon } from "../based/icon/ConfigIcon";
import { ToastAction } from "../components/ui/toast";
import { useToast } from "../components/ui/use-toast";
import Common from "../based/Common";
import { Link } from "react-router-dom";
import {
  SET_MENU,
  SET_CATEGORY,
  SHOW_MARK,
  ADD_WORD,
  REMOVE_WORD,
} from "./wordReducer/action";

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
    switch (title) {
      case "Đã biết":
        toast({
          title: "Từ Đã Biết 💯 ",
          variant: "success",
          description: "Bạn đã thêm từ vào danh sách từ vựng Đã Biết !",
          status: "success",
          action: (
            <div className="flex flex-col">
              <ToastAction className="w-[150px] mb-2" altText="Xem danh sách">
                Xem danh sách
              </ToastAction>
              <ToastAction
                onClick={() =>
                  dispatch(
                    ADD_WORD({
                      item: item,
                      indexItem: indexItem,
                    })
                  )
                }
                altText="Xem danh sách"
              >
                Hoàn tác
              </ToastAction>
            </div>
          ),
        });
        break;
      case "Đã nhớ":
        toast({
          title: "Từ Đã Nhớ 🔔 ",
          variant: "success",
          description: "Bạn đã thêm từ vào danh sách từ vựng Đã Nhớ !",
          status: "success",
          action: (
            <ToastAction altText="Xem danh sách">
              <Link to="/list-word">Xem danh sách</Link>
            </ToastAction>
          ),
        });
        break;
      case "Flash Card":
        toast({
          title: "Thêm vào Flash Card 📖 ",
          variant: "success",
          description: "Bạn đã thêm từ vào danh sách Flash Card !",
          status: "success",
          action: (
            <ToastAction altText="Xem danh sách">
              <Link to="/flash-card">Xem danh sách</Link>
            </ToastAction>
          ),
        });

        break;
      default:
        break;
    }
  };

  const renderColor = (type) => {
    switch (type) {
      case "noun":
        return "#FFCBCB";
      case "verb":
        return "#ACE1AF";
      case "adj":
        return "#FFCDEA";
      case "adverb":
        return "#E59BE9";
      case "pronoun":
        return "#B7C9F2";
      default:
        return "black";
    }
  };

  console.log("listWord", listWord);

  useEffect(() => {}, []);

  return (
    <WordWrapper
      style={{ paddingTop: "88px" }}
      className="flex min-h-screen max-md:flex-col   w-full bg-background"
    >
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
                <DropdownMenu
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
            {listWord.map((item, index) => (
              <Card
                style={{
                  border: `1px solid ${renderColor(item.type)}`,
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
                className={`relative h-auto min-h-[580px] overflow-hidden rounded-lg group  shadow-md`}
              >
                <CardContent className="h-full  p-0 ">
                  <div className="card_header h-[10%] ">
                    <STT
                      bgColor={renderColor(item.type)}
                      className={` cursor-pointer`}
                      onClick={() => dispatch(SHOW_MARK(index + 1))}
                    >
                      <HeaderIcon.Menu width="17" height="17" />
                    </STT>
                    <TagName bgColor={renderColor(item.type)}>
                      {item.type.toUpperCase()}
                    </TagName>
                  </div>
                  <p className="h-[70%]">
                    <div className="card_img mt-3 flex justify-center items-center rounded-md w-full h-auto object-cover">
                      <img
                        src={item.img}
                        alt="Serendipity"
                        className="rounded-md w-[120px] min-h-[120px] object-contain"
                      />
                    </div>

                    <div className="card_content p-6 space-y-4">
                      <h3 className="text-2xl ">
                        <div className="font-bold">{item.word}</div>
                        <div className="space-x-2 text-sm">{item.spelling}</div>
                      </h3>
                      <p className="font-bold text-color3">{item.meaning}</p>
                      <p className="text-muted-foreground italic">
                        {item.describe}
                      </p>
                    </div>
                  </p>
                  <CardExample
                    bgColor={renderColor(item.type)}
                    className="card_example w-full p-3  h-[25%] "
                  >
                    <p className="example_english italic">
                      {Common.checkWord(item.word, item.example)}
                    </p>
                    <p className="example_vietnamese italic mt-3">
                      {Common.checkWord(item.meaning, item.example_vietnamese)}
                    </p>
                  </CardExample>
                  <ButtonWrapperBottom
                    bgColor={renderColor(item.type)}
                    className={`button_wrapper flex gap-2   justify-between ${
                      index + 1 === showMark ? "flex" : "hidden"
                    }  
                  overflow-x-auto scrollbar-hide absolute bottom-0 w-full items-center  p-2  h-[18%]
                  `}
                  >
                    {ButtonData.map((itemBtn, indexBtn) => (
                      <Button
                        key={itemBtn.id}
                        variant="outline"
                        style={{}}
                        className={`button_action px-4 py-2  bg-background hover:transform hover:scale-105 transition-transform duration-500 ease-in-out hover:text-black-foreground`}
                        onClick={() => {
                          handleToast({
                            title: itemBtn.title,
                            item: item,
                            indexItem: index,
                          });
                          dispatch(REMOVE_WORD(item.id));
                        }}
                      >
                        {itemBtn.title}
                      </Button>
                    ))}
                  </ButtonWrapperBottom>
                </CardContent>
              </Card>
            ))}
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

  /* .button_wrapper {
    opacity: 0;
    transform: translateY(100%);
    transition: opacity 0.5s ease, transform 1s ease;
    transition: all 1s;
  }
  .button_wrapper:hover {
    opacity: 1;
  } */
`;

const CardWrapperCommon = styled.div``;

const CardExample = styled.div`
  background-color: ${(props) => props.bgColor};
`;

const TagName = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  padding: 0.25rem 0.5rem;
  /* background-color: red; */
  font-size: 0.75rem;
  width: 75px;
  text-align: center;
  height: 30px;
  font-weight: 600;
  border-radius: 0 0 0 0.55rem;
  background-color: ${(props) => props.bgColor};
`;

const STT = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  text-align: center;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 30px;
  padding: 0.25rem 0.5rem;
  /* background-color: red; */
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 0 0 0.55rem 0;
  background-color: ${(props) => props.bgColor};
`;

const ButtonWrapperBottom = styled.div`
  background-color: ${(props) => props.bgColor};
`;
