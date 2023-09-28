import Header from "./components/Header";
interface RestaurantLayoutProps {
  children: React.ReactNode;
  params: { slug: string };
}

const RestaurantLayout = ({ children, params }: RestaurantLayoutProps) => {
  return (
    <main>
      <Header name={params.slug} />
      <div className="flex mx-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </main>
  );
};

export default RestaurantLayout;
