function Random() {
  let number = Math.floor(Math.random() * 10);
  return (
    <h1
      style={{
        backgroundColor: "tomato",
        "border-radius": "50px",
        padding: "10px 20px",
      }}
    >
      Random Number is: {number}.
    </h1>
  );
}

export default Random;
