import React from "react";
import { Tooltip } from "@carbon/react";
import PropTypes from "prop-types";
import { Tag } from "../../Tag/Tag";
import styles from "./AccountInfoCard.module.scss";

function Programs({ programs }) {
  return (
    <article role="presentation" className={styles.programs}>
      <dl>
        <dt>Programs</dt>
        <dd>&nbsp;</dd>
      </dl>
      {programs?.map((program) => {
        return (
          <Tooltip
            className={styles.tooltip}
            enterDelayMs={0}
            key={program.id}
            label={program.description}
            leaveDelayMs={0}
          >
            <Tag
              showIcon
              renderIcon={program.icon}
              text={program.name}
              theme={program.theme}
              tabIndex="0"
            />
          </Tooltip>
        );
      })}
    </article>
  );
}

export { Programs };

Programs.propTypes = {
  /** An array of billing programs associated with the account */
  programs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.func,
      theme: PropTypes.string
    })
  )
};
