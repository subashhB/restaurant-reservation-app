const Form = () => {
  return (
    <div className="mt-10 flex-flex-wrap justify-between w-[660px]">
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 text-black bg-white"
        placeholder="First Name"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 text-black bg-white"
        placeholder="Last Name"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 text-black bg-white"
        placeholder="Phone Number"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 text-black bg-white"
        placeholder="E-mail"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 text-black bg-white"
        placeholder="Occassion (optional)"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4 text-black bg-white"
        placeholder="Requests(optional)"
      />
      <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
        Complete Reservation
      </button>
      <p className="mt-4 text-sm">Your privacy is protected.</p>
    </div>
  );
};

export default Form;
