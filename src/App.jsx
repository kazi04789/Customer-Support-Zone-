import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  // Load tickets.json
  useEffect(() => {
    fetch("public/tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .catch((error) => console.error("JSON Load Error:", error));
  }, []);

  // Add to Task
  const handleAddToTask = (ticket) => {
    if (inProgress.find((t) => t.id === ticket.id)) {
      toast.warning("This ticket is already in progress!");
      return;
    }
    setInProgress([...inProgress, ticket]);
    toast.success(`${ticket.title} added to Task Status!`);
  };

  //  Mark as complete
  const handleComplete = (id) => {
    const completedTicket = inProgress.find((t) => t.id === id);
    if (!completedTicket) return;

    setResolved([...resolved, completedTicket]);
    setInProgress(inProgress.filter((t) => t.id !== id));
    toast.success(`${completedTicket.title} marked as resolved!`);
  };

  return (
    <>
      <Navbar />
      <Banner inProgressCount={inProgress.length} resolvedCount={resolved.length} />

      <div className="container mx-auto px-8 py-8 flex flex-col lg:flex-row gap-4 items-start">
       

        <div className="flex-1">
           <h2 className="text-xl font-semibold mb-4">Customer Tickets</h2>
          <div className="grid sm:grid-cols-2 gap-4 ">
            {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onAdd={() => handleAddToTask(ticket)}
            />
          ))}
          </div>
        </div>
     
       <div className="w-full lg:w-[350px] shrink-0">
          <TaskStatus
        inProgress={inProgress}
        resolved={resolved}
        onComplete={handleComplete}
      />
</div>
     
 </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={1500} />
    </>
  );
}

export default App;
