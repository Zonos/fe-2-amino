import { forwardRef, lazy, Suspense } from 'react';

import type * as flags from 'src/icons/flags/_FlagIndex';
import { Default } from 'src/icons/flags/Default';

export type Flag = keyof typeof flags;
export type FlagScale = 'small' | 'medium' | 'large';

export type FlagIconProps = { iconScale: FlagScale } & {
  code: Flag;
};

const dynamicImportFileExtension =
  process.env.NODE_ENV === 'development' ? '.tsx' : '';

export const FlagIcon = forwardRef<SVGSVGElement, FlagIconProps>(
  ({ code, iconScale }, ref) => {
    const flagSizeProps = () => {
      switch (iconScale) {
        case 'small':
          return { height: 16, width: 16 };
        case 'medium':
          return { height: 20, width: 20 };
        case 'large':
        default:
          return { borderRadius: 11, height: 32, width: 32 };
      }
    };

    const renderIcon = () => {
      const Icon = lazy(() =>
        import(`../flags/${code}`.concat(dynamicImportFileExtension)).then(
          module => ({
            default: module[code],
          }),
        ),
      );

      // The props sometimes need to get typecast upstream, so we need to check
      if (!Icon) {
        return null;
      }

      return <Icon ref={ref} {...flagSizeProps()} />;
    };

    return (
      <Suspense fallback={<Default {...flagSizeProps()} />}>
        {renderIcon()}
      </Suspense>
    );
  },
);
