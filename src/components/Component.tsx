import React from "react";

//import {someComponent} from './someComponent';

import "./MyComponent.scss";

const myConstant: string = "My Constant";

interface Props {}

interface State {}

//export/Create Context

export class MyComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return <div />;
  }
}
