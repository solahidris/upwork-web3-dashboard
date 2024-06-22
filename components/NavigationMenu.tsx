import Link from "next/link";

const NavigationMenu = () => {
  return(
    <div className="flex gap-2 pt-2">
      <Link href={`/`}>Home</Link>
      <Link href={`/dashboard`}>Dashboard</Link>
      <Link href={`/token`}>Token</Link>
    </div>
  )
};

export default NavigationMenu;