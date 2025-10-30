
import React from 'react';


const TicketCard = ({ ticket, onAdd }) => {
   const statusColors = {
        "In-Progress": "badge-warning text-black",
    "Open": "badge-success text-gray",     
  };
  return (
     <div className="bg-white shadow-md rounded p-4 w-[350px] flex flex-col justify-between border border-gray-100 ">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h3 className="font-lg font-semibold text-sm mb-1">{ticket.title}</h3>
          <span className={`badge ${statusColors[ticket.status]} text-xs font-semibold px-3 py-1 rounded-full flex items-center justify-center text-black whitespace-nowrap`}>
            {ticket.status.toUpperCase()}
          </span>
        </div>
     
        <p className="text-xs mt-2">{ticket.description}</p>

        <div className="flex justify-between mt-3 text-xs text-gray-500">
          <span>
            #{ticket.id} • {ticket.customer}
          </span>
          <span>{ticket.createdAt}</span>
        </div>

        <button onClick={onAdd} className="btn btn-outline btn-sm mt-3">
          Add to Task
        </button>
      </div>
    </div>
  );
};

export default TicketCard;