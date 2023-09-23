const ReservationCard = () => {
  return (
    <div className="fixed w-[20%] bg-white rounded p-3 shadow ">
      <div className="text-center border-b pb-2 font-bold">
        <h4 className="mr-7 text-lg">Make a Reservation</h4>
      </div>
      <div className="my-3 flex flex-col bg-white">
        <label htmlFor="">Party Size</label>
        <select name="" className="py-3 border-b font-light bg-white  ">
          <option value="" className="bg-white">
            1 person
          </option>
          <option value="" className="bg-white">
            2 people
          </option>
        </select>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Date</label>
          <input type="text" className="py-3 border-b font-light bg-white" />
        </div>
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Time</label>
          <select className="py-3 border-b font-light bg-white">
            <option value="">7:30 am</option>
            <option value="">9:30 am</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
          Find a Time
        </button>
      </div>
    </div>
  );
};

export default ReservationCard;
