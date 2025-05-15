export function getLocalData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }
export function saveLocalData(dataName, data) {
    const stringData = JSON.stringify(data)
    localStorage.setItem(dataName,stringData)
}