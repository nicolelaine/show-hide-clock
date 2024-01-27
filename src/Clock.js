import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = window.setInterval(() => {
      // console.log("Updating time...");
      setTime(new Date());
    }, 1000);

    return () => window.clearInterval(timeInterval);
  }, []);

  return (
    <p className="clock">
      {time.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      })}
    </p>
  );
}

export default Clock;
