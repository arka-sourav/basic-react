const page = (
  <div>
    <h1>My awesome website in React</h1>
    <h3>Reasons I love React</h3>
    <ol>
      <li>It's composable</li>
      <li>It's declarative</li>
      <li>It's a hireable skill</li>
      <li>It's actively maintained by skilled people</li>
    </ol>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));

// document.getElementById("root").append(JSON.stringify(page));
//this line is NOT same as above. This will just render js block
