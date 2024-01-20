import { useEffect, useState } from "react";
import Card from "../modules/Card";

function HomePage({ customers }) {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  
  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setisLoggedIn(true);
        }
      });
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        customers.map((customer) => (
          <Card key={customer._id} customer={customer} />
        ))
      ) : (
        <h1>Please log in to view customer information</h1>
      )}
    </div>
  );
}

export default HomePage;
