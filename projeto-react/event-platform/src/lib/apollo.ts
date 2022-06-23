import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q3lquz2ugy01xshvpu9ofa/master',
  cache: new InMemoryCache()
})