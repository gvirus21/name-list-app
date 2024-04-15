import "./App.css";

const NAMES = [
  "Name one",
  "Name two",
  "Name Three",
  "Name Four",
  "Name Five",
  "Name Six",
];

function App() {
  return (
    <div className="flex justify-center items-center h-[80vh] w-full">
      <ul className="list-disc space-y-4 text-2xl capitalize text-left">
        {NAMES.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
