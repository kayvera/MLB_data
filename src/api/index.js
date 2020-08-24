export const fetchData = async () => {
  this.setState({ ...this.state, isFetching: true });

  axios({
    method: "GET",
    url: "https://mlb-data.p.rapidapi.com/json/named.mlb_broadcast_info.bam",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "mlb-data.p.rapidapi.com",
      "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
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
      this.setState({ data: response.data, isFetching: false });
    })
    .catch((error) => {
      console.log(error);
      this.setState({ ...this.state, isFetching: false });
    });
};
