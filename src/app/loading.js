import React from "react";

function loading() {
  return (
    <div className="flex w-[100vw] h-[100vh] items-center justify-center">
      <div
        style={{
          display: "inherit",
          position: "relative",
          width: "70px",
          height: "70px",
          transform: "rotate(165deg)",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            display: "block",
            width: "14px",
            height: "14px",
            borderRadius: "7px",
            transform: "translate(-50%, -50%)",
            animation:
              "2s ease 0s infinite normal none running react-spinners-HashLoader-before",
          }}
        ></span>
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            display: "block",
            width: "14px",
            height: "14px",
            borderRadius: "7px",
            transform: "translate(-50%, -50%)",
            animation:
              "2s ease 0s infinite normal none running react-spinners-HashLoader-after",
          }}
        ></span>
      </div>
    </div>
  );
}

export default loading;
