import Header from "./components/Header";
interface RestaurantLayoutProps {
  children: React.ReactNode;
}

const RestaurantLayout = ({ children }: RestaurantLayoutProps) => {
  return (
    <main>
      <Header />
      <div className="flex mx-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </main>
  );
};

export default RestaurantLayout;
