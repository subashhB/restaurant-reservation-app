const Reviews = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        What 100 People are saying
      </h1>
      <div>
        {/* Review Card */}
        <div className="border-b p-7 mb-7">
          <div className="flex">
            <div className="w-1/6 flex flex-col items-center">
              <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                <h2 className="text-white text-2xl">SB</h2>
              </div>
              <p className="text-center">Subash Baidya</p>
            </div>
            <div className="ml-10 w-5/6">
              <div className="flex items-center">
                <div className="flex mr-5">*****</div>
              </div>
              <div className="mt-5">
                <p className="text-light text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Commodi, aliquid blanditiis repellendus facere dolorem,
                  doloribus nostrum, reprehenderit veritatis odit mollitia vel
                  provident recusandae deserunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
