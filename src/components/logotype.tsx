import React from "react";

export const Logotype: React.FC = () => {
  return (
    <a href="https://3raza.ru" className="logotype">
      <img src={process.env.PUBLIC_URL + "/images/3_.png"} alt="3Raza.ru" />
    </a>
  );
}

export default Logotype;
