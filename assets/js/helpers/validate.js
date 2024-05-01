export function checkEmpty(data) {
    let return_array = [];
    if (data) {
        Object.keys(data).forEach((key) => {
            if (!data[key].value) { 
                document.getElementById(data[key].id).classList.add("border-red-500");
                document.getElementById(data[key].id).classList.remove("border-gray-300");
                document.querySelector(`label[for="${data[key].id}"]`).classList.remove("hidden");
                return return_array;
            } else {
                document.getElementById(data[key].id).classList.remove("border-red-500");
                document.getElementById(data[key].id).classList.add("border-gray-300");
                document.querySelector(`label[for="${data[key].id}"]`).classList.add("hidden");
                return_array[key] = data[key].value;
                // return_array.push({ [key]: data[key] });

            }
        })
        return return_array;
    } else {
        console.error("Data is empty")
    }
}
