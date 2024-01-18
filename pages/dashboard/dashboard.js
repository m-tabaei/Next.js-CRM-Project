import DashboardUser from "@templates/DashboardUser";

import React from "react";
import { verifyToken } from "utils/auth";

function dashboard() {
  return <DashboardUser />;
}

export default dashboard;

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
