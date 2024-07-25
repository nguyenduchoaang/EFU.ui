import { useState, useReducer, useEffect, useRef } from "react";
import styled from "styled-components";
import { useToast } from "../components/ui/use-toast";
import { DataMenuSpeaking } from "./Data";
import reducer, { initStates } from "./reducer/reducer";
import { SET_MENU } from "./reducer/action";
import { sub } from "date-fns";
export default function Listen() {
  const { toast } = useToast();
  const [state, dispatch] = useReducer(reducer, initStates);

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
          <div class="flex items-center justify-between">
            <div class="space-y-1">
              <h2 class="text-2xl font-semibold tracking-tight">Listen Now</h2>
              <p class="text-sm text-muted-foreground">
                Top picks for you. Updated daily.
              </p>
            </div>
          </div>
          <div
            data-orientation="horizontal"
            role="none"
            class="shrink-0 bg-border h-[1px] w-full "
          ></div>
          <div
            style={{ overflowX: "scroll" }}
            className="h-full w-full rounded-[inherit]"
          >
            <div
              style={{ minWidth: "100%", display: "flex" }}
              className="flex space-x-4 pb-4"
            >
              <div className="item space-y-3">
                <div className=" w-[250px]">
                  <span data-state="closed">
                    <div className="overflow-hidden rounded-md">
                      <img
                        alt="React Rendezvous"
                        loading="lazy"
                        width="250"
                        height="330"
                        src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&w=256&q=75"
                        decoding="async"
                        data-nimg="1"
                        className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                      ></img>
                    </div>
                  </span>
                </div>
                <div class="space-y-1 text-sm">
                  <h3 class="font-medium leading-none">React Rendezvous</h3>
                  <p class="text-xs text-muted-foreground">Ethan Byte</p>
                </div>
              </div>
              <div className="item space-y-3">
                <div className=" w-[250px]">
                  <span data-state="closed">
                    <div className="overflow-hidden rounded-md">
                      <img
                        alt="React Rendezvous"
                        loading="lazy"
                        width="250"
                        height="330"
                        src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&w=256&q=75"
                        decoding="async"
                        data-nimg="1"
                        className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                      ></img>
                    </div>
                  </span>
                </div>
                <div class="space-y-1 text-sm">
                  <h3 class="font-medium leading-none">React Rendezvous</h3>
                  <p class="text-xs text-muted-foreground">Ethan Byte</p>
                </div>
              </div>
              <div className="item space-y-3">
                <div className=" w-[250px]">
                  <span data-state="closed">
                    <div className="overflow-hidden rounded-md">
                      <img
                        alt="React Rendezvous"
                        loading="lazy"
                        width="250"
                        height="330"
                        src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&w=256&q=75"
                        decoding="async"
                        data-nimg="1"
                        className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                      ></img>
                    </div>
                  </span>
                </div>
                <div class="space-y-1 text-sm">
                  <h3 class="font-medium leading-none">React Rendezvous</h3>
                  <p class="text-xs text-muted-foreground">Ethan Byte</p>
                </div>
              </div>
              <div className="item space-y-3">
                <div className=" w-[250px]">
                  <span data-state="closed">
                    <div className="overflow-hidden rounded-md">
                      <img
                        alt="React Rendezvous"
                        loading="lazy"
                        width="250"
                        height="330"
                        src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&w=256&q=75"
                        decoding="async"
                        data-nimg="1"
                        className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                      ></img>
                    </div>
                  </span>
                </div>
                <div class="space-y-1 text-sm">
                  <h3 class="font-medium leading-none">React Rendezvous</h3>
                  <p class="text-xs text-muted-foreground">Ethan Byte</p>
                </div>
              </div>
              <div className="item space-y-3">
                <div className=" w-[250px]">
                  <span data-state="closed">
                    <div className="overflow-hidden rounded-md">
                      <img
                        alt="React Rendezvous"
                        loading="lazy"
                        width="250"
                        height="330"
                        src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&w=256&q=75"
                        decoding="async"
                        data-nimg="1"
                        className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                      ></img>
                    </div>
                  </span>
                </div>
                <div class="space-y-1 text-sm">
                  <h3 class="font-medium leading-none">React Rendezvous</h3>
                  <p class="text-xs text-muted-foreground">Ethan Byte</p>
                </div>
              </div>
            </div>
          </div>
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
