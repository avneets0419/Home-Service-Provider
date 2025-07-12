import React from "react";
import "./SupportTable.css";

const dummySupportTickets = [
  {
    id: "SUP001",
    name: "Ravi Sharma",
    email: "ravi.sharma@example.com",
    phone: "+91-9876543210",
    service: "Emergency Plumbing Repair",
    query: "My kitchen sink is leaking. Need urgent help!",
  },
  {
    id: "SUP002",
    name: "Aarti Mehta",
    email: "aarti.mehta@example.com",
    phone: "+91-9876509876",
    service: "HVAC System Maintenance",
    query: "AC is not cooling properly. Can someone check?",
  },
  {
    id: "SUP003",
    name: "Rohit Verma",
    email: "rohitv123@example.com",
    phone: "+91-9087654321",
    service: "Custom Carpentry Work",
    query: "Need a custom bookshelf. Can I share a design?",
  },
];

const SupportTable = () => {
  return (
    <div className="support-wrapper">
      <h1>Customer Support Tickets</h1>
      <div className="table-container">
        <table className="support-table">
          <thead>
            <tr>
              <th>Support ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Query</th>
              <th>Reply</th>
            </tr>
          </thead>
          <tbody>
            {dummySupportTickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.name}</td>
                <td>{ticket.email}</td>
                <td>{ticket.phone}</td>
                <td>{ticket.service}</td>
                <td>{ticket.query}</td>
                <td>
                  <a
                    href={`mailto:${ticket.email}?subject=Re: Support Ticket ${ticket.id}&body=Hi ${ticket.name},%0D%0A%0D%0ARegarding your query: "${ticket.query}"%0D%0A%0D%0A`}
                    className="reply-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reply
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupportTable;
