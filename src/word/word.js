import { useState, useReducer } from "react";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import {
  Collapsible,
  CollapsibleItem,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../components/ui/collapsible";
import { Input } from "../components/ui/input";
import { WordIcon } from "../based/icon/ConfigIcon";
import DropdownMenu from "../based/Dropdown";
import { DataMenu } from "./Data";
import reducer, { initState } from "./wordReducer/reducer";
import { SET_MENU } from "./wordReducer/action";
export default function Word() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { selectedMenu, selectedLevel } = state;
  return (
    <div
      style={{ paddingTop: "88px" }}
      className="flex min-h-screen w-full bg-background"
    >
      <aside className="hidden w-1/4 border-r bg-background p-6 md:flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium">Word Categories</h3>
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
          <div className="grid gap-2">
            <h1 className="text-3xl font-bold">Serendipity</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>/ˌserənˈdipədē/</span>
              <Separator orientation="vertical" />
              <Button variant="ghost" size="icon">
                <WordIcon.Volume className="h-5 w-5" />
                <span className="sr-only">Play pronunciation</span>
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            <p>
              The occurrence and development of events by chance in a happy or
              beneficial way.
            </p>
            <div className="grid gap-2">
              <h3 className="text-lg font-medium">Example Sentence</h3>
              <p>
                It was pure serendipity that I happened to be in the right place
                at the right time to witness the stunning sunset.
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-medium">Image</h3>
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Serendipity"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
