export const fetchData = async () => {
  const axios = require("axios");

  axios({
    method: "GET",
    url: "https://mlb-data.p.rapidapi.com/json/named.mlb_broadcast_info.bam",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "mlb-data.p.rapidapi.com",
      "x-rapidapi-key": "9309bc1735msh49fb28155d75348p11cb42jsndf31386c2f58",
      useQueryString: true,
    },
    params: {
      start_date: "'20200515'",
      season: "'2020'",
      end_date: "'20201230'",
      src_comment: "'National'",
      src_type: "'TV'",
      tcid: "mm_mlb_schedule",
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
