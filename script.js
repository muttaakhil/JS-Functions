// --- 1. TYPE CONVERSION ---
function convertType() {
  const txt = document.getElementById("numStr").value;
  const toInt = Number.parseInt(txt);
  const toFloat = Number.parseFloat(txt);
  const toBool = Boolean(txt);

  document.getElementById("typeOutput").innerHTML =
    `Original: "${txt}"\nInteger: ${toInt}\nFloat: ${toFloat}\nBoolean: ${toBool}`;
}

// --- 2. OPERATORS ---
function showOps() {
  const x = +document.getElementById("op1").value;
  const y = +document.getElementById("op2").value;
  let output = `Arithmetic:\n${x}+${y}=${x+y}\n${x}-${y}=${x-y}\n${x}*${y}=${x*y}\n${x}/${y}=${x/y}\n${x}%${y}=${x%y}\n\n`;
  output += `Logical:\n(${x}>0 && ${y}>0)=${x>0&&y>0}\n(${x}>0 || ${y}>0)=${x>0||y>0}\n!(${x}>0)=${!(x>0)}`;
  document.getElementById("opOutput").innerText = output;
}

// --- 3. IF ELSE ---
function ageCheck() {
  const a = Number(document.getElementById("age").value);
  const msg = a >= 18 ? "You are an Adult ✅" : "You are a Minor 🚸";
  document.getElementById("ifOutput").innerText = msg;
}

// --- 4. LOOPS ---
function loopDemo() {
  const n = Number(document.getElementById("loopNum").value);
  let res = "For Loop: ";
  for (let i = 1; i <= n; i++) res += i + " ";

  res += "\nWhile Loop: ";
  let w = 1;
  while (w <= n) { res += w + " "; w++; }

  res += "\nFor-in (Object): ";
  const obj = {x:10, y:20, z:30};
  for (let k in obj) res += `${k}:${obj[k]} `;

  res += "\nFor-of (Array): ";
  const arr = [5,10,15];
  for (const num of arr) res += num + " ";

  document.getElementById("loopOutput").innerText = res;
}

// --- 5. SWITCH CASE ---
function switchExample() {
  let day = document.getElementById("day").value.toLowerCase();
  let msg = "";
  switch(day) {
    case "mon": msg = "Start of Week"; break;
    case "tue": msg = "Second Day"; break;
    case "wed": msg = "Mid Week"; break;
    case "thu": msg = "Almost Friday"; break;
    case "fri": msg = "Weekend Coming"; break;
    case "sat":
    case "sun": msg = "Weekend!"; break;
    default: msg = "Invalid day";
  }
  document.getElementById("switchOutput").innerText = msg;
}

// --- 6. FUNCTIONS ---
function squareNum() {
  let n = Number(document.getElementById("fn1").value);
  function square(x) {
    return x * x;
  }
  document.getElementById("fnOutput").innerText = "Square of " + n + " = " + square(n);
}
