import { Input } from "@/components/ui/input";
import { Heart, Menu, Search, ShoppingBasket } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import SignInDialog from "./SignInDialog";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  return (
    <>
      <nav className="grid grid-cols-2 gap-5 p-2 md:grid-cols-4">
        <h1 className="text-2xl font-bold uppercase text-orange-500 ">
          Not a shop
        </h1>
        <section className="md:order-3 justify-self-end">
          <ul>
            <li>
              <div>
                <ul className="flex gap-5 items-center">
                  <li>
                    <SignInDialog />
                  </li>
                  <li>
                    <Heart className="w-8 h-8" />
                  </li>
                  <li>
                    <ShoppingBasket className="w-8 h-8" />
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
        <section className="col-span-2">
          <ul>
            <li className="flex gap-3 items-center">
              <Button variant={"link"}></Button>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Menu className="w-8 h-8" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Categories</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Music</DropdownMenuItem>
                  <DropdownMenuItem>E-books</DropdownMenuItem>
                  <DropdownMenuItem>Other stuff</DropdownMenuItem>
                  <DropdownMenuItem>Read about this</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className=" w-full relative">
                <Input placeholder="Search for a product" />
                <div className="absolute right-2 bottom-2">
                  <Search />
                </div>
              </div>
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
}
