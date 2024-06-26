import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/router";
import { Home, LayoutDashboard, CircleDollarSign, MoreHorizontalIcon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const NavigationMenu = () => {

  const { isDarkMode } = useTheme();
  const router = useRouter();
  const currentPage = router.asPath;
  const menuList = [
    { text: "Home", link: "/", icon: <Home /> },
    { text: "Dashboard", link: "/dashboard", icon: <LayoutDashboard /> },
    { text: "Token", link: "/token", icon: <CircleDollarSign /> },
  ];
  const userEmail = "hello@example.com";

  return (
    <div className="min-w-[240px] flex flex-col justify-between border-r p-8 min-h-screen fixed">
      
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
            {/* <Avatar>
              <AvatarImage src="https://ui.shadcn.com/avatars/01.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}
            <MoreHorizontalIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-8 mt-1">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Team</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
};

export default NavigationMenu;