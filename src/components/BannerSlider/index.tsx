import Banner, { BannerProps } from "components/Banner";
import Slider, { SliderSettings } from "components/Slider";

import * as S from "./styles";

type BannerSliderProps = {
  items: BannerProps[];
};

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
};

const BannerSlider = ({ items }: BannerSliderProps) => {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items && items.map((item) => <Banner key={item.title} {...item} />)}
      </Slider>
    </S.Wrapper>
  );
};

export default BannerSlider;
