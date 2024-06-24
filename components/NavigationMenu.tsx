import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/router";

const NavigationMenu = () => {

  const router = useRouter();
  const currentPage = router.asPath;

  return(
    <div className="flex justify-between border-b ">
      <div className="flex gap-2">
        <Link href={`/`}><Button variant="ghost" className={`${currentPage === "/" ? "bg-slate-100" : ""}`}>Home</Button></Link>
        <Link href={`/dashboard`}><Button variant="ghost" className={`${currentPage === "/dashboard" ? "bg-slate-100" : ""}`}>Dashboard</Button></Link>
        <Link href={`/token`}><Button variant="ghost" className={`${currentPage === "/token" ? "bg-slate-100" : ""}`}>Token</Button></Link>
      </div>
      <div className="flex mb-4 gap-4">
        <Input placeholder="Search" className="min-w-[300px]"/>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://ui.shadcn.com/avatars/01.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
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