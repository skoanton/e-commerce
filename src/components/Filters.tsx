import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FiltersProps = {};

const Filters = ({}: FiltersProps) => {
  return (
    <section className="flex gap-2 justify-center md:justify-end md:mr-3">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Price" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="relevance">Most Relevance</SelectItem>
          <SelectItem value="low-high">Price (low to high)</SelectItem>
          <SelectItem value="high-low">Price (high to low)</SelectItem>
          <SelectItem value="high-low">Popularity (ascending)</SelectItem>
          <SelectItem value="high-low">Alphabetic (a-z)</SelectItem>
          <SelectItem value="high-low">Alphabetic (z-a)</SelectItem>
          <SelectItem value="high-low">Rating (ascending)</SelectItem>
        </SelectContent>
      </Select>
    </section>
  );
};

export default Filters;
