import cityJson from "../assets/myjson.json";

export function cityFilter(text) {
  var res = cityJson.filter((data) => {
    var aa = data.city.name.includes(text);
    return aa;
  });
  return res;
}