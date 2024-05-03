export function checkEmpty(data) {
    let return_object = {};
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
                return_object[key] = data[key].value; 
            }
        });
        return return_object;
    } else {
        console.error("Data is empty");
        return null; 
    }
}

