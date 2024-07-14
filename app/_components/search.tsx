import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="flex gap-2">
      <Input
        placeholder="Procurar Restaurantes"
        className="rounded-full border-none bg-[#f4f4f5]"
      />
      <Button size="icon" className="h-19 w-10 bg-primary">
        <SearchIcon size={20} />
      </Button>
    </div>
  );
};

export default Search;
