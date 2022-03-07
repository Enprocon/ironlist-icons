import React from "react";
import * as IconList from "../icons-dest";

export default {
  title: "Example/Icons",
};

const Template = () =>
  Object.keys(IconList).map((key, index) => {
    const Component = IconList[key];
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderLeft: "1px",
          borderRight: "1px",
          borderBottom: "1px",
          borderColor: "#333",
          borderStyle: "solid",
          boxSizing: "border-box",
          justifyContent: "space-around",
          borderTop: index === 0 ? "1px solid #333" : 0,
          width: "300px",
          padding: "5px",
        }}
        key={key}
      >
        <div
          style={{ minWidth: "200px", paddingLeft: "10px", paddingTop: "4px" }}
        >
          {key}:{" "}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Component
            height={20}
            width={20}
            fill="#333"
            title={key?.split("T")[0]}
          />
        </div>
      </div>
    );
  });

export const AllIcons = Template.bind({});
