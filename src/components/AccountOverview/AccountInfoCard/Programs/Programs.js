import React from "react";
import Tippy from "@tippyjs/react";
import PropTypes from "prop-types";
import "tippy.js/dist/tippy.css";
import { Tag } from "../../../Tag/Tag";
import styles from "../AccountInfoCard.module.scss";
import "./tooltip.overrides.scss";

function Programs({ programs }) {
  return (
    <article role="presentation" className={styles.programs}>
      <dl>
        <dt>Programs</dt>
        <dd>&nbsp;</dd>
      </dl>
      {programs?.map((program) => {
        return (
          <Tippy
            className="program-tooltip"
            key={program.id}
            allowHTML={false}
            content={program.description}
          >
            <div className={styles["tag-container"]} tabIndex={0}>
              <Tag
                showIcon
                renderIcon={program.icon}
                text={program.name}
                theme={program.theme}
                className={styles["program-tag"]}
              />
            </div>
          </Tippy>
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
