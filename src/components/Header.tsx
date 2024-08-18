import { Input } from "@/components/ui/input";
import { Heart, Menu, Search, ShoppingBasket } from "lucide-react";
import { Button } from "./ui/button";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  return (
    <>
      <nav className="flex flex-col justify-between gap-5 p-2 md:flex-row">
        <h1 className="text-2xl font-bold uppercase text-orange-500 md:order-1">
          Not a shop
        </h1>
        <section className="md:order-3">
          <ul>
            <li>
              <div>
                <ul className="flex gap-5 items-center">
                  <li>
                    <Button>Sign in</Button>
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
        <section className="md:order-2 md:flex-grow">
          <ul>
            <li className="flex gap-3 items-center">
              <Menu className="w-8 h-8" />

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
