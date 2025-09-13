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
    <footer className="flex items-center justify-center w-full bg-primary py-16">
      <div className="max-w-[1200px] w-full flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="Logo" />
        </Link>
        <p className="text-background-dark font-general text-xs">
          © All rights reserved to Ena Ema Technologies
        </p>
        <div className="flex gap-5 items-center">
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
