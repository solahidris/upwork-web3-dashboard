import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/router";
import { Home, LayoutDashboard, CircleDollarSign, MoreHorizontalIcon, MenuIcon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet";

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

  const [showMobileMenu, setShowMobileMenu] = useState(true);


  return (
    <>
    {showMobileMenu ? 
      <div className="fixed flex justify-between items-center h-20 w-full border-b">
        <Link href="/" className="flex items-center gap-4 ml-3">
          <Image src="/favicon.ico" width={100} height={100} alt="headlogo" className="w-8 h-8" />
          <span className="font-semibold">Web3Brand</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="mr-4"><MenuIcon /></Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <p className="text-right">
                  Name
                </p>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <p className="text-right">
                  Username
                </p>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      :
      <p>dont show mobile menu</p>
    }

    {/* <div className="bg-red-300 lg:min-w-[240px] flex flex-col justify-between border-r p-8 min-h-screen fixed">
      
      <div className="flex flex-col">
        <Link href="/" className="flex items-center gap-4 ml-3">
          <Image src="/favicon.ico" width={100} height={100} alt="headlogo" className="w-8 h-8" />
          <span className="font-semibold">Web3Brand</span>
        </Link>
        <div className="flex flex-col gap-4 mt-16">
          {menuList.map((item, index) => (
            <Button key={index} variant="ghost"className={`flex justify-start py-6 ${currentPage === item.link ? isDarkMode ? "bg-gray-700" : "bg-gray-100" : ""}`}>
              <Link className="flex gap-4 items-center w-full" href={item.link}>
                {item.icon}<p>{item.text}</p>
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
          <DropdownMenuContent className={`mr-20 mb-2 border p-3 ${isDarkMode && "bg-gray-900 border-gray-500 text-gray-300 hover:text-gray-100/80"}`}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Team</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div> */}

    </>
  )
};

export default NavigationMenuMobile;