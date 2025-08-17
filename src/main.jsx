import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Appv1 from "./App-v1.jsx";
import StarRating from "./StartRating.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Appv1 />

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
