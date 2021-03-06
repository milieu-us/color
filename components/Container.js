import React from "react"
import theme from "../theme"

const Container = ({ innerBg, innerWidth, ...props }) => {
  return (
    <Div {...props}>
      <Div mx="auto" maxWidth={innerWidth} bg={innerBg}>
        {props.children}
      </Div>
    </Div>
  )
}

Container.defaultProps = {
  innerWidth: theme.containerWidth,
  innerBg: "transparent"
}

export default Container
