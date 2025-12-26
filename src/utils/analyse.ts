const getCookie = (token: string) => {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.startsWith(token + "=")) {
        cookieValue = decodeURIComponent(
          cookie.substring(token.length + 1)
        );
        break;
      }
    }
  }
  return cookieValue;
};

export const analyzeText = async (text: string) => {
  const csrfToken = getCookie("csrftoken");

  const headers = {
    "Content-Type": "application/json",
    ...(csrfToken && { "X-CSRFToken": csrfToken }),
  };

  const response = await fetch(
    "http://localhost:8000/api/real-time-analyze/",
    {
      method: "POST",
      headers,
      body: JSON.stringify({ text }),
    }
  );

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
};
