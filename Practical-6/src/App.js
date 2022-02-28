import './App.css';
import UserList from './components/UserList';
import UserCard from './components/UserCard';


const DUMMY_USERS = [
  {
    key: 1,
    name: 'Jana Strassmann',
    email: "batz.mortimer@yahoo.com",
    status: "Active",
    access: "Owner",
    isOwner: true,
    imagePath: "'../images/d2.jpg'"

  },
  {
    key: 2,
    name: 'Jube Bowman',
    email: "ullrich.owen@kristin.biz",
    status: "Inactive",
    access: "Read",
    isOwner: false,
    imagePath: "'../images/d2.jpg'"

  },  
  {
    key: 3,
    name: 'Kwak Seong-Min',
    email: "kale_lehner@yahoo.com",
    status: "Inactive",
    access: "Manager",
    isOwner: false


  },  
  {
    key: 4,
    name: 'Leon Hunt',
    email: "ullrich.owen@kristin.biz",
    status: "Inactive",
    access: "Manager",
    isOwner: false

  },  
  {
    key: 5,
    name: 'Nitithorn Prinya',
    email: "kale_lehner@yahoo.com",
    status: "Inactive",
    access: "Read",
    isOwner: false

  },
  {
    key: 6,
    name: 'Nombeko Mabandla',
    email: "kale_lehner@yahoo.com",
    status: "Inactive",
    access: "Manager",
    isOwner: false

  }, 
  {
    key: 7,
    name: 'Nwoye Akachi',
    email: "kale_lehner@yahoo.com",
    status: "Inactive",
    access: "Read",
    isOwner: false

  }, 
  {
    key: 8,
    name: 'Paulina Gayoso',
    email: "kale_lehner@yahoo.com",
    status: "Inactive",
    access: "Manager",
    isOwner: false

  },    
]

function App() {
  return (
    <div className="App">
      {/* <UserCard /> */}
      {/* this is the wrapper component which wraps all the child 
      components and is itself a child of App */}
      <UserList users={DUMMY_USERS}/>
      
    </div>
  );
}

export default App;
