async function shortenURL(e) {
  e.preventDefault();

  const responseNode = document.getElementById("response");
  const responseAnchorNode = document.getElementById("response-anchor");

  const input = e.target[0].value;

  const isURLValid = validateURL(input);
  if (!isURLValid) return;

  const shortenedURL = await shorten(input);

  if (shortenedURL === undefined) {
    throwError("This URL isn't valid.");
    return;
  }

  responseNode.innerText = shortenedURL;
  responseNode.setAttribute("href", shortenedURL);
  responseAnchorNode.href = shortenedURL;

  throwError(" ");
}

function validateURL(input) {
  if (!input) {
    throwError("You need to type something.");
    return false;
  }

  try {
    new URL(input);
    return true;
  } catch (e) {
    throwError("Could not shorten. This is probably not a URL.");
    return false;
  }
}

async function shorten(input) {
  var response = "";

  await fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",
    headers: {
      Authorization: "Bearer 2d23eda99d989560f48aca16f1fb4b6dc6a6cb20",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ long_url: input }),
  })
    .then((res) => res.json())
    .then((res) => (response = res.link));

  return response;
}

function throwError(msg) {
  const errorNode = document.getElementById("error");

  errorNode.innerText = msg;
}

function copyURL() {
  const responseAnchorNode = document.getElementById("response-anchor");
  const responseNode = document.getElementById("response");
  const content = responseNode.innerText;

  if (!content) return;

  navigator.clipboard.writeText(content);
  responseNode.style.color = "#cf3b3b";
  responseAnchorNode.style.textDecoration = "none";
}
