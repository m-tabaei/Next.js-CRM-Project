import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import CustomerDetailsPage from "@templates/CustomerDetailsPage";

function Index() {
  const [data, setData] = useState(null);

  const router = useRouter();
  const {
    query: { customerId },
    isReady,
  } = router;

  useEffect(() => {
    if (isReady && customerId) {
      fetch(`/api/customer/${customerId}`)
        .then((res) => res.json())
        .then((data) => setData(data.data));
    }
  }, [isReady, customerId]);
  if (data) return <CustomerDetailsPage data={data} />;
}

export default Index;
