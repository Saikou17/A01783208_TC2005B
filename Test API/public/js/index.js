const result_p = document.getElementById("fetch_result");
const response_json = await fetch("http://localhost:3000/api/json_text", {method:"GET"})
if(response_json.ok){
    const json_text = await response_json.text();
}
else
    console.log(`HTTP Error: ${response_json.status}`)
