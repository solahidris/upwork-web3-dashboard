import Link from "next/link";
import { Button } from "./ui/button";

const NavigationMenu = () => {
  return(
    <div className="flex gap-2">
      <Link href={`/`}><Button>Home</Button></Link>
      <Link href={`/dashboard`}><Button>Dashboard</Button></Link>
      <Link href={`/token`}><Button>Token</Button></Link>
    </div>
  )
};

export default NavigationMenu;