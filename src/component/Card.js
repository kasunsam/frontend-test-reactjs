// eslint-disable-next-line
import fly from './../Assets/img/silk-bg.png';
import './../App.css';

function CardBox() {
  return (
    <div class="card custom-card">
      <div class="card-top d-flex align-items-center justify-content-center">
        <img src={fly} class="card-img-top" alt="butterfly" />
      </div>
      <div class="card-body">
        <h5 class="card-title">
          Lorem ipsum dolor sit amet
          <br />
          consectetur adipiscing elit
        </h5>
        <p class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
        <button type="button" class="btn btn-primary">
          Button Test
        </button>
      </div>
    </div>
  );
}

export default CardBox;
