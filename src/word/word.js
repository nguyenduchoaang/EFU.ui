import { useState, useReducer, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import DropdownMenu from "../based/Dropdown";
import { DataMenu, DataCategory, ButtonData, WordData } from "./Data";
import reducer, { initState } from "./wordReducer/reducer";
import { SET_MENU, SET_CATEGORY, SHOW_MARK } from "./wordReducer/action";
import { Card, CardContent } from "../components/ui/card";
import styled from "styled-components";
import { HeaderIcon } from "../based/icon/ConfigIcon";
import { ToastAction } from "../components/ui/toast";
import { useToast } from "../components/ui/use-toast";
import Common from "../based/Common";
import { Link } from "react-router-dom";

export default function Word() {
  const { toast } = useToast();
  const [state, dispatch] = useReducer(reducer, initState);
  const {
    selectedCategory,
    categories,
    selectedMenu,
    selectedLevel,
    showMark,
  } = state;

  const handleToast = (title) => {
    switch (title) {
      case "Đã biết":
        toast({
          title: "Từ đã biết 💯 ",
          variant: "wordKnow",
          description: "Bạn đã thêm từ vào danh sách từ vựng Đã Biết !",
          status: "success",
          action: (
            <ToastAction altText="Xem danh sách">
              <Link to="/list-word">Xem danh sách</Link>
            </ToastAction>
          ),
        });
        break;
      case "Đã nhớ":
        toast({
          title: "Từ đã nhớ 🌟 ",
          variant: "wordRemember",
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
          title: "Thêm vào Flash Card🌟 ",
          variant: "flashCard",
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
        return "#ECCA9C";
      case "verb":
        return "#41B06E";
      case "adj":
        return "#F27BBD";
      case "adverb":
        return "#E59BE9";
      case "pronoun":
        return "#E91E63";
      default:
        return "black";
    }
  };

  useEffect(() => {}, []);

  return (
    <WordWrapper
      style={{ paddingTop: "88px" }}
      className="flex min-h-screen max-md:flex-col   w-full bg-background"
    >
      <aside className="  md:flex md:flex-col max-md:w-full  w-1/4 border-r bg-background p-6 gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium">Word Categories</h3>
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
          <section className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {WordData.map((item, index) => (
              <Card
                className="relative h-auto min-h-[580px] overflow-hidden rounded-lg group 
              "
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
                      {item.type}
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
                    className="card_example w-full p-3 h-[25%] "
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
                        // className={`button_action px-4 py-2 bg-background hover:bg-adj hover:text-adj-foreground ${
                        //   index === 0 ? "first-button" : "other-buttons"
                        // }`}
                        onClick={() => handleToast(itemBtn.title)}
                      >
                        {itemBtn.title}
                      </Button>
                    ))}
                  </ButtonWrapperBottom>
                  {/* <Button className="" size="sm" variant="outline">
                  Đã biết
                </Button> */}
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

const CardExample = styled.div`
  background-color: ${(props) => props.bgColor};
`;

const TagName = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.25rem 0.5rem;
  /* background-color: red; */
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 0 0 0 0.55rem;
  background-color: ${(props) => props.bgColor};
`;

const STT = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: auto;
  text-align: center;
  color: #fff;
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
