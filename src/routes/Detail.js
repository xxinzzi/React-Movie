import { useEffect } from "react";
import { useParams } from "react-router-dom"; //useParams

function Detail() {
  const { id } = useParams(); //useParams, App.js에서 url이 받는 변수(id) 값을 넘겨줌
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json(); //id를 알고 있으니까 API로부터 detail 정보를 fetch해 올 수 있음
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
