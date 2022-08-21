// Declarative - What should be done? Just tell me what to do and computer wii worry about how to get it done.
ReactDOM.render(
  <p className="declarative">Tis is Declarative way!</p>,
  document.getElementById("root")
);

//Imperative - How should it be done? Describe to computer, every detail of how to do it
const h = document.createElement("h1");
h.textContent = "This is an imperative way to program";
h.className = "header";
document.getElementById("root").append(h);
