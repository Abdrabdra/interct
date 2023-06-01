import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, baseQueryWithReauth } from "../rtkApi";

export default createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["user"],
  endpoints: () => ({}),
});
