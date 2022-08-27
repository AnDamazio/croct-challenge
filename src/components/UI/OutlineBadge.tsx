import { ReactElement } from "react";

const OutlineBadge = (props: {
  name: string;
  className?: string;
}): ReactElement => {
  const classes = "badge badge-secondary badge-outline " + props.className;

  return <div className={classes}>{props.name}</div>;
};

export default OutlineBadge;
