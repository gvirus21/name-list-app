const PeopleTable = () => {
  const PEOPLE_DATA = [
    {
      id: 1,
      name: "RUTU THELA",
      age: 69,
      maritalStatus: "Married",
      relationship: "Grand Son",
    },
    {
      id: 2,
      name: "DULA THELA",
      age: 49,
      maritalStatus: "Married",
      relationship: "Grand Son",
    },
    {
      id: 3,
      name: "ANANDA THELA",
      age: 56,
      maritalStatus: "Married",
      relationship: "Grand Son",
    },
    {
      id: 4,
      name: "UPA THELA",
      age: 50,
      maritalStatus: "Married",
      relationship: "Grand Son",
    },
    {
      id: 5,
      name: "DUSILA THELA",
      age: 47,
      maritalStatus: "Married",
      relationship: "Daughter",
    },
    {
      id: 6,
      name: "PIRABATI THELA",
      age: 49,
      maritalStatus: "Married",
      relationship: "Daughter",
    },
    {
      id: 7,
      name: "PRAHARI THELA",
      age: 51,
      maritalStatus: "Married",
      relationship: "Grand Son",
    },
  ];

  return (
    <table className="absolute left-[50%] -translate-x-[50%] mt-8 w-[40rem] border-2 border-black text-center">
      <thead>
        <tr>
          <th className="border-b-2 border-l-2 border-black">S. No</th>
          <th className="border-b-2 border-l-2 border-black">Name</th>
          <th className="border-b-2 border-l-2 border-black">Age</th>
          <th className="border-b-2 border-l-2 border-black">Marital Status</th>
          <th className="border-b-2 border-l-2 border-black">
            Relationship With Deceased
          </th>
        </tr>
      </thead>
      <tbody>
        {PEOPLE_DATA.map((row) => (
          <tr key={row.id}>
            <td className="border-b-2 border-l-2 border-black">{row.id}</td>
            <td className="border-b-2 border-l-2 border-black">{row.name}</td>
            <td className="border-b-2 border-l-2 border-black">{row.age}</td>
            <td className="border-b-2 border-l-2 border-black">
              {row.maritalStatus}
            </td>
            <td className="border-b-2 border-l-2 border-black">
              {row.relationship}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PeopleTable;
