import Sidebar from "../components/sidebar";
import Postcard from "../components/postcard";
import postcards from "../postcard";
import "../styles/dashboard.css";

const Dashboard = () => {
  const today = new Date();

  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((today - startOfYear) / (1000 * 60 * 60 * 24));

  const todaysPostcard = postcards[dayOfYear % postcards.length];
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="content">
        <section className="daily-postcard">
          <h2>Postcard of the Day</h2>

          <Postcard
            title={todaysPostcard.title}
            image={todaysPostcard.image}
            country={todaysPostcard.country}
            place={todaysPostcard.place}
            fact={todaysPostcard.fact}
          />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
