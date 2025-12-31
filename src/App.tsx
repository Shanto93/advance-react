import { thanasBNOf } from "all-bangladeshi-addresses";

const App = () => {
  const divisionsBN = thanasBNOf("চট্টগ্রাম");

  console.log("Thana in narsingdi district ", divisionsBN);
  return (
    <div>
      <h2 className="text-3xl text-amber-400">Hi</h2>
      <h1>T</h1>
    </div>
  );
};

export default App;
