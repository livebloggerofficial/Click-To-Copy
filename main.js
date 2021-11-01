const copyBtn = document.querySelector(".copy-btn");
const borderRadiusInput = document.querySelector("#border-radius-input");
const box = document.querySelector(".box");
const toastNotification = document.querySelector(".toast-notification");

const updateBorderRadius = (e) => {
  let borderRadiusValue = e.target.value;

  if (borderRadiusValue > 100) {
    borderRadiusInput.value = 100;
    borderRadiusInput.classList.add("error");
    box.style.borderRadius = Math.floor(borderRadiusValue) + "px";

    setTimeout(() => {
      borderRadiusInput.classList.remove("error");
    }, 1000);
  } else {
    borderRadiusInput.classList.remove("error");
  }

  box.style.borderRadius = Math.floor(borderRadiusValue) + "px";
};

borderRadiusInput.addEventListener("input", updateBorderRadius);

const copyText = () => {
  let borderRadiusValue = borderRadiusInput.value || 0;
  let code = `border-radius: ${Math.floor(borderRadiusValue)}px;`;

  navigator.clipboard.writeText(code).then(() => {
    toastNotification.classList.add("active");
    setTimeout(() => {
      toastNotification.classList.remove("active");
    }, 2000);
  });
};

copyBtn.addEventListener("click", copyText);
