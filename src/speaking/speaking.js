import { useState, useReducer, useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import styled from "styled-components";
import { useToast } from "../components/ui/use-toast";
import { HeaderIcon } from "../based/icon/configIcon";
import { DataMenuSpeaking } from "./Data";
import { Link } from "react-router-dom";
export default function Speaking() {
  const { toast } = useToast();

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
                          class="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start"
                          fdprocessedid="rfp2gh"
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
          {/* <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">
            Luyện nghe
          </h2>
          <div class="space-y-1">
            <button
              class="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start"
              fdprocessedid="fz0we9"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2 h-4 w-4"
              >
                <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
                <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
                <circle cx="12" cy="12" r="2"></circle>
                <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
                <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
              </svg>
              Nghe nhạc
            </button>
            <button
              class="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start"
              fdprocessedid="h27fze"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2 h-4 w-4"
              >
                <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                <rect width="7" height="7" x="3" y="14" rx="1"></rect>
              </svg>
              Nghe chủ đề
            </button>
          </div> */}
        </div>
      </aside>

      <main className="flex-1 p-6">
        <div className="grid gap-6">
          <section className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            1221
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
