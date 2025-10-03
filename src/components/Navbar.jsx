
const Navbar = () => {
  return (

    <nav className="flex justify-between items-center p-4 bg-white shadow ">
    <h1 className="text-xl font-bold text-[#1E1E1E]">CS - Ticket System</h1>
    <div className="flex gap-6 items-center">
      <a href="#">Home</a>
      <a href="#">FAQ</a>
      <a href="#">Changelog</a>
      <a href="#">Blog</a>
      <a href="#">Download</a>
      <a href="#">Contact</a>
      <button className=" bg-gradient-to-r from-[#632EE3] to-[#9F62F2] cursor-pointer text-white px-4 py-2 rounded-lg"> +  New Ticket</button>
    </div>
    </nav>

  );
};

export default Navbar;