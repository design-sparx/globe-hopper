import { ComponentProps, CSSProperties } from 'react';

export type FlexProps = {
  direction?: CSSProperties['flexDirection'];
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  gap?: CSSProperties['gap'];
  wrap?: CSSProperties['flexWrap'];
} & ComponentProps<'div'>;

export const Flex = (props: FlexProps) => {
  const {
    direction = 'row',
    gap = '8px',
    justify = 'flex-start',
    align = 'flex-start',
    wrap = 'wrap',
    ...others
  } = props;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        gap,
      }}
      {...others}
    >
      {others.children}
    </div>
  );
};
