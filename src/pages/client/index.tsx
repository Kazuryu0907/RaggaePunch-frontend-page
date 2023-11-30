
import { GetServerSideProps, NextPage } from 'next';
import { urqlClient } from '@/libs/gql-requests';
const ClientPage: NextPage = async() => {
  const client = await urqlClient();
  
  return (
    <div>
      <h1>Client Page</h1>
      {/* Add your content here */}
    </div>
  );
};

export default ClientPage;
