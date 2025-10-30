import vector1 from '../assets/vector1.png';



const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="grid grid-cols-2 gap-[20px] my-6 container mx-auto px-8 py-4 justify-between items-center">
      <div className="relative overflow-hidden bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-6 rounded-lg text-center h-[150px]">
         <img
          src={vector1}
          alt=""
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[160px] opacity-70"
        />
         <img src={vector1}
          alt=""
          className='absolute right-0 top-1/2 -translate-y-1/2 w-[160px] transform -scale-x-100 opacity-70' />

        <h2 className="text-xl">In-Progress</h2>
        <p className="text-3xl font-bold">{inProgressCount}</p>

      </div>
      <div className="relative overflow-hidden bg-gradient-to-r from-[#54CF68] to-[#00827A]  text-white p-6 rounded-lg text-center h-[150px]">
        <img src={vector1} 
        alt=""
         className='absolute left-0 top-1/2 -translate-y-1/2 w-[160px] opacity-100'
         />
         <img src={vector1}
          alt="" 
          className='absolute right-0 top-1/2 -translate-y-1/2 w-[160px] transform -scale-x-100 opacity-70'
          />
        <h2 className="text-xl">Resolved</h2>
        <p className="text-3xl font-bold">{ resolvedCount}</p>

      </div>
    </div>
  );
};

export default Banner;