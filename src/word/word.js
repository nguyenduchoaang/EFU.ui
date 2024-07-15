import { useState, useReducer, useEffect } from "react";
import { Button } from "../components/ui/button";

import { Input } from "../components/ui/input";
import DropdownMenu from "../based/Dropdown";
import { DataMenu, DataCategory, ButtonData } from "./Data";
import reducer, { initState } from "./wordReducer/reducer";
import { SET_MENU, SET_CATEGORY } from "./wordReducer/action";
import { Card, CardContent } from "../components/ui/card";
import styled from "styled-components";

export default function Word() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { selectedCategory, categories, selectedMenu, selectedLevel } = state;

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
            {Array.from({ length: 10 }).map((_, index) => (
              <Card className="relative overflow-hidden rounded-lg group">
                <CardContent className="h-auto p-0 ">
                  <div className="card_header ">
                    <STT className="bg-adj">1</STT>
                    <TagName className="bg-adj">New</TagName>
                  </div>
                  <div className="card_img mt-3 flex justify-center items-center rounded-md w-full h-auto object-cover">
                    <img
                      src="http://www.clipartbest.com/cliparts/Kij/Xg6/KijXg6k4T.png"
                      alt="Serendipity"
                      className="rounded-md w-[120px] h-auto object-cover"
                    />
                  </div>

                  <div className="card_content p-6 space-y-4">
                    <h3 className="text-2xl ">
                      <div className="font-bold">Engineer</div>
                      <div className="space-x-2 text-sm">/ˌserənˈdipədē/</div>
                    </h3>
                    <p className="font-bold text-color3">Kỹ sư</p>
                    <p className="text-muted-foreground italic">
                      Someone who designs or builds structures, machines, or
                      system
                    </p>
                  </div>
                  <div className="card_example bg-adj w-full p-3">
                    <p className="example_english italic">
                      Gustave Eiffel was a French civil{" "}
                      <strong>engineer</strong> and architect.
                    </p>
                    <p className="example_vietnamese italic mt-3">
                      Gustave Eiffel là một <strong>kỹ sư</strong> dân dụng và
                      kiến trúc sư người Pháp.
                    </p>
                  </div>
                  <div
                    className="button_wrapper flex gap-2 bg-color3  justify-between hidden  group-hover:flex
                overflow-x-auto scrollbar-hide absolute bottom-0 w-full  p-2
                "
                  >
                    {ButtonData.map((item, index) => (
                      <Button
                        key={item.id}
                        variant="outline"
                        style={
                          {
                            // borderRadius:
                            //   index === 0
                            //     ? "0 12px 0 0"
                            //     : index === ButtonData.length - 1
                            //     ? "12px 0 0 0"
                            //     : "12px 12px 0 0 ",
                          }
                        }
                        className="button_action px-4 py-2  bg-background  hover:bg-adj hover:text-black-foreground"
                        // className={`button_action px-4 py-2 bg-background hover:bg-adj hover:text-adj-foreground ${
                        //   index === 0 ? "first-button" : "other-buttons"
                        // }`}
                      >
                        {item.title}
                      </Button>
                    ))}
                  </div>
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
  .button_wrapper {
    /* transform: translateY(-20%);
    transition: all 1s; */
    /* border-radius: 12px 12px 0 0; */
  }
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
`;

const STT = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  width: 24px;
  text-align: center;
  color: #fff;
  padding: 0.25rem 0.5rem;
  /* background-color: red; */
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 999px;
`;
