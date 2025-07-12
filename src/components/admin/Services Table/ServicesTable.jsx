import React, { useState } from "react";
import "./ServicesTable.css"; // We'll add basic styles below

const initialServices = [
  {
    tag: "Popular",
    rating: 4.8,
    title: "Emergency Plumbing Repair",
    team: "ProFix Plumbing Team",
    desc: "Fast and reliable emergency plumbing services available 24/7.",
    labels: ["24/7 Available", "Licensed", "Insured", "Emergency Service"],
    price: "$89/hour",
    image:
      "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    tag: "Top Rated",
    rating: 4.9,
    title: "Complete Electrical Installation",
    team: "ProFix Electrical Services",
    desc: "Professional electrical installation and wiring services.",
    labels: ["Certified", "Warranty", "Safety Inspection", "Code Compliant"],
    price: "$125/hour",
    image:
      "https://images.pexels.com/photos/4254161/pexels-photo-4254161.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    tag: "Eco-Friendly",
    rating: 4.7,
    title: "HVAC System Maintenance",
    team: "ProFix HVAC Specialists",
    desc: "Comprehensive HVAC maintenance and repair services.",
    labels: [
      "Energy Efficient",
      "Maintenance Plan",
      "Emergency Repair",
      "Licensed",
    ],
    price: "$95/hour",
    image:
      "https://images.pexels.com/photos/3807276/pexels-photo-3807276.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    tag: "Custom",
    rating: 4.6,
    title: "Custom Carpentry Work",
    team: "ProFix Carpentry",
    desc: "Expert carpentry services including custom furniture.",
    labels: [
      "Custom Work",
      "Quality Materials",
      "Design Consultation",
      "Warranty",
    ],
    price: "$110/hour",
    image:
      "https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const ServicesTable = () => {
  const [services, setServices] = useState(initialServices);

  const handleDelete = (index) => {
    const updated = [...services];
    updated.splice(index, 1);
    setServices(updated);
  };

  const handleEdit = (index) => {
    alert(`Edit service at index: ${index}`);
    // You can implement a modal here
  };

  const handleAddService = () => {
    const newService = {
      tag: "New",
      rating: 4.5,
      title: "Sample New Service",
      team: "ProFix Team",
      desc: "Description for new service",
      labels: ["New", "Test"],
      price: "$100/hour",
      image: "https://via.placeholder.com/100",
    };
    setServices([newService, ...services]);
  };

  return (
    <div className="services-table-container">
      <div className="table-header">
        <h2>Services</h2>
        <button className="add-btn" onClick={handleAddService}>
          + Add Service
        </button>
      </div>

      <table className="services-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Team</th>
            <th>Tag</th>
            <th>Rating</th>
            <th>Price</th>
            <th>Labels</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, idx) => (
            <tr key={idx}>
              <td>
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-img"
                />
              </td>
              <td>{service.title}</td>
              <td>{service.team}</td>
              <td>{service.tag}</td>
              <td>{service.rating}</td>
              <td>{service.price}</td>
              <td>{service.labels.join(", ")}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(idx)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(idx)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;
