const AuthModalInputs = () => {
  return (
    <div>
      <div className="my-3 flex-justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%] bg-white text-black"
          placeholder="First Name"
        />
        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%] bg-white text-black"
          placeholder="Last Name"
        />
      </div>
      <div className="my-3 flex-justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-[98%] bg-white text-black"
          placeholder="E-mail Address"
        />
      </div>
      <div className="my-3 flex-justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%] bg-white text-black"
          placeholder="Phone No."
        />
        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%] bg-white text-black"
          placeholder="City"
        />
      </div>
      <div className="my-3 flex-justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-[98%] bg-white text-black"
          placeholder="Password"
        />
      </div>
    </div>
  );
};

export default AuthModalInputs;
