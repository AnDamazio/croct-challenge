import { Slot } from "@croct/plug-react";
import { ReactElement, Suspense,  } from "react";
import Hero from "../Hero";

type HomeBannerContent = {
  title: string;
  subtitle: string;
  cta: {
    label: string;
    link: string;
  };
};

const Header = (): ReactElement => {
  return (
    <header>
      <Suspense fallback="Personalizing content...">
        <Slot id="home-banner">
          {({ title, subtitle, cta }: HomeBannerContent) => (
            <Hero
              title={title}
              subtitle={subtitle}
              cta={{
                label: cta.label,
                link: cta.link,
              }}
            />
          )}
        </Slot>
      </Suspense>
    </header>
  );
};
export default Header;
