import React, { useEffect, useState } from "react";

export default function Test() {
  const [info, setInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          setInfo(data.message);
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="mt-32">Loading....</div>;
  }

  return <div className="pt-32">{info}</div>;
}
