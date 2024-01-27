import { Spinner, Title2 } from '@fluentui/react-components';
import Slider from 'react-slick';
import { Flex } from '../../../components/Flex';
import { useFetch } from '../../../hooks';
import { DiscountCard } from '../../../components/DiscountCard';
import { IDiscounts } from '../../../types';

export const DiscountsSection = () => {
  const { data, loading } = useFetch<IDiscounts>('/mocks/discounts.json');

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = data.map((discount: IDiscounts) => (
    <DiscountCard key={discount.id} data={discount} />
  ));

  if (loading) {
    return <Spinner />;
  }

  return (
    <Flex direction="column">
      <Title2>Special offers</Title2>
      <div style={{ display: 'block', width: '100%' }}>
        <Slider {...settings}>{slides}</Slider>
      </div>
    </Flex>
  );
};
