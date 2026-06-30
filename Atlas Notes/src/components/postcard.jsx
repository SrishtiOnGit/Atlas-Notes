import "../styles/postcard.css";

const PostCard = ({ image, title, description, country, place, fact }) => {
  return (
    <div className="postcard">
      <img src={image} alt={title} className="post-img" />

      <div className="postcard-content">
        <h3>{title}</h3>

        <p className="country">{country}</p>

        <p>{description}</p>

        <p>
          <strong>Place:</strong> {place}
        </p>

        <p>
          <strong>Fun Fact:</strong> {fact}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
