// визначення розмірів екрану
export default function getScreenSize() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    return 'mobile';
  } else if (screenWidth < 1440) {
    return 'tablet';
  } else {
    return 'desktop';
  }
}
