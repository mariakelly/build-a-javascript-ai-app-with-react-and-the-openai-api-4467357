import PropTypes from "prop-types";

const PromptToLocation = (prompt) => {
  const url = "https://aims.hubwtqa.com/api/v1/chat";

  const data = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  };

  const params = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_AIMS_PROXY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    method: "POST",
  };

  return fetch(url, params)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("Error:", error);
      return Promise.reject(
        "Unable to identify a location from your question. Please try again."
      );
    });
};

PromptToLocation.propTypes = {
  prompt: PropTypes.string.isRequired,
};

export default PromptToLocation;
