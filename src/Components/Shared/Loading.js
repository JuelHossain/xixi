import { LoadingOverlay } from "@mantine/core";
import React from "react";

const Loading = ({ visible }) => {
  return <LoadingOverlay visible={visible} overlayBlur={2} />;
};

export default Loading;
