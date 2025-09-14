import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo-black.svg";
import Be from "../icons/BeIcon";
import DribbleIcon from "../icons/DribbleIcon";
import FbIcon from "../icons/FbIcon";
import InstaIcon from "../icons/InstaIcon";
import LinkdinIcon from "../icons/LinkedinIcon";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full bg-primary py-16  ">
      <div className="max-w-[1200px] w-full flex  flex-col items-end justify-between mx-4 md:mx-16 lg:mx-16">
        <div className="flex w-full sm:items-start md:items-center justify-between">
          <Link href="/">
            <Image src={Logo} alt="Logo" />
          </Link>
          <p className="text-background-dark font-general text-xs">
            © All rights reserved to Ena Ema Technologies
          </p>
          <div className=" gap-5 items-center md:flex hidden">
            <Link href="/">
              <LinkdinIcon />
            </Link>
            <Link href="/">
              <FbIcon />
            </Link>
            <Link href="/">
              <InstaIcon />
            </Link>
            <Link href="/">
              <Be />
            </Link>
            <Link href="/">
              <DribbleIcon />
            </Link>
          </div>
        </div>
        <div className=" gap-5 items-center md:hidden flex">
          <Link href="/">
            <LinkdinIcon />
          </Link>
          <Link href="/">
            <FbIcon />
          </Link>
          <Link href="/">
            <InstaIcon />
          </Link>
          <Link href="/">
            <Be />
          </Link>
          <Link href="/">
            <DribbleIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}
