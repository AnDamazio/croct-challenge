import { ReactElement } from "react";

const ButtonGroup = (props: {
  className?: string;
  children: ReactElement[];
}): ReactElement => {
  const classes = "btn-group " + props.className;
  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

export default ButtonGroup;
