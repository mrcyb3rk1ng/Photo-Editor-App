let selectType = document.getElementById("selectType");
let range = document.getElementById("range");
let rangeValue = document.querySelector(".rangeValue");
let filteredImage = document.querySelector("#img");
let dragDropIcon = document.getElementById("dragDropIcon");
let saveBtn = document.getElementById("saveBtn");

//For Upload an Image To Edit

document.getElementById("insertImg").addEventListener("change", (e) => {

  const file = e.target.files[0];
  const reader = new FileReader();

  let result = reader.readAsDataURL(file);

  reader.addEventListener("load", () => {
    dragDropIcon.style.display = "none";
    filteredImage.src = reader.result;
  });

});

//For Editing/Filtering The Image

let slider = ()  => {
  valueParcent = (range.value / range.max) * 100;
  range.style.background = `linear-gradient(to right, dodgerblue ${valueParcent}%, #ddd ${valueParcent}%)`;
};

range.addEventListener("input", () => {
  
  //slider();
  
  let value = selectType.value;
  let filterValue = range.value;
  rangeValue.textContent = filterValue;
  
  if (value === "brightness") {
    range.min = "0";
    range.max = "200";
    rangeValue.textContent = filterValue + "%";
    filteredImage.style.filter = `brightness(${filterValue}%)`;
  } else if (value === "contrast") {
    range.min = "0";
    range.max = "200";
    rangeValue.textContent = filterValue + "%";
    filteredImage.style.filter = `contrast(${filterValue}%)`;
  } else if (value === "saturate") {
    range.min = "0";
    range.max = "200";
    rangeValue.textContent = filterValue + "%";
    filteredImage.style.filter = `saturate(${filterValue}%)`;
  } else if (value === "hue-rotate") {
    range.min = "0";
    range.max = "360";
    rangeValue.textContent = filterValue + "deg";
    filteredImage.style.filter = `hue-rotate(${filterValue}deg)`;
  } else if (value === "grayScale") {
    range.min = "0";
    range.max = "100";
    rangeValue.textContent = filterValue + "%";
    filteredImage.style.filter = `grayscale(${filterValue}%)`;
  } else if (value === "sepia") {
    range.min = "0";
    range.max = "100";
    rangeValue.textContent = filterValue + "%";
    filteredImage.style.filter = `sepia(${filterValue}%)`;
  } else if (value === "blur") {
    range.min = "0";
    range.max = "50";
    rangeValue.textContent = filterValue + "px";
    filteredImage.style.filter = `blur(${filterValue}px)`;
  } else if (value === "opacity") {
    range.min = "0";
    range.max = "100";
    rangeValue.textContent = filterValue + "%";
    filteredImage.style.filter = `opacity(${filterValue}%)`;
  } else {
    filteredImage.style.filter = `none`;
  }
});

//For Download The Edited Image

saveBtn.addEventListener('click',() => {
  const url = filteredImage.src;
  const fileName = prompt("Enter Your File Name :", `EditedImage${Date.now()}.jpg`);

  if (fileName) {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
  }
});
