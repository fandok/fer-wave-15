const Card = ({ imageUrl, title, subtitle }) => {
  return (
    <>
      <img src={imageUrl} />
      {title}
      {subtitle}
    </>
  );
};

export default Card;
