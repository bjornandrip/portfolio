import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

import styles from '@/styles/Testing2.module.css'

function Content({ day, disabled }) {
  return (
    <motion.h1
      className={styles.title}
      layoutId="title"
      style={{ opacity: disabled ? 0.2 : 1 }}
    >
      {day}
    </motion.h1>
  );
}

function DateButton({ day, onCollapse, onExpand, disabled }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const collapseDate = () => {
    setIsExpanded(false);
    onCollapse();
  };

  const expandDate = () => {
    setIsExpanded(true);
    onExpand();
  };

  return (
    <div className={styles.cardContainer}>
      <AnimateSharedLayout>
        {isExpanded ? (
          <>
                <motion.div
                    className={`${styles.card} ${styles.expanded}`}
                    layoutId="expandable-card"
                    onClick={collapseDate}
                >
                    expanded
                </motion.div>
                <motion.p
                    className={`${styles.card} ${styles.expanded} ${styles.secondary}`}
                    onClick={collapseDate}
                    transition={{ delay: 0.3 }}
                    initial={{ opacity: 0, top: "6rem" }}
                    animate={{ opacity: 1, top: "3rem" }}
                >
                    Today is clear
                </motion.p>
    </>
        ) : (
            <motion.div
            className={`${styles.card} ${styles.compact}`}
            layoutId="expandable-card"
            onClick={expandDate}
          >
            {day}
          </motion.div>
        )}
      </AnimateSharedLayout>
    </div>
  );
}

export default function Testing() {
  const [expandedDay, setCollapsedDay] = useState();
  const days = [25, 26, 27, 28, 29];

  return (
    <div className={styles.container}>
      <p>Click on a date to see the expanded view.</p>
      <div className={styles.dates}>
        {days.map(day => (
          <DateButton
            day={day}
            disabled={expandedDay !== day && expandedDay !== undefined}
            onExpand={() => setCollapsedDay(day)}
            onCollapse={() => setCollapsedDay()}
          />
        ))}
      </div>
    </div>
  );
}
