import React, { useEffect, useState } from "react";
import "./ServicesTable.css";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../../firebase"; // Adjust path if needed
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPen, FaTrash } from "react-icons/fa";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";

const ServicesTable = () => {
  const [services, setServices] = useState([]);

  // 🔁 Real-time fetch from Firebase
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "services"), (snapshot) => {
      const fetched = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setServices(fetched);
    });

    return () => unsub();
  }, []);

  // ➕ Add a dummy service
  const handleAddService = async () => {
    const newService = {
      tag: "New",
      rating: 4.5,
      title: "Sample New Service",
      team: "ProFix Team",
      desc: "Description for new service",
      labels: ["New", "Test"],
      price: "$100/hour",
      image: "https://via.placeholder.com/100",
      timestamp: new Date().toISOString(),
    };

    try {
      await addDoc(collection(db, "services"), newService);
      toast.success("Service added successfully!", {
        position: "top-right",
        autoClose: 6000,
      });
    } catch (error) {
      console.error("Error adding service:", error);
    }
  };

  // 🗑 Delete a service
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "services", id));
      toast.error("Service deleted successfully!", {
        position: "top-right",
        autoClose: 6000,
      });
    } catch (error) {
      console.error("Error deleting service:", error);
      alert("Failed to delete the service.");
    }
  };

  // 🛠️ Placeholder for edit
  const handleEdit = (id) => {
    alert(`Edit service with ID: ${id}`);
  };

  return (
    <div className="services-table-container">
      <div className="table-header">
        <h1>Services</h1>
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
          {services.map((service) => (
            <tr key={service.id}>
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
              <td>{(service.labels || []).join(", ")}</td>
              <td>
                <div className="action-icons">
                  <button
                    className="icon-btn edit-icon"
                    onClick={() => handleEdit(service.id)}
                  >
                    <FaPen />
                  </button>
                  <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                    onConfirm={() => handleDelete(service.id)}
                    okText="Delete"
                    okButtonProps={{ danger: true }}
                  >
                    <button className="ivon-btn delete-icon">
                      <FaTrash />
                    </button>
                    {/* <Button danger>Delete</Button> */}
                  </Popconfirm>
                  {/* <button
                    className="ivon-btn delete-icon"
                    onClick={() => handleDelete(service.id)}
                  >
                    <FaTrash />
                  </button> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-footer">
        <button className="add-btn2" onClick={handleAddService}>
          + Add Service
        </button>
      </div>
    </div>
  );
};

export default ServicesTable;
