let toastTimer;
export const showToast = (msg) => {
  const toast = document.querySelector(".toast-notification");
  toast.innerHTML = `<p>${msg}</p>`;
  toast.style.bottom = "2rem";
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.style.bottom = "-3rem";
  }, 2000);
};
