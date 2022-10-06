import { useState, useEffect } from "react";
function ChildComponent(props) {
  const [a, setA] = useState(2);
  useEffect(() => {
    setA(a * a);
  }, []);
  console.log("updated");
  return (
    <div>
      <button>asdasd</button>
    </div>
  );
}

export default ChildComponent;
