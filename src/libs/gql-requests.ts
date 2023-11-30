import { initUrqlClient } from 'next-urql';
import { Client, cacheExchange, fetchExchange,ssrExchange } from 'urql';

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT!;

export function urqlClient(): Promise<Client> {
  return new Promise((resolve, reject) => {
    const isServerSide = typeof window === 'undefined';
    const ssr = ssrExchange({
      isClient: !isServerSide,
    });
    const client = initUrqlClient(
      {
        url: "http://localhost:3000/graphql",
        exchanges: [cacheExchange,ssr,fetchExchange],
      },
      false,
    );
    if (!client) {
      reject(Error('Failed to init initUrqlClient.'));
    } else {
      resolve(client);
    }
  });
}