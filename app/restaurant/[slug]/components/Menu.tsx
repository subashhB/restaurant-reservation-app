import { Item } from "@prisma/client";
import MenuCard from "./MenuCard";

interface MenuProps {
  menu: Item[];
}

const Menu = ({ menu }: MenuProps) => {
  return (
    <main className="bg-white mt-5">
      <div className="mt-4 pb-1 mb-1">
        <h1 className="font-bold text-4xl">Menu</h1>
      </div>

      <div className="flex flex-wrap justify-between">
        {menu.length ? (
          menu.map((item) => <MenuCard key={item.id} item={item} />)
        ) : (
          <p>The restaurant has no Menu.</p>
        )}
      </div>
    </main>
  );
};

export default Menu;
