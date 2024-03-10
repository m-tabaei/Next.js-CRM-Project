import Customer from 'models/Customer';
import connectDB from 'utils/connectDB';

function DashboardUser() {
  return (
    <div>DashboardUser</div>
  )
}

export default DashboardUser
export async function getServerSideProps() {
  try {
    await connectDB();
    const customers = await Customer.find();
    return {
      props: {
        customers: JSON.parse(JSON.stringify(customers)),
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}