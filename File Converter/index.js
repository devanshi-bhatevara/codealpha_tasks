const file = document.querySelector("#file");
const page = document.querySelector("#page");
const result = document.querySelector("#result");
const download = document.querySelector("#Download");

let allSheet;
file.addEventListener('change', () => {
    file.files[0].arrayBuffer().then((buffer) => {
        allSheet = XLSX.read(buffer);
        console.log(allSheet)
        let forSelect = allSheet.SheetNames.reduce
            ((acum, cur) => {
                return acum + `<option value= "${cur}"> ${cur}</option>`;
            }, "")
        page.innerHTML = forSelect;
        let jsonObj = XLSX.utils.sheet_to_json(allSheet.Sheets[page.value])
        let jsn = JSON.stringify({ data: jsonObj }, null, 4)
        result.value = jsn;
        download.href = "data:application/json;charset=utf-8," + encodeURIComponent(result.value)
        download.download = page.value;
    });
});

page.addEventListener('change', () => {
    let jsonObj = XLSX.utils.sheet_to_json(allSheet.Sheets[page.value])
    let jsn = JSON.stringify({ data: jsonObj }, null, 4)
    result.value = jsn;
    download.href = "data:application/json;charset=utf-8," + encodeURIComponent(result.value)
    download.download = page.value;
})
