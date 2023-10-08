interface HeaderProps {
  image: string;
  name: string;
}

const Header = ({ image, name }: HeaderProps) => {
  return (
    <div>
      <h3 className="font-bold">You&apos;re almost done!</h3>
      <div className="mt-5 flex">
        <img className="w-32 h-18 rounded" src={image} alt="" />
        <div className="ml-4">
          <h1 className="font-bold text-3xl">{name}</h1>
          <div className="flex mt-3">
            <p className="mr-6">Tue, 22, 2023</p>
            <p className="mr-6">7:30 pm</p>
            <p className="mr-6">3 people</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
