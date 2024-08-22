import React from "react";
// import { Tooltip } from "@carbon/react";
import Tippy from "@tippyjs/react";
import PropTypes from "prop-types";
import "tippy.js/dist/tippy.css";
import { Tag } from "../../../Tag/Tag";
import styles from "../AccountInfoCard.module.scss";
import "./tool-tip-styles.scss";

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
            className="tooltip"
            key={program.id}
            content={program.description}
          >
            <div className="tag-container" tabIndex={0}>
              <Tag
                showIcon
                renderIcon={program.icon}
                text={program.name}
                theme={program.theme}
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
