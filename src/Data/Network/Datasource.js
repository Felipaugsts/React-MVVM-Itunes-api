import http from "./Network";

export async function fetch(artist) {
  try {
    let data = [];
    await http.get(`${artist}`).then((response) => {
      let result = response.data.results;
      if (result) {
        data = result;
      }
    });
    return Promise.resolve({ error: null, result: data });
  } catch (err) {
    return Promise.resolve({ error: err.message, result: null });
  }
}
