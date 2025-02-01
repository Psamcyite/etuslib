import Link from "next/link";
import Image from "next/image";
import { signOut } from "../auth"; // Adjust the path as necessary
import { Button } from "./ui/button";
import UserAvatar from "./UserAvatar";

const Header = () => {
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="/assets/images/EtusLib-logo.png" alt="logo" width={40} height={40} />
      </Link>

      <ul className="flex flex-row items-center gap-8">
        <li>
          <form
            action={async () => {
              "use server";

              await signOut();
            }}
            className="mb-10"
          >
            <UserAvatar />
          </form>
        </li>
      </ul>
    </header>
  );
};

export default Header;
