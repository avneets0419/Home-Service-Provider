import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
import { BiFontColor } from "react-icons/bi";
const ans1 = `
  You can easily book a service by selecting your desired service from our homepage, filling out your contact details, and clicking "Book Now." We'll confirm your booking shortly after.
`;
const ans2 = `Yes, you need to sign in or sign up to book a service. This helps us provide better service, manage your orders, and keep you updated.`;
const ans3 = `Absolutely! If you need to change or cancel your booking, just contact our support team.`;
const ans4 = `We are currently providing services in Delhi NCR. More locations are coming soon — stay tuned!`;
const ans5 = `Yes, all our service professionals are background-checked, verified, and trained to deliver high-quality service safely and efficiently.`;
const getItems = (panelStyle) => [
  {
    key: "1",
    label: "How do I book a service?",
    children: <p>{ans1}</p>,
    style: panelStyle,
  },
  {
    key: "2",
    label: "Do I need to create an account to book a service?",
    children: <p>{ans2}</p>,
    style: panelStyle,
  },
  {
    key: "3",
    label: "Can I reschedule or cancel a booking?",
    children: <p>{ans3}</p>,
    style: panelStyle,
  },
  {
    key: "4",
    label: "What areas do you currently serve?",
    children: <p>{ans4}</p>,
    style: panelStyle,
  },
  {
    key: "5",
    label: "Are your service professionals verified?",
    children: <p>{ans5}</p>,
    style: panelStyle,
  },
];
const Faq = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: "#fff",
    borderRadius: token.borderRadiusLG,
    border: "none",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
  };
  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ color: "#1e40af" }}>FAQ Section</h1>
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        style={{ background: "#F8FAFC" }}
        items={getItems(panelStyle)}
        size="large"
      />
    </div>
  );
};
export default Faq;
