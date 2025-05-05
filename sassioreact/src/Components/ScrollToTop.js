function ScrollToTop() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div
      className="scroll-to-top"
      onClick={handleScrollToTop}
      role="button"
      aria-label="Scroll to top"
    >
      <span className="material-symbols-outlined arrow-upward">
        arrow_upward
      </span>
    </div>
  );
}

export default ScrollToTop;
