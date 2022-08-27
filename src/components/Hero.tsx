import { ReactElement } from "react";
import HomeBanner from "./types/HomeBanner";
import Button from "./UI/Button";
import ViewController from "./ViewController";

const Hero = (props: HomeBanner): ReactElement => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://placeimg.com/260/400/arch"
          className="max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">{props.title}</h1>
          <p className="py-6">{props.subtitle}</p>
          <form method="get" action={props.cta.link}>
            <Button
              className="btn-primary"
              onClick={() => {
                return "";
              }}
              type="submit"
            >
              {props.cta.label}
            </Button>
          </form>
          <ViewController />
        </div>
      </div>
    </div>
  );
};

export default Hero;
