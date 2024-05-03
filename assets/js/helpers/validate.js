export function checkEmpty(data) {
    let returnObject = {};
    if (data) {
        Object.keys(data).forEach((key) => {
            if (!data[key].value) {
                document.getElementById(data[key].id).classList.add("border-red-500");
                document.getElementById(data[key].id).classList.remove("border-gray-300");
                document.querySelector(`label[for="${data[key].id}"]`).classList.remove("hidden");
            } else {
                document.getElementById(data[key].id).classList.remove("border-red-500");
                document.getElementById(data[key].id).classList.add("border-gray-300");
                document.querySelector(`label[for="${data[key].id}"]`).classList.add("hidden");
                returnObject[key] = data[key].value;
            }
        });
        return returnObject;
    } else {
        console.error("Data is empty");
        return null;
    }
}

export function compareData(array, showWarnings = false) {
    const data = Object.values(array);
    if (data && showWarnings) {
        for (let i = 0; i < data.length - 1; i++) {
            for (let j = i + 1; j < data.length; j++) {
                if (data[i].value !== data[j].value) {
                    document.getElementById(data[i].id).classList.add("border-red-500");
                    document.getElementById(data[i].id).classList.remove("border-gray-300");
                    document.querySelector(`label[for="${data[i].id}"]`).classList.remove("hidden");
                    return false;
                }else{
                    document.getElementById(data[i].id).classList.remove("border-red-500");
                    document.getElementById(data[i].id).classList.add("border-gray-300");
                    document.querySelector(`label[for="${data[i].id}"]`).classList.add("hidden");
                    return true;
                }
            }
        }
    }
    return true;
}
