import React from 'react'
import Row from '../Row/Row';
import requests from "../../requests";
import Banner from '../Banner/Banner';

function HomePage() {
  return (
    <div>
      <Banner/>
        <Row
            title="NETFLIX ORIGINALS"
            isLargeRow
            fetchUrl={requests.fetchNetflixOriginals}
          />
          <Row title="Trending" fetchUrl={requests.fetchTrending} />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomePage