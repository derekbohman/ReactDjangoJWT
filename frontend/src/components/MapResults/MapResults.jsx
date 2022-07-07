const MapResults = () => {
  searchResults ? (
    searchResults.map((video) => {
      if (video.snippet) {
        return (
          <div key={video.id.videoId}>
            <img
              key={video.id.videoId}
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.tittle}
              onClick={() => handleVideoPush(video)}
            />
            <p>{video.snippet.title}</p>
          </div>
        );
      } else {
        return null;
      }
    })
  ) : (
    <div>Loading...</div>
  );
};

export default MapResults;
