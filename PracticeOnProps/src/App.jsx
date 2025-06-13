import Card from "./components/Card";
import PersonsList from "./components/PersonsList";

function App() {
  const persons = [
    {
      id: 1,
      firstName: "Rahul",
      lastName: "Sharma",
      age: 28,
      gender: "Male",
      email: "rahul.sharma@example.com",
      phone: "+91-9876543210",
    },
    {
      id: 2,
      firstName: "Priya",
      lastName: "Mehta",
      age: 32,
      gender: "Female",
      email: "priya.mehta@example.com",
      phone: "+91-9876512345",
    },
    {
      id: 3,
      firstName: "Amit",
      lastName: "Verma",
      age: 24,
      gender: "Male",
      email: "amit.verma@example.com",
      phone: "+91-9812345678",
    },
    {
      id: 4,
      firstName: "Sneha",
      lastName: "Patel",
      age: 30,
      gender: "Female",
      email: "sneha.patel@example.com",
      phone: "+91-9823456789",
    },
    {
      id: 5,
      firstName: "Vikram",
      lastName: "Reddy",
      age: 35,
      gender: "Male",
      email: "vikram.reddy@example.com",
      phone: "+91-9845612378",
    },
    {
      id: 6,
      firstName: "Neha",
      lastName: "Joshi",
      age: 27,
      gender: "Female",
      email: "neha.joshi@example.com",
      phone: "+91-9876543211",
    },
    {
      id: 7,
      firstName: "Arun",
      lastName: "Kumar",
      age: 40,
      gender: "Male",
      email: "arun.kumar@example.com",
      phone: "+91-9832165478",
    },
    {
      id: 8,
      firstName: "Kiran",
      lastName: "Desai",
      age: 22,
      gender: "Female",
      email: "kiran.desai@example.com",
      phone: "+91-9865421378",
    },
    {
      id: 9,
      firstName: "Rohit",
      lastName: "Kapoor",
      age: 29,
      gender: "Male",
      email: "rohit.kapoor@example.com",
      phone: "+91-9874563210",
    },
    {
      id: 10,
      firstName: "Anita",
      lastName: "Singh",
      age: 31,
      gender: "Female",
      email: "anita.singh@example.com",
      phone: "+91-9812354789",
    },
  ];

  return <div>
    <PersonsList personslist = {persons} />
    <Card>
      <h2>This is my Card-1</h2>
      <p>This is my some content for Card</p>
    </Card>
    <Card>
      <h2>This is my Card-2</h2>
      <p>This is my some content for Card</p>
    </Card>
    <Card>
      <h2>This is my Card-3</h2>
      <p>This is my some content for Card</p>
    </Card>
  </div>;
}

export default App;
