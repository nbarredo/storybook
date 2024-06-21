import React from "react";
import { Tooltip } from "@carbon/react";
// import PropTypes from "prop-types";
import { Tag } from "../../Tag/Tag";
import styles from "./AccountInfoCard.module.scss";
import { fuelAssistanceIcon, winterProtectionIcon } from "./Icons";

function Programs() {
  return (
    <article role="presentation" className={styles.programs}>
      <dl>
        <dt>Programs</dt>
        <dd>&nbsp;</dd>
      </dl>
      <Tooltip
        enterDelayMs={0}
        leaveDelayMs={0}
        label="You're in this program which prevents service from being shut off from Nov. 1 to May 1 with no late payment charges."
        className={styles.tooltip}
      >
        <Tag
          showIcon
          renderIcon={winterProtectionIcon}
          text="Winter Protection"
          theme="purple"
          tabIndex="0"
        />
      </Tooltip>
      <Tooltip
        enterDelayMs={0}
        leaveDelayMs={0}
        label="You're enrolled in this program that helps pay a portion of your winter heating bills."
        className={styles.tooltip}
      >
        <Tag
          showIcon
          renderIcon={fuelAssistanceIcon}
          text="Fuel Assistance"
          theme="purple"
          tabIndex="0"
        />
      </Tooltip>
    </article>
  );
}

export { Programs };

Programs.propTypes = {};
