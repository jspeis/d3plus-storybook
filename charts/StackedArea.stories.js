import React from "react";
import {argTypes, StackedArea as Viz} from "../args/StackedArea.args";
import configify from "../helpers/configify";

export default {
  title: "Charts/Stacked Area",
  component: Viz,
  argTypes
};

const Template = (args) => <Viz config={configify(args, argTypes)} />;

export const StackedArea = Template.bind({});
StackedArea.args = {
  data: [
    {id: "alpha", x: 4, y:  7},
    {id: "alpha", x: 5, y: 25},
    {id: "alpha", x: 6, y: 13},
    {id: "beta",  x: 4, y: 17},
    {id: "beta",  x: 5, y:  8},
    {id: "beta",  x: 6, y: 13}
  ],
  groupBy: "id"
};
