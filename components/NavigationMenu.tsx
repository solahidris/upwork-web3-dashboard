import { LuMenu } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/router";
import {
  Home,
  LayoutDashboard,
  CircleDollarSign,
  MoreHorizontalIcon,
  MenuIcon,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useIsMobile from "@/hooks/useIsMobile";
import DarkModeButton from "@/components/DarkModeButton";

const NavigationMenuMobile = () => {
  const { isDarkMode } = useTheme();
  const router = useRouter();
  const currentPage = router.asPath;
  const menuList = [
    { text: "Home", link: "/", icon: <Home /> },
    { text: "Dashboard", link: "/dashboard", icon: <LayoutDashboard /> },
    { text: "Token", link: "/token", icon: <CircleDollarSign /> },
  ];
  const userEmail = "hello@example.com";

  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <div className={`fixed z-[50] flex justify-between items-center h-20 w-full border-b shadow ${isDarkMode ? "border-gray-900 bg-gray-900" : "bg-white"}`}>
          <Link href="/" className="flex items-center gap-4 ml-3">
            <Image
              src="/favicon.ico"
              width={100}
              height={100}
              alt="headlogo"
              className="w-8 h-8"
            />
            <span className="font-semibold">Web3Brand</span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className={`border mr-4 px-2 ${isDarkMode && "bg-gray-900 text-gray-200 border-gray-700"}`}>
                <LuMenu className="h-6 w-6"/>
              </Button>
            </SheetTrigger>
            <SheetContent
              className={`border z-[100] ${
                isDarkMode &&
                "bg-gray-900 border-0 text-gray-300 hover:text-gray-100/80"
              }`}
            >
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <div className="flex flex-col gap-4 mt-8">
                    {menuList.map((item, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className={`flex justify-start py-6 ${
                          currentPage === item.link
                            ? isDarkMode
                              ? "bg-gray-700"
                              : "bg-gray-100"
                            : ""
                        }`}
                      >
                        <Link
                          className="flex gap-4 items-center w-full"
                          href={item.link}
                        >
                          {item.icon}
                          <p>{item.text}</p>
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <DarkModeButton />
                  <div className="flex justify-between gap-4">
                    <p>{userEmail}</p>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <MoreHorizontalIcon />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className={`mr-6 mb-2 border p-3 ${
                          isDarkMode &&
                          "bg-gray-900 border-gray-500 text-gray-300 hover:text-gray-100/80"
                        }`}
                      >
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">
                          Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          Billing
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          Team
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          Subscription
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      ) : (
        <div className={`lg:min-w-[240px] flex flex-col justify-between border-r p-8 min-h-screen fixed shadow ${isDarkMode && "border-gray-900 bg-gray-900"}`}>
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-4 ml-3">
              <Image
                src="/favicon.ico"
                width={100}
                height={100}
                alt="headlogo"
                className="w-8 h-8"
              />
              <span className="font-semibold">Web3Brand</span>
            </Link>
            <div className="flex flex-col gap-4 mt-16">
              {menuList.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`flex justify-start py-6 ${
                    currentPage === item.link
                      ? isDarkMode
                        ? "bg-gray-700"
                        : "bg-gray-100"
                      : ""
                  }`}
                >
                  <Link
                    className="flex gap-4 items-center w-full"
                    href={item.link}
                  >
                    {item.icon}
                    <p>{item.text}</p>
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <div className="flex justify-between gap-4">
            <p>{userEmail}</p>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreHorizontalIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className={`mr-20 mb-2 border p-3 ${
                  isDarkMode &&
                  "bg-gray-800 border-gray-500 text-gray-300 hover:text-gray-100/80"
                }`}
              >
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Team
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Subscription
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationMenuMobile;
