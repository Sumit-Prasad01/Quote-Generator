const Quote = document.getElementById('quote');
const Author = document.getElementById('author');


const api_url = ""; //Your Api URL

async function getQuote() {
  try {
    const response = await fetch(api_url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    Quote.innerHTML = data.quote
    Author.innerHTML = data.author
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}

function Tweet(){
  window.open("https://twitter.com/intent/tweet?text=",+ Quote.innerHTML,"Tweet Window", "width = 600, height = 600 ", "-------- by"+Author.innerHTML );
}
