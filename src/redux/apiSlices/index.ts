import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Pokemon } from "./types";

// Define a service using a base URL and expected endpoints
const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://food-donation-app-server.onrender.com/api/v1",
  }),
  tagTypes: ["supply"],
  endpoints: (builder) => ({}),
});

export default baseApi;
