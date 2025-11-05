import "./App.css";
import StudentList from "./components/StudentList";
import ProductList from "./components/ProductList";
import TaskList from "./components/TaskList";
import Weather from "./components/Weather";
import FilteredList from "./components/FilteredList";
import FavoriteColors from "./components/FavoriteColors";
import ScoreList from "./components/ScoreList";
import MovieRatings from "./components/MovieRatings";
import OnlineUsers from "./components/OnlineUsers";
import ConditionalGreeting from "./components/ConditionalGreeting";
import Timer from "./components_nov_05/timer";
import SecondsCounter from "./components_nov_05/secondsCounter";
import { UserProvider } from "./Contexts/UserContext";
import Header from "./components_nov_05/Header";
import Login from "./components_nov_05/Login";
import Profile from "./components_nov_05/Profile";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Header />
        <Login />
        <Profile />

        <hr style={{ margin: '40px 0' }} />

        <h1>React Exercises</h1>
        <Timer />
        <SecondsCounter />
        <StudentList />
        <ProductList />
        <TaskList />
        <Weather />
        <FilteredList />
        <FavoriteColors />
        <ScoreList />
        <MovieRatings />
        <OnlineUsers />
        <ConditionalGreeting />
      </div>
    </UserProvider>
  );
}

export default App;
