export function GetDateInfo() {
  const Today = new Date();

  return {
    day: Today.toLocaleString("default", { day: "numeric" }),
    weekday: Today.toLocaleString("default", { weekday: "long" }),
    month: Today.toLocaleString("default", { month: "long" }),
    year: Today.getFullYear(),
  };
}

export function GetId() {
  return `${Math.floor(Date.now() + Math.random())}`;
}

export function ReplaceItemAtIndex(arr, index, newValue) {
  if (index < 0 || index >= arr.length) {
    throw new Error("Index out of bounds");
  }

  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export function RemoveItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
