import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppV1 from "./AppV1.jsx";
import StarRating from "./StartRating.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppV1 />

    {/*   <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
    />
    <StarRating
      color='#a0caecff'
      size={25}
      messages={["Bad", "Average", "Good"]}
      maxRating={3}
      defaultRating={1}
    /> */}
  </StrictMode>
);
