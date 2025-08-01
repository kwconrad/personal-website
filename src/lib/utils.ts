export const scrollToSection = (sectionId: string, offset?: number) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - (offset || 72); // default to 72px offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
