const HeroTitle = ({ showButton }) => {
  <div>
    <h1></h1>
    {showButton && <button />}
  </div>;
};

const Hero = ({ showButton, showContent }) => (
  <div style={{ minHeight: 266 }}>
    <Navbar></Navbar>
    {showContent && (
      <div>
        <HeroTitle showButton={showButton} />
        <HeroImage />
      </div>
    )}
  </div>
);
