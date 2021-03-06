import React from "react"
import styled from "styled-components"
import { Text } from "components"
import { Link } from "react-router-dom"

const StyledCard = styled(Link)`
    padding: 0 0 1em 0;
    margin: 0 1em 1em 1em;
    min-width: 13em;
    @media (min-width: 767px) {
      width: 13em;
    }
    max-height: 28em;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    :hover {
      text-decoration: none;
    };
}`
const RecipeCard = (props) => {
  const { imgSrc, title, time, description, href } = props

  return (
    <StyledCard to={href}>
      <div
        title={title}
        className="row"
        style={{
          backgroundImage: `url(${imgSrc})`,
          width: "100%",
          paddingBottom: "75%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: "0"
        }}
      />
      <div style={{ marginTop: "0.5em" }}>
        <Text medium bold style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</Text>
        <Text>Cooking Time:{" "}{time}{` minute${time === 1 ? "" : "s"}`}</Text>
        <Text grey small style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{description}</Text>
      </div>
    </StyledCard>
  )
}

export default RecipeCard
