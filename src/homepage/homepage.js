import { useEffect, useState, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoading } from "../based/context/LoadingContext";
import Img from "../assets/banner.jpg";
import { Color } from "../based/color";
import { Button } from "../components/ui/button";
export default function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {}, []);

  return (
    <>
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    English For You
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Nền tảng hỗ trợ tiếng anh dành cho người Việt, luyện nói,
                    luyện nghe, luyện tất tần tật khi đến với tụi mình ! ^^
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    style={{ backgroundColor: Color.color2 }}
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Bắt đầu
                  </Button>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Tìm hiểu thêm
                  </Link>
                </div>
              </div>
              <img
                src={Img}
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
          <svg
            style={{ position: "absolute", bottom: "0", zIndex: "-999" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,202.7C672,235,768,245,864,250.7C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Empowering Businesses to Thrive
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Acme Inc., we believe in the power of technology to
                  transform businesses. Our comprehensive platform provides the
                  tools and infrastructure you need to build, deploy, and scale
                  your digital experiences with ease.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Seamless Integration
                      </h3>
                      <p className="text-muted-foreground">
                        Easily connect your existing tools and services to our
                        platform for a streamlined workflow.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Scalable Infrastructure
                      </h3>
                      <p className="text-muted-foreground">
                        Our cloud-based infrastructure scales dynamically to
                        meet your growing needs, without the hassle of managing
                        servers.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Powerful Analytics</h3>
                      <p className="text-muted-foreground">
                        Gain valuable insights into your digital performance
                        with our advanced analytics and reporting tools.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </>
  );
}
