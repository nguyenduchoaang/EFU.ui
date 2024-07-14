import { useEffect, useState } from "react";
import Common from "./Common";
import { useLoading } from "./context/LoadingContext";
import { Button } from "../components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "../components/ui/sheet";
import { Link } from "react-router-dom";
import { MenuHeader } from "./menuConfig";
import { HeaderIcon } from "./icon/configIcon";
import { Color } from "./color";
export default function Header() {
  const { showLoading, hideLoading } = useLoading();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const accessToken = Common.CheckToken();
    const userName = sessionStorage.getItem("name");
    if (accessToken) {
      setIsLoggedIn(true);
      setName(userName);
    } else {
      setIsLoggedIn(false);
      setName("");
    }
  }, [isLoggedIn]);

  const fullScreenHeader = () => {
    return (
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
        {MenuHeader.map((item) => (
          <Link
            to={item.link}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    );
  };

  const ScreenMobile = () => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="sm:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px]">
          <div className="flex flex-col gap-6 p-6">
            <Link to="/" className="flex items-center gap-2 font-bold">
              <HeaderIcon.Logo fill={Color.color3} />
              <span className="text-lg">Acme Inc</span>
            </Link>
            <nav className="grid gap-4">
              {MenuHeader.map((item) => (
                <Link
                  to={item.link}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2">
              <Button variant="outline">Đăng ký</Button>
              <Button>Đăng nhập</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  };

  return (
    <header className="flex items-center justify-between bg-background px-4 py-3 shadow-sm sm:px-6 md:py-4">
      <Link href="#" className="flex items-center gap-2 font-bold">
        <HeaderIcon.Logo fill={Color.color3} />

        <span className="text-lg sm:text-xl">English For You</span>
      </Link>
      {fullScreenHeader()}
      <div className="flex items-center gap-4">
        <Button variant="outline" className="hidden sm:inline-flex">
          Đăng ký
        </Button>
        <Button
          style={{ backgroundColor: "#1363DF" }}
          className="hidden sm:inline-flex"
        >
          Đăng nhập
        </Button>
        {ScreenMobile()}
      </div>
    </header>
  );
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#47B5FF"
      stroke="#47B5FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
}
