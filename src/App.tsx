const App = () => {
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];

  const chemists = people.filter((person) => person.profession === "chemist");
  const listItems = chemists.map((chemist) => <li>{chemist.name}</li>);

  return (
    <div>
      <h1>Home Page.</h1>
      <p>{listItems} </p>
      {/* <Avatar person={person} size={100}></Avatar> */}
    </div>
  );
};

export default App;
