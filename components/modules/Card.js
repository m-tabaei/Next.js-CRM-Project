import Link from "next/link";
import { useRouter } from "next/router";

function Card({ customer }) {
  const router = useRouter();
  const deleteHandler = async () => {
    const res = await fetch(`/api/delete/${customer._id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data.status === "success") router.reload();
  };
  return (
    <div className="card">
      <div className="card__details">
        <p>
          Name: {customer.name}
        </p>
          <p>
            
            Last Name:{customer.lastName}
            </p>
        <p>phone: {customer.phone}</p>
      </div>
      <div className="card__buttons">
        <button onClick={deleteHandler}>Delete</button>
        <Link href={`/edit/${customer._id}`}>Edit</Link>
        <Link href={`/customer/${customer._id}`}>Details</Link>
      </div>
    </div>
  );
}

export default Card;
