import React from "react";
import styled from "styled-components";
import PlanInterface from "../shared-interfaces/plan-interface";
import RegistrationFlowButton from "./RegistrationFlowButton";
import Colors from "../../../constants/colors";
import { ReactComponent as GreyCheckmark } from "../assets/grey-checkmark.svg";

interface PlanProps {
  className?: string;
  isSelected: boolean;
  plan: PlanInterface;
  selectPlan: Function;
}

const Plan = styled(({ className, isSelected, plan, selectPlan }: PlanProps) => {
  return (
    <div id="individual-plan" className={className}>
      <h2>{plan.name}</h2>
      <p>{plan.topText}</p>

      <ul>
        {plan.bulletPoints.map((bulletPoint) => (
          <li key={bulletPoint}>
            <GreyCheckmark /> <span>{bulletPoint}</span>
          </li>
        ))}
      </ul>

      <br />

      <RegistrationFlowButton
        variant={isSelected ? "contained" : "outlined"}
        textColor={isSelected ? Colors.backgroundWhite : Colors.activeBlue}
        onClick={() => selectPlan()}
      >
        {plan.buttonText}
      </RegistrationFlowButton>
    </div>
  );
})`
  display: inline-block;
  width: 26%;
  margin-left: 1%;
  margin-right: 1%;
  background-color: ${Colors.backgroundGrey};
  border-radius: 1rem;
  height: ${(props) => (props.isSelected ? "20rem" : "19rem")};
  padding-top: ${(props) => (props.isSelected ? "1rem" : "0")};
  margin-top: ${(props) => (props.isSelected ? "0" : "1rem")};
  transform: scale(1);
  transition: 0.5s all ease;

  .registration-flow-button {
    margin-left: 0.5rem;
  }

  h2 {
    text-align: center;
    width: 14rem;
  }

  p {
    text-align: center;
    font-weight: bold;
    font-size: 0.85rem;
  }

  ul {
    list-style-type: none;
    text-align: left;
    padding-left: 2rem;

    li {
      font-weight: bold;
      font-size: 0.75rem;
      padding: 0.25rem 0.75rem;

      svg {
        vertical-align: middle;
      }

      span {
        vertical-align: middle;
        padding-left: 0.5rem;
      }
    }
  }
`;

export default Plan;
