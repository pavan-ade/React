import React from "react";

const UserList = () => {
  const users = [
    {
      id: 1,
      name: "Mahesh Kumar",
      email: "mahesh.kumar@example.com",
      role: "Admin",
      isActive: true,
      createdAt: "2024-06-01T10:00:00Z",
    },
    {
      id: 2,
      name: "Bejawada Srinivas",
      email: "bejawada.s@example.com",
      role: "Developer",
      isActive: true,
      createdAt: "2024-06-05T14:30:00Z",
    },
    {
      id: 3,
      name: "Aarti Sharma",
      email: "aarti.sharma@example.com",
      role: "Designer",
      isActive: false,
      createdAt: "2024-05-20T09:15:00Z",
    },
    {
      id: 4,
      name: "Rahul Mehta",
      email: "rahul.mehta@example.com",
      role: "QA Engineer",
      isActive: true,
      createdAt: "2024-05-12T11:45:00Z",
    },
    {
      id: 5,
      name: "Sneha Patil",
      email: "sneha.patil@example.com",
      role: "Developer",
      isActive: false,
      createdAt: "2024-04-18T08:20:00Z",
    },
    {
      id: 6,
      name: "Arjun Nair",
      email: "arjun.nair@example.com",
      role: "Project Manager",
      isActive: true,
      createdAt: "2024-04-25T13:00:00Z",
    },
    {
      id: 7,
      name: "Pooja Verma",
      email: "pooja.verma@example.com",
      role: "UX Designer",
      isActive: true,
      createdAt: "2024-03-30T07:55:00Z",
    },
    {
      id: 8,
      name: "Ravi Teja",
      email: "ravi.teja@example.com",
      role: "DevOps Engineer",
      isActive: false,
      createdAt: "2024-02-10T12:40:00Z",
    },
    {
      id: 9,
      name: "Neha Singh",
      email: "neha.singh@example.com",
      role: "HR",
      isActive: true,
      createdAt: "2024-01-05T16:10:00Z",
    },
    {
      id: 10,
      name: "Manoj Reddy",
      email: "manoj.reddy@example.com",
      role: "Developer",
      isActive: true,
      createdAt: "2024-06-08T10:25:00Z",
    },
  ];
  return (
    <div>
      {users.map(({id, name, email, role, isActive, createdAt}) => (
        <ul key={Math.random()}>
          <li>ID : {id}</li>
          <li>Name : {name}</li>
          <li>Email : {email}</li>
          <li>Role : {role}</li>
          <li>Active : {isActive ? "Is Active" : "Is not Active"}</li>
          <li>Created : {createdAt}</li>
        </ul>
      ))}
    </div>
  );
};

export default UserList;
