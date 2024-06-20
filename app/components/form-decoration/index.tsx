interface PositionProps {
  [key: string]: string | number;
}

const FormDecoration = ({ position }: { position: PositionProps }) => {
  return (
    <div style={position}>
      <svg width="722" height="745" viewBox="0 0 722 745" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.35" filter="url(#filter0_f_35_3026)">
          <circle cx="349.5" cy="372.5" r="122.5" fill="#CB92F7" />
        </g>
        <defs>
          <filter id="filter0_f_35_3026" x="-23" y="0" width="745" height="745" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_35_3026" />
          </filter>
        </defs>
      </svg>

    </div>
  );
};

export default FormDecoration;
