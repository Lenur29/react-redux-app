import { MainContainer } from '../../components/MainContainer';
import plantImage from '../../assets/images/plant.png';
import heartImage from '../../assets/images/heart.png';
import locationImage from '../../assets/images/location.png';
import { Image } from '../../components/Image/Image';
import './HomePage.css';

export const HomePage = () => {
  return (
    <MainContainer
      contentClassName="home-page"
    >
      <h1 className="home-page__title">
        UKRAINE
        <br />
        IS THE BEST
      </h1>
      <div className="home-page__image-container">
        <div className="home-page__image-section">
          <Image
            className="home-page__plant-image"
            src={plantImage}
            alt="plant"
          />
          <span>It is beautiful</span>
        </div>
        <div className="home-page__image-section">
          <Image
            className="home-page__location-image"
            src={locationImage}
            alt="location"
          />
          <span>It is our Home</span>
        </div>
        <div className="home-page__image-section">
          <Image
            className="home-page__heart-image"
            src={heartImage}
            alt="heart"
          />
          <span>We love it</span>
        </div>
      </div>
    </MainContainer>
  );
};
