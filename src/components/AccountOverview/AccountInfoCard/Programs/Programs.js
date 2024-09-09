import React from "react";
import PropTypes from "prop-types";
import { Tag } from "../../../Tag/Tag";
import { Tooltip } from "../../../Tooltip/Tooltip";
import styles from "../AccountInfoCard.module.scss";

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
            content={program.description}
            key={program.id}
            placement="top"
            triggerElement={
              <div className={styles["tag-container"]}>
                <Tag
                  showIcon
                  renderIcon={program.icon}
                  text={program.name}
                  theme={program.theme}
                  className={styles["program-tag"]}
                />
              </div>
            }
          />
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
