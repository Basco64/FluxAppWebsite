export default function switchTheme() {

    const currentTheme = document.documentElement.dataset.theme;
    
    if (currentTheme === "dark") {
        return document.documentElement.dataset.theme = "light";
    } else {
        return document.documentElement.dataset.theme = "dark";
    }
    
}
  