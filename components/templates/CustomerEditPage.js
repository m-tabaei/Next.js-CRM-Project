import moment from "moment";
import { useRouter } from "next/router";
import { useState } from "react";
import Form from "../modules/Form";

function CustomerEditPage({ data, id }) {
  // Check if data exists and has a 'date' property
  const date = data && data.date ? moment(data.date).utc().format("YYYY-MM-DD") : "";

  const [form, setForm] = useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || "",
    address: data.address || "",
    postalCode: data.postalCode || "",
    products: data.products || "",
    date: date,
  });

  const router = useRouter();

  const saveHandler = async () => {
    const res = await fetch(`/api/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    });
    const responseData = await res.json();
    if (responseData.status === "success") router.push("/");
  };

  const cancelHandler = () => {
    router.push("/");
  };

  return (
    <div className="customer-page">
      <h4>Edit Customer</h4>
      <Form form={form} setForm={setForm} />
      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={saveHandler}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default CustomerEditPage;
