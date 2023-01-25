import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

import styles from '@/styles/Testing.module.css'

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

function ExpandedCard({ children, onCollapse }) {
  return (
    <>
      <motion.div
        className={`${styles.card} ${styles.expanded}`}
        layoutId="expandable-card"
        onClick={onCollapse}
      >
        {children}
      </motion.div>
      <motion.p
        className={`${styles.card} ${styles.expanded} ${styles.secondary}`}
        onClick={onCollapse}
        transition={{ delay: 0.3 }}
        initial={{ opacity: 0, top: "6rem" }}
        animate={{ opacity: 1, top: "3rem" }}
      >
        Today is clear
      </motion.p>
    </>
  );
}

function CompactCard({ children, onExpand, disabled }) {
  return (
    <motion.div
      className={`${styles.card} ${styles.compact}`}
      layoutId="expandable-card"
      onClick={disabled ? undefined : onExpand}
    >
      {children}
    </motion.div>
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
          <ExpandedCard onCollapse={collapseDate} day={day}>
            <Content day={day} disabled={disabled} />
          </ExpandedCard>
        ) : (
          <CompactCard onExpand={expandDate} disabled={disabled} day={day}>
            <Content day={day} disabled={disabled} />
          </CompactCard>
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
