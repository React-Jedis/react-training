const ENTRY_TEMPLATE =
  '<div id="%ID%" class="entry"><span>%DATE%</span><span class="remove-icon">x</span></div>';

const addEntries = () => {
  const entriesSection = document.getElementById("entries");
  if (entriesSection) {
    const date = new Date();
    const fullDate = `${date.getHours()}:${date.getMinutes()} - ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
    const newElement = ENTRY_TEMPLATE.replace(
      "%ID%",
      `entry-${date.getMilliseconds()}`
    ).replace("%DATE%", fullDate);
    entriesSection.innerHTML += newElement;
  }
};

const removeEntries = (id) => {
  const entry = document.getElementById(id);
  entry?.parentNode?.removeChild(entry);
};

const addEntry = document.getElementById("addEntry");
addEntry?.addEventListener("click", addEntries);

const entries = document.getElementById("entries");
entries?.addEventListener("click", (event) => {
  if (event?.target?.parentNode?.className === "entry")
    removeEntries(event?.target?.parentNode?.id);
});
