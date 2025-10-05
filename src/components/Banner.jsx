

const Banner = () => {
  return (
    <div className="grid grid-cols-2 gap-[20px] my-6 container mx-auto px-8 py-4 justify-between items-center">
      <div className=" m-h bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-6 rounded-lg text-center h-[150px]">
        <h2 className="text-xl">In-Progress</h2>
        <p className="text-3xl font-bold">0</p>

      </div>
      <div className="bg-gradient-to-r from-[#54CF68] to-[#00827A] text-white p-6 rounded-lg text-center h-[150px]">
        <h2 className="text-xl">Resolved</h2>
        <p className="text-3xl font-bold">0</p>

      </div>
    </div>
  );
};

export default Banner;