"use client";
import React from "react";
import styles from "./styles.module.scss";
import ArrowLeftIcon from "@assets/icons/arrow-left.svg";
import ArrowRightIcon from "@assets/icons/arrow-right.svg";

interface PaginationProps {
  currentPage: number;
  prevPage: () => void;
  nextPage: () => void;
  currentItems: any[];
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  prevPage,
  nextPage,
  currentItems,
  itemsPerPage,
}) => {
  // const closePopup = () => {
  //   console.log("yyy");
  // };

  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.paginationButton}
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        <ArrowLeftIcon />
      </button>
      <span className={styles.pageNumber}>{currentPage}</span>
      <button
        className={styles.paginationButton}
        // onClick={closePopup}
        onClick={nextPage}
        disabled={currentItems.length < itemsPerPage}
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
};

export default Pagination;
