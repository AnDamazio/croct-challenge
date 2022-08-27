import { ReactElement } from "react";

const Button = (props: {
  className?: false | string;
  children: string;
  onClick: () => void;
  type: "button" | "submit" | "reset";
}): ReactElement => {
  const classes = "btn " + props.className;

  return (
    <button className={classes} onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
