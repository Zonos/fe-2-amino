import type { ReactNode } from 'react';

import type { ImageSize } from 'src/components/avatar/AvatarBase';
import { theme } from 'src/styles/constants/theme';
import type { ColorPrefix } from 'src/types/Color';
import styled from 'styled-components';

const thumbnailShapes = {
  round: '50%',
  rounded: '20%',
  square: '0px',
} as const;

export type ThumbnailProps = {
  /** @default false */
  bordered?: boolean;
  /** @default 'gray' */
  color?: ColorPrefix;
  icon: ReactNode;
  /** @default 'round' */
  shape?: keyof typeof thumbnailShapes;
  /** @default 32 */
  size?: ImageSize;
};

type StyleProps = Required<
  Pick<ThumbnailProps, 'shape' | 'color' | 'size' | 'bordered'>
>;

const Wrapper = styled.div<StyleProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${p => `${p.size}px`};
  height: ${p => `${p.size}px`};
  border-radius: ${p => thumbnailShapes[p.shape]};
  border: ${p =>
    p.bordered ? `${p.size / 16}px solid ${theme.gray0}` : undefined};
  box-sizing: content-box;
  background-color: ${p => theme[`${p.color}100`]};

  svg {
    color: ${p => theme[`${p.color}800`]};

    width: 50%;
    height: 50%;

    path[data-is-secondary-color] {
      fill: ${p => theme[`${p.color}300`]};
    }
  }
`;

export const Thumbnail = ({
  bordered = false,
  color = 'gray',
  icon,
  shape = 'round',
  size = 32,
}: ThumbnailProps) => (
  <Wrapper bordered={bordered} color={color} shape={shape} size={size}>
    {icon}
  </Wrapper>
);
