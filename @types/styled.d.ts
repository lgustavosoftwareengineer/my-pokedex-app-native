declare module 'styled-components/native' {
  export type Font = {
    name: string;
    size: number;
  };
  export type DefaultTheme = {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      background: string;
      error: string;
      success: string;
    };
    fonts: {
      normal: Font;
      subTitle: Font;
      title: Font;
    };
  };
}
