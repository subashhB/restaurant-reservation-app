const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#0f1f47] to-[#5f6984] ">
      {/* Search Bar */}
      <div className="overflow-hidden rounded text-left text-lg py-3 m-auto flex justify-center">
        <input
          type="text"
          className=" bg-white text-black rounded  mr-3 w-[450px] p-2 "
          placeholder="State, City or Town"
        />
        <button className="bg-red-600 px-9 py-2 rounded text-white">
          Let&apos;s Go
        </button>
      </div>
    </div>
  );
};

export default Header;
