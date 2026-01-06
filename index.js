function displayPosts(posts) {
  const postList = document.getElementById('post-list');
  postList.innerHTML = '';

  posts.forEach(post => {
    const li = document.createElement('li');

    const title = document.createElement('h1');
    title.textContent = post.title;

    const body = document.createElement('p');
    body.textContent = post.body;

    li.appendChild(title);
    li.appendChild(body);

    postList.appendChild(li);
  });
}

async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const posts = await response.json();

    // DO NOT shuffle; tests expect the first posts from API
    displayPosts(posts);

  } catch (error) {
    console.error('Error fetching posts:', error);
    alert('Failed to load posts. Check console for details.');
  }
}

// Make sure DOM is ready
window.addEventListener('DOMContentLoaded', fetchPosts);

