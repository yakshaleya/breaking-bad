import "./card.css";

const CharacterItem = ({ item }) => {
  return (
    <div className="profile-image">
      <img src={item.img} alt="sample47" />
      <h2>{item.name}</h2>
      <h4 className="occupation">{item.occupation[0]}</h4>
    </div>
  );
};

export default CharacterItem;
