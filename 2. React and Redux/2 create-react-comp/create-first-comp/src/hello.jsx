function Hello() {
  let myName = "Devu";
  let fullName = () => {
    return "Devu Pyaara";
  };
  return <h3>Hello Deepu, This is me... {fullName()}</h3>;
}

export default Hello;
