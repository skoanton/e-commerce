import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FiltersProps = {};

export default function Filters({}: FiltersProps) {
  return (
    <section className="flex gap-2 justify-center md:justify-start md:ml-3">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Price" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="relevance">Most Relevance</SelectItem>
          <SelectItem value="price-low-high">Price (low to high)</SelectItem>
          <SelectItem value="price-high-low">Price (high to low)</SelectItem>
          <SelectItem value="popularity">Popularity (ascending)</SelectItem>
          <SelectItem value="alphabetic-asc">Alphabetic (a-z)</SelectItem>
          <SelectItem value="alphabetic-desc">Alphabetic (z-a)</SelectItem>
          <SelectItem value="rating">Rating (ascending)</SelectItem>
        </SelectContent>
      </Select>
    </section>
  );
}
