import { useState } from "react";

function EntryForm({ addEntryToPhoneBook }) {
  const [UserId, setUserId] = useState();
  const [Name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addEntryToPhoneBook({ UserId, Name, phoneNumber });
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <input
        type="number"
        name="UserId"
        id="UserId"
        placeholder="Number"
        value={UserId}
        // style={{display:"none"}}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="text"
        name="Name"
        id="Name"
        placeholder="Name"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        name="phoneNumber"
        id="phoneNumber"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button type="submit" onSubmit={handleSubmit}>
        submit
      </button>
    </form>
  );
}

function DisplayEntries({ entries, setEntries }) {

  const deleteUser =(e)=>{
   let id = e.target.dataset.id
   entries.map((item)=>{
    if (item.UserId===id) {
      const parent = document.getElementsByClassName('btnDelete');
      parent[0].parentNode.remove();
    }
   })
  }

  return (
    <table style={{ marginTop: "1em", width: 300 }}>
      <thead>
        <tr>
          {/* <th>UserId</th> */}
          <th>Number</th>
          <th>Name</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody className="tbClass" style={{ marginTop: ".5em" }}>
        {entries.map((entry) => (
          <tr className="trClass" key={`${entry.UserId} ${entry.Name}`}>
            <td>{entry.UserId}</td>
            <td>{entry.Name}</td>
            <td>{entry.phoneNumber}</td>
            {/* <td className="editUser">edit</td> */}
            <td data-id={entry.UserId} className="btnDelete" onClick={deleteUser}>delete</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  const [entries, setEntries] = useState([]);

  const addEntryToPhoneBook = (entry) => {
    setEntries(
      [...entries, entry].sort((a, b) =>
        a.Name.toLowerCase() > b.Name.toLowerCase() ? 1 : -1
      )
    );
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <EntryForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <DisplayEntries entries={entries} setEntries={setEntries} />
    </div>
  );
}

export default App;