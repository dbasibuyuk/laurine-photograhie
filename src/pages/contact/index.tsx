import { useEffect, useState } from "react";

const Contact = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("count -> ", count);
    console.log("burda render oldum");
  }, [count]);

  return <div>dskkf</div>;
};
export default Contact;
