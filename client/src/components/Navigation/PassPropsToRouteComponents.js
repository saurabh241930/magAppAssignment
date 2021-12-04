import React from "react";

export default function PassPropsToRouteComponents({ children, ...props }) {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const routerChild = child.props.render();
      return React.cloneElement(child, {
        ...child.props,
        render: () => {
          return React.cloneElement(routerChild, {
            ...routerChild.props,
            ...props
          });
        }
      });
    }
    return child;
  });

  return <>{childrenWithProps}</>;
}