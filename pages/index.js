

function Index() {
  return(
    <h1 >Emperial company Customer Service</h1>
  );
}

export default Index;

// export async function getServerSideProps() {
//   try {
//     await connectDB();
//     const customers = await Customer.find();
//     return {
//       props: {
//         customers: JSON.parse(JSON.stringify(customers)),
//       },
//     };
//   } catch (err) {
//     return {
//       notFound: true,
//     };
//   }
// }
