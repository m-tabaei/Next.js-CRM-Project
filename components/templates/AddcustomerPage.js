import { useState } from "react";
import Form from "../modules/Form";
import { useRouter } from "next/router";

function AddcustomerPage() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    products: [],
  });
  const router = useRouter();

  const saveHandler = async () => {
    const res = await fetch("api/customer", {
      method: "POST",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    });
    const data = res.json();
    console.log(data);
    if (data.status === "success") {
      router.push("/");
    }
  };
  const cancelHandler = () => {
    setForm({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      postalCode: "",
      date: new Date().toISOString().slice(0, 10),
      products: [],
    });
    router.push("/");
  };

  return (
    <div className="customer-page">
      <h4>Add New customer</h4>
      <Form form={form} setForm={setForm} />
      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddcustomerPage;
