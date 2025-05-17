import { memo } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchResults from "../components/SearchResults";
import { Helmet } from "react-helmet";

const SearchLocation = ({
  setHasdSearch,
  setExpendSearch,
  expendSearch,
  searchResult,
}) => {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Helmet>
        <title>جست و جو</title>
      </Helmet>
      <div className={`transition-all duration-300 ease-in-out`}>
        <SearchResults
          setHasdSearch={setHasdSearch}
          setExpendSearch={setExpendSearch}
          expendSearch={expendSearch}
          searchResult={searchResult}
        />
      </div>
    </>
  );
};

SearchLocation.propTypes = {
  setHasdSearch: PropTypes.func.isRequired,
  setExpendSearch: PropTypes.func.isRequired,
  expendSearch: PropTypes.bool.isRequired,
};

export default memo(SearchLocation);
