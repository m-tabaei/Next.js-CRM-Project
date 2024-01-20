// info.js

import React, { useState } from 'react';
import { verifyToken } from 'utils/auth';

function Info({result}) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async () => {
    try {
      const res = await fetch("/api/update-info", {
        method: "POST",
        body: JSON.stringify({ name, lastName, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <h3>Info</h3>
      <div>
        <h1>Your Username is {result.email}</h1>
        <input placeholder='Name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <input placeholder='LastName' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <input placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default Info;
export async function getServerSideProps(context) {
    const { token } = context.req.cookies;
    const secretKey = process.env.SECRET_KEY;
    const result = verifyToken(token, secretKey);
    if (!result)
      return {
        redirect: { destination: "/signin", permanent: false },
      };
  
    return {
      props: { result }
    };
  }