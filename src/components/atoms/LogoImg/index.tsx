import "./index.css";

export interface LogoImgProps {
  imglink: string;
  imgname: string;
  className?: string;
  styles?: React.CSSProperties;
}

export const LogoImg = (props: LogoImgProps) => {
  const { imglink, imgname, className, styles } = props;

  return (
    <>
      <img
        src={imglink}
        alt={imgname}
        loading="lazy"
        className={className}
        style={styles}
      />
    </>
  );
};
