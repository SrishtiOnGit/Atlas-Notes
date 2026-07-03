import hiddenplaces from "../hidden";
import Postcard from "../components/postcard";
import Sidebar from "../components/sidebar";
import "../styles/hidden.css";

const Hidden = () => {
  return (
    <div className="hidden-page">
      <Sidebar />
      <main className="hidden-content">
        <section className="hidden-places">
          <h2>Hidden Places</h2>

          <Postcard
            title={hiddenplaces[0].title}
            image={hiddenplaces[0].image}
            country={hiddenplaces[0].country}
            place={hiddenplaces[0].place}
            fact={hiddenplaces[0].fact}
          />
          <Postcard
            title={hiddenplaces[1].title}
            image={hiddenplaces[1].image}
            country={hiddenplaces[1].country}
            place={hiddenplaces[1].place}
            fact={hiddenplaces[1].fact}
          />
          <Postcard
            title={hiddenplaces[2].title}
            image={hiddenplaces[2].image}
            country={hiddenplaces[2].country}
            place={hiddenplaces[2].place}
            fact={hiddenplaces[2].fact}
          />
          <Postcard
            title={hiddenplaces[3].title}
            image={hiddenplaces[3].image}
            country={hiddenplaces[3].country}
            place={hiddenplaces[3].place}
            fact={hiddenplaces[3].fact}
          />
          <Postcard
            title={hiddenplaces[4].title}
            image={hiddenplaces[4].image}
            country={hiddenplaces[4].country}
            place={hiddenplaces[4].place}
            fact={hiddenplaces[4].fact}
          />
          <Postcard
            title={hiddenplaces[5].title}
            image={hiddenplaces[5].image}
            country={hiddenplaces[5].country}
            place={hiddenplaces[5].place}
            fact={hiddenplaces[5].fact}
          />
          <Postcard
            title={hiddenplaces[6].title}
            image={hiddenplaces[6].image}
            country={hiddenplaces[6].country}
            place={hiddenplaces[6].place}
            fact={hiddenplaces[6].fact}
          />
          <Postcard
            title={hiddenplaces[7].title}
            image={hiddenplaces[7].image}
            country={hiddenplaces[7].country}
            place={hiddenplaces[7].place}
            fact={hiddenplaces[7].fact}
          />
        </section>
      </main>
    </div>
  );
};

export default Hidden;
