type PositionLeft = "left-";
type PositionRight = "right-";
type PositionBottom = "bottom-";
type PositionTop = "top-";
type Number = "0" | "1" | "1/2" | "2" | "3";

type Left = `${PositionLeft}${Number}`;
type Right = `${PositionRight}${Number}`;
type Bottom = `${PositionBottom}${Number}`;
type Top = `${PositionTop}${Number}`;

type Props = {
  left?: Left;
  right?: Right;
  bottom?: Bottom;
  top?: Top;
  customCss?: React.CSSProperties;
};

/**
 * Absolute is a component to wrap content in absolute center
 * @param children jsx or tsx
 * @returns tsx component
 */
const Absolute: React.FC<Props> = ({
  children,
  left,
  right,
  bottom,
  top,
  customCss,
}) => {
  return (
    <div
      style={{ ...customCss }}
      className={`absolute ${bottom !== undefined ? bottom : ""} ${
        right !== undefined ? right : ""
      } ${left !== undefined ? left : ""} ${top !== undefined ? top : ""}`}
    >
      {children}
    </div>
  );
};

export { Absolute };
