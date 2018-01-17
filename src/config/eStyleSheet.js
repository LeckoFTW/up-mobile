import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';


export const initStyleSheet = () => EStyleSheet.build({
  $rem: Dimensions.get('window').width > 340 ? 18 : 16,

  $contentBoxBackground: '#F6F7F8',
  $primary: '#2ED1D6',
  $secondary: '#58DDE2',
  $light: '#90F0F6',
  $lighter: '#B4FBFF',
  $bold: '#22A3A9',
  $dark: '#0F6469',
  $darker: '#013032',
  $white: '#FFFFFF',
  $lighterGray: '#f1f1f1',
  $lightGray: '#e5e5e5',
  $gray: '#b3b3b3',
  $darkGray: '#808080',
  $darkerGray: '#404040'
});

export const Colors = {
  gray: '$gray',
  dark: '$dark',
  darker: '$darker',
  lightGray: '$lightGray',
  lighterGray: '$lighterGray'
};

export const Fonts = {
  bold: 'Bold',
  extraBold: 'ExtraBold',
  extraLight: 'ExtraLight',
  light: 'Light',
  regular: 'Regular',
  thin: 'Thin'
};

export const createStyleSheet = stylesObject => EStyleSheet.create(stylesObject);