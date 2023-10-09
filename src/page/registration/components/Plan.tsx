import React from "react";
import styled from "styled-components";
import PlanInterface from "../shared-interfaces/plan-interface";
import RegistrationFlowButton from "./RegistrationFlowButton";
import Colors from "../../../constants/colors";

interface PlanProps {
  className?: string;
  isSelected: boolean;
  plan: PlanInterface;
}

const Plan = styled(({ className, isSelected, plan }: PlanProps) => {
  return (
    <div id="individual-plan" className={className}>
      <h2>{plan.name}</h2>
      <p>{plan.topText}</p>

      <br />

      <ul>
        {plan.bulletPoints.map((bulletPoint) => (
          <li key={bulletPoint}>{bulletPoint}</li>
        ))}
      </ul>

      <br />

      <RegistrationFlowButton variant="contained">{plan.buttonText}</RegistrationFlowButton>
    </div>
  );
})`
  display: inline-block;
  background-color: ${Colors.backgroundGrey};
  border-radius: 1rem;
  margin: 1rem;
  padding: 1rem;

  h2 {
    text-align: center;
    width: 14rem;
  }

  p {
    text-align: center;
  }
`;

export default Plan;
