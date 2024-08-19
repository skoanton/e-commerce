import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CloudDownload, Star } from "lucide-react";
type ProductCardProps = {};

export default function ProductCard({}: ProductCardProps) {
  return (
    <>
      <Card>
        <CardHeader className="pb-0">
          <img src="./test.png" alt="" />
          <CardDescription className="overflow-hidden text-ellipsis whitespace-nowrap">
            One of the biggest creations yet and this is huge news for the
            community and thats cool
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-0">
          <div className="flex">
            <Star className=" w-4 h-4 fill-black" />
            <Star className=" w-4 h-4 fill-black" />
            <Star className=" w-4 h-4 fill-black" />
            <Star className=" w-4 h-4" />
            <Star className=" w-4 h-4" />
            <p className="text-sm">(432)</p>
          </div>

          <p className="text-green-500 font-bold">900 SEK</p>
        </CardContent>
        <CardFooter className="pb-6 flex gap-1">
          <CloudDownload className="w-4 h-4" />
          <p className="text-sm">Digital Download</p>
        </CardFooter>
      </Card>
    </>
  );
}
