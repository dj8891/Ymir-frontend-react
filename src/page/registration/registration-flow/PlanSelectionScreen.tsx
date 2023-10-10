import React from "react";
import styled from "styled-components";
import BaseRegistrationScreen from "../BaseRegistrationScreen";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import PlanInterface from "../shared-interfaces/plan-interface";
import Plan from "../components/Plan";
import RegistrationFlowButton from "../components/RegistrationFlowButton";

interface PlanSelectionScreenProps {
  className?: string;
}

const plans: Array<PlanInterface> = [
  {
    name: "Ymir Basic",
    slug: "tier-1",
    topText: "For... type of user",
    bulletPoints: ["Bullet point 1", "Bullet point 2", "Bullet point 3"],
    buttonText: "Choose Tier 1",
  },
  {
    name: "Ymir",
    slug: "tier-2",
    topText: "For... type of user",
    bulletPoints: ["Bullet point 1", "Bullet point 2", "Bullet point 3"],
    buttonText: "Choose Tier 2",
  },
  {
    name: "Ymir +",
    slug: "tier-3",
    topText: "For... type of user",
    bulletPoints: ["Bullet point 1", "Bullet point 2", "Bullet point 3"],
    buttonText: "Choose Tier 3",
  },
];

const PlanSelectionScreen = styled(({ className }: PlanSelectionScreenProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activePlan, setActivePlan] = React.useState("tier-2");

  const onSubmit: any = (activePlan: any) => {
    console.log({ activePlan });
    navigate("/registration/4");
  };

  return (
    <div className={className}>
      <BaseRegistrationScreen title={t("registrationFlow.planSelectionScreen.title")}>
        <p>
          <strong>{t("registrationFlow.planSelectionScreen.lookAndCompare")}</strong>
        </p>
        <h2>{t("registrationFlow.planSelectionScreen.whichPlan")}</h2>

        <br />

        <div className="plan-area">
          {plans.map((plan: PlanInterface) => (
            <Plan
              isSelected={plan.slug === activePlan}
              plan={plan}
              key={plan.slug}
              selectPlan={() => {
                setActivePlan(plan.slug);
              }}
            />
          ))}
        </div>

        <br />

        <RegistrationFlowButton variant="contained" onClick={onSubmit}>
          {t("registrationFlow.planSelectionScreen.continue")}
        </RegistrationFlowButton>
      </BaseRegistrationScreen>
    </div>
  );
})`
  p,
  h2 {
    text-align: center;
  }

  .plan-area {
    height: 22rem;
    text-align: center;
  }

  #base-registration-screen .child-content > .registration-flow-button {
    margin-left: 5rem;
  }
`;

export default PlanSelectionScreen;
