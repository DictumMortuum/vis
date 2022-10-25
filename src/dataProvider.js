import postgrestRestProvider from "@promitheus/ra-data-postgrest";
import { fetchUtils } from "react-admin";

const httpClient = (url, options = {}) => {
  options.user = {
    authenticated: true,
    token: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`
  };

  if (options.headers !== undefined) {
    options.headers.set('apikey', process.env.REACT_APP_SUPABASE_KEY);
  } else {
    options.headers = new Headers({
      'apikey': process.env.REACT_APP_SUPABASE_KEY
    });

  }

  return fetchUtils.fetchJson(url, options);
};

export default postgrestRestProvider(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1`, httpClient);
