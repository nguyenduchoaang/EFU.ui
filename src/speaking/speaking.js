import { useState, useReducer, useEffect, useRef } from "react";
import styled from "styled-components";
import { useToast } from "../components/ui/use-toast";
import { DataMenuSpeaking } from "./Data";
import reducer, { initStates } from "./reducer/reducer";
import { SET_MENU } from "./reducer/action";
import { sub } from "date-fns";
import Discord from "../based/Discord";

export default function Speaking() {
  const { toast } = useToast();
  const [state, dispatch] = useReducer(reducer, initStates);
  const audioSrc = "/media/test.mp3";
  const [menuSelected, setMenuSelected] = useState(1);

  useEffect(() => {}, []);

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

      <main className="flex-1 p-6">
        <div className="grid gap-6">
          {/* <section className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            1221
            <audio controls>
              <source src={audioSrc} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </section>
           */}
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
