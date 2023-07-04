import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews = async () => {
    const newsUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e08753d77ab942a7aae76ed920ca8cec&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(30)
    let data = await fetch(newsUrl);
    let parsedData = await data.json();
    props.setProgress(100)

    console.log(parsedData);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

  }

  useEffect(() => {

    document.title = `${capitalizeFirstLetter(
      props.category
    )}  Kal-Tak News `;

    updateNews();
  }, [])


  const fetchMoreData = async () => {

    const newsUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e08753d77ab942a7aae76ed920ca8cec&page=${page + 1}&pagesize=${props.pageSize}`;

    setPage(page + 1);
    setLoading(true);
    let data = await fetch(newsUrl);
    let parsedData = await data.json();
    console.log(parsedData);

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "righteous ,cursive",
          fontsize: "65px",
          fontweight: "normal",
          marginTop: '5%',
          marginBottom: '1%'
        }}
      >
        {" "}
        Top {capitalizeFirstLetter(props.category)} Headlines{" "}
      </h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={
          articles.length !== articles.totalResults
        }
        loader={loading && <Spinner />}
      >
        <div className="container">
          <div className="row">
            {loading && <Spinner />}
            {articles.map((element) => {
              return (
                <div className="col-md-4 my-2 " key={props.url}>
                  <NewsItem
                    publishedAt={element.publishedAt}
                    title={element.title}
                    description={element.description}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://source.unsplash.com/random/800x800/?img=1"
                    }
                    url={element.url}
                    source={element.source.name}
                  />
                </div>
              );
            })}
            ;
          </div>
        </div>
      </InfiniteScroll>
    </>
  );

}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
  setProgess: 10
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgess: PropTypes.number
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default News;
