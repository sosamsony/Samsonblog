// fetchUnsplashImage.js
const UNSPLASH_ACCESS_KEY = 'DGoSMSTzAIfQveInHBF0-W4uP_G-TdH7dvVmYzoF7h0'; // Replace with your actual API key

export async function fetchUnsplashImage(query) {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`);
    const data = await response.json();
    return data[0]?.urls?.regular; // Return the URL of the regular-sized image
  } catch (error) {
    console.error('Error fetching image:', error);
    return 'https://example.com/default-image.jpg'; // Fallback image URL
  }
}
