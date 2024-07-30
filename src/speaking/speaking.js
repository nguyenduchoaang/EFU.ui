import { useState, useReducer, useEffect, useRef } from "react";
import styled from "styled-components";
import { useToast } from "../components/ui/use-toast";
import { DataMenuSpeaking } from "./Data";
import reducer, { initStates } from "./reducer/reducer";
import { SET_MENU, SET_PLAYLIST } from "./reducer/action";
import { PlayList } from "../based/PlayList";

export default function Speaking() {
  const [state, dispatch] = useReducer(reducer, initStates);
  const { toast } = useToast();
  const audioSrc = "/media/test.mp3";
  const { playList } = state;

  useEffect(() => {}, []);

  const handleGetPlayList = async () => {
    const list = [
      {
        id: 1,
        name: "Các đoạn hội thoại thông dụng",
        description: "Nghe các đoạn hội thoại thông dụng",
      },
      {
        id: 2,
        name: "Các câu hỏi phỏng vấn",
        description: "Nghe các câu hỏi phỏng vấn",
      },
    ];
    return list;
  };
  useEffect(() => {
    switch (state.menuSelected) {
      case 1:
        handleGetPlayList().then((list) => dispatch(SET_PLAYLIST(list)));
        break;
      default:
        break;
    }
  }, [state.menuSelected]);
  const renderBody = (numberMenu) => {
    switch (numberMenu) {
      case 1:
        return <PlayList playList={playList} />;
      default:
        break;
    }
  };

  return (
    <WordWrapper className="flex min-h-screen max-md:flex-col   w-full bg-background">
      <aside className="  md:flex md:flex-col max-md:w-full  w-1/4 border-r bg-background  gap-6 hidden">
        <div class="px-3 py-2">
          {DataMenuSpeaking.map((item, index) => {
            return (
              <>
                <div className="mb-8">
                  <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight ">
                    {item.title}
                  </h2>
                  {item.menu.map((subItem, subIndex) => {
                    return (
                      <>
                        <button
                          class={`inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start 
                            ${
                              subItem.id === state.menuSelected
                                ? "bg-accent text-accent-foreground"
                                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            }
                            `}
                          fdprocessedid="rfp2gh"
                          onClick={() => dispatch(SET_MENU(subItem.id))}
                        >
                          {subItem.icon}
                          {subItem.title}
                        </button>
                      </>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </aside>
      {renderBody(state.menuSelected)}
    </WordWrapper>
  );
}

const WordWrapper = styled.div`
  .button_action {
    border-radius: ${(props) => props.border};
  }
`;
