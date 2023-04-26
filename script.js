// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// Fetch data from APIs using Promise.all and Promise.any
const fetchData = async () => {
  const startTimeAll = performance.now();
  const allResponses = await Promise.all(apiUrls.map(url => fetch(url)));
  const endTimeAll = performance.now();

  const startTimeAny = performance.now();
  const anyResponse = await Promise.any(apiUrls.map(url => fetch(url)));
  const endTimeAny = performance.now();

  // Display time taken for each method to complete the API calls
  document.getElementById('output-all').textContent = `${endTimeAll - startTimeAll}ms`;
  document.getElementById('output-any').textContent = `${endTimeAny - startTimeAny}ms`;
}

fetchData();
