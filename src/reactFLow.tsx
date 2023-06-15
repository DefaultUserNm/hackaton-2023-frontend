import React from "react";
import { MarkerType, Position } from "reactflow";

export const nodes = [
  {
    id: "1",
    type: "input",
    data: {
      label: "one",
    },
    position: { x: 800, y: 0 },
  },
  {
    id: "2",
    data: {
      label: "two",
    },
    position: { x: 600, y: 100 },
  },
  {
    id: "3",
    type: "output",
    data: {
      label: "three",
    },
    position: { x: 1000, y: 100 },
  },
  {
    id: "4",
    type: "output",
    data: {
      label: "four",
    },
    position: { x: 400, y: 200 },
  },
  {
    id: "5",
    type: "output",
    data: {
      label: "five",
    },
    position: { x: 800, y: 200 },
  },
  {
    id: "6",
    type: "output",
    data: {
      label: "six",
    },
    position: { x: 1200, y: 200 },
  },
  // {
  //   id: '4',
  //   type: 'custom',
  //   position: { x: 100, y: 200 },
  //   data: {
  //     selects: {
  //       'handle-0': 'smoothstep',
  //       'handle-1': 'smoothstep',
  //     },
  //   },
  // },
  // {
  //   id: "5",
  //   type: "output",
  //   data: {
  //     label: "custom style",
  //   },
  //   className: "circle",
  //   style: {
  //     background: "#2B6CB0",
  //     color: "white",
  //   },
  //   position: { x: 400, y: 200 },
  //   sourcePosition: Position.Right,
  //   targetPosition: Position.Left,
  // },
  // {
  //   id: "6",
  //   type: "output",
  //   style: {
  //     background: "#63B3ED",
  //     color: "white",
  //     width: 100,
  //   },
  //   data: {
  //     label: "Node",
  //   },
  //   position: { x: 400, y: 325 },
  //   sourcePosition: Position.Right,
  //   targetPosition: Position.Left,
  // },
  // {
  //   id: "7",
  //   type: "default",
  //   className: "annotation",
  //   data: {
  //     label: (
  //       <>
  //         On the bottom left you see the <strong>Controls</strong> and the
  //         bottom right the <strong>MiniMap</strong>. This is also just a node 🥳
  //       </>
  //     ),
  //   },
  //   draggable: false,
  //   selectable: false,
  //   position: { x: 150, y: 400 },
  // },
];
export const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true }, // label: "this is an edge label"
  { id: "e1-3", source: "1", target: "3", animated: true },
  { id: "e2-4", source: "2", target: "4", animated: true },
  { id: "e2-5", source: "2", target: "5", animated: true },
  { id: "e3-6", source: "", target: "3", animated: true }
  // {
  //   id: "e4-5",
  //   source: "4",
  //   target: "5",
  //   type: "smoothstep",
  //   sourceHandle: "handle-0",
  //   data: {
  //     selectIndex: 0,
  //   },
  //   markerEnd: {
  //     type: MarkerType.ArrowClosed,
  //   },
  // },
  // {
  //   id: "e4-6",
  //   source: "4",
  //   target: "6",
  //   type: "smoothstep",
  //   sourceHandle: "handle-1",
  //   data: {
  //     selectIndex: 1,
  //   },
  //   markerEnd: {
  //     type: MarkerType.ArrowClosed,
  //   },
  // },
];
