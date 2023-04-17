import React from "react";

export default function Resume() {

  const styles = {
    padding: "100px 10px",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  };

  const ifr = {
    width : '90%',
    height : '60vh'
  }
  return (
    <div style={styles}>
      <iframe style={ifr} src="https://drive.google.com/file/d/1ThYAX6ypl9Tp-2DoWQLTOxFnIfvOug_F/preview" allow="autoplay"></iframe>
    </div>
  );
}
