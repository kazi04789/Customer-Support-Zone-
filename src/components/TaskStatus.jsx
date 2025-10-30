import React from 'react';
const TaskStatus = ({ inProgress, resolved, onComplete }) => {
  return (
     <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold mb-4">Task Status</h2>
        {inProgress.length === 0 ? (
          <p className="text-sm text-gray-500">No tasks in progress.</p>
        ) : (
          inProgress.map((ticket) => (
            <div
              key={ticket.id}
              className="flex justify-between items-center bg-green-100 p-3 rounded mb-2"
            >
              <span>{ticket.title}</span>
              <button
                onClick={() => onComplete(ticket.id)}
                className="btn btn-success btn-sm"
              >
                Complete
              </button>
            </div>
          ))
        )}
      </div>

        
      <div>
        <h2 className="text-lg font-semibold mb-4">Resolved Task</h2>
        {resolved.length === 0 ? (
          <p className="text-sm text-gray-500">No resolved tasks yet.</p>
        ) : (
          resolved.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-blue-100 p-3 rounded mb-2 text-gray-700"
            >
              {ticket.title}
            </div>
          ))
        )}
      </div>
    </div>
  );
  
};

export default TaskStatus;