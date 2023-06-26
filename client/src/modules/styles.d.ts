import 'styled-components';
import { BreakPointsT, ColorsT, FontSizesT } from 'theme/types';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: BreakPointsT;
    fontSizes: FontSizesT;
    colors: ColorsT;
  }
}
