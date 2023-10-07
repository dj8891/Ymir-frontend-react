import React from "react";
import styled from "styled-components";
import Colors from "../../constants/colors";

import { NavLink } from "react-router-dom";
import secondaryNavItems from "./secondaryNavItems";

interface SecondaryNavbarProps {
  className?: string;
  activeNavItem: string;
}

const SecondaryNavbar = styled(({ activeNavItem, className }: SecondaryNavbarProps) => {
  const currentNavItem = secondaryNavItems().find((navItem) => navItem.slug === activeNavItem);

  return (
    <div id="sub-nav" className={className}>
      <h5>{currentNavItem?.title}</h5>
      <ul className="sub-nav-items">
        {currentNavItem?.subRoutes.map((subNavItem) => (
          <li className="sub-nav-item" key={subNavItem.url}>
            <NavLink
              to={subNavItem.url}
              className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
            >
              {subNavItem.icon}
              <span>{subNavItem.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
})`
  h5 {
    padding: 1.75rem 0.75rem;
    margin: 0;
  }

  ul.sub-nav-items {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      width: 86%;
      margin-top: 0.5rem;

      a {
        color: ${Colors.black};
        text-decoration: none;
        width: 100%;
        display: inline-block;
        border-radius: 0.25rem;
        padding: 0.25rem;
        margin-left: 0.25rem;

        svg {
          vertical-align: middle;
          display: inline-block;
          height: 1rem;
          width: 1rem;
        }

        span {
          padding-left: 0.5rem;
          vertical-align: middle;
          display: inline-block;
          width: 75%;
          font-size: 0.75rem;
        }

        &.active {
          color: ${Colors.activeBlue};
          background-color: ${Colors.backgroundWhite};
        }
      }
    }
  }
`;

export default SecondaryNavbar;
