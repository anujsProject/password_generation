const addChar = (randomPass, val) => {
  while (true) {
    const randomNo = Math.floor(Math.random() * 8);
    if (!randomPass[randomNo]) {
      randomPass[randomNo] = val;
      break;
    }
  }
  return randomPass;
};

const randomPasswordGenerator = () => {
  const capsL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const smallL = "abcdefghijklmnopqrstuvwxyz";
  const nums = "0123456789";
  const specialChar = "@!#$^&()*%";
  const allStr = [capsL, smallL, nums, specialChar];

  let randomPass = new Array(8);

  const oneCaps = capsL[Math.floor(Math.random() * capsL.length)];
  const oneSmall = smallL[Math.floor(Math.random() * smallL.length)];
  const oneNum = nums[Math.floor(Math.random() * nums.length)];
  const oneSpec = specialChar[Math.floor(Math.random() * specialChar.length)];

  randomPass = addChar(randomPass, oneCaps);
  randomPass = addChar(randomPass, oneSmall);
  randomPass = addChar(randomPass, oneSpec);
  randomPass = addChar(randomPass, oneNum);

  for (let i = 0; i < 4; i++) {
    const r = Math.floor(Math.random() * 4);
    const c = Math.floor(Math.random() * allStr[r].length);
    randomPass = addChar(randomPass, allStr[r][c]);
  }

  return randomPass.join("");
};

const handlePasswordInput = (e) => {
  e.preventDefault();
  const regx = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9#s]).{6,}$";
  const pass = document.querySelector(".form__field__input--password").value;
  const check = pass.match(regx);

  if (!check) {
    const randomPassword = randomPasswordGenerator();
    document.querySelector(".form__helper__password__suggested").textContent =
      randomPassword;
  }
};

document.querySelector(".form").addEventListener("submit", handlePasswordInput);
