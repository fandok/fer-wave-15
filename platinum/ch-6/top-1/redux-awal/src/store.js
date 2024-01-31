import { configureStore } from "@reduxjs/toolkit";

import reducers from "./redux/reducers";

export default configureStore({
  reducer: reducers,
  devTools: import.meta.env.NODE_ENV === "development",
});
