// src/custom.d.ts
declare namespace JSX {
    interface IntrinsicElements {
      'dotlottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        background?: string;
        speed?: number;
        loop?: string;
        autoPlay?: string;
        style?: React.CSSProperties;
      };
    }
  }
  