
import {fontPixel, pixelSizeVertical} from '../../styles/consts/ratio';

/* fonts */
export const FONT_FAMILY = {
  interSemiBold: 'Inter-SemiBold',
  interBold: 'Inter-Bold',
  interMedium: 'Inter-Medium',
  interRegular: 'Inter-Regular',
};
/* Colors */
export const COLOR = {
  white: '#FFF',
  light: '#FAF8FC',
  black: '#000',
  baseGrey: '#C8C5CB',
  grey: '#827D89',
  purple: '#6A3EA1',
  transparent: 'rgba(0, 0, 0, 0)',
  warning: '#FDEBAB',
};
// TEXT
export const TEXT = {
  inputLabel: {
    color: COLOR.black,
    fontSize: fontPixel(16),
    fontFamily: FONT_FAMILY.interMedium,
    marginVertical: pixelSizeVertical(10),
    lineHeight: fontPixel(22.4),
  },
  heading: {
    color: COLOR.black,
    fontSize: fontPixel(24),
    fontFamily: FONT_FAMILY.interBold,
    lineHeight: fontPixel(28.8),
  },
  paragraph: {
    color: COLOR.grey,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.interRegular,
    lineHeight: fontPixel(19.6),
  },
};
// COMMON_STYLES
export const COMMON_STYLES = {
  super_container: {
    backgroundColor: COLOR.light,
    flex: 1,
  },
};

