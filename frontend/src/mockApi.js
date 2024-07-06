// mockApi.js

export const checkFollowStatus = async (link) => {
    // Simulate an API call to check the follow status
    // This function should return a promise that resolves to an object with isFollowing status
    let isFollowing = false;
  
    // Simulate different behavior based on the link type (Instagram, LinkedIn, etc.)
    if (link.includes('instagram')) {
      // Simulate Instagram behavior where link follows are always false initially
      isFollowing = false;
    } else if (link.includes('linkedin')) {
      // Simulate LinkedIn behavior where link follows are random
      isFollowing = Math.random() > 0.5; // Randomly simulate follow status
    } else {
      // Default behavior for other links (not specified in the example)
      isFollowing = Math.random() > 0.5; // Randomly simulate follow status
    }
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ isFollowing });
      }, 1000); // Simulate network delay
    });
  };
  