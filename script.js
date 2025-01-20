document.getElementById('recommendation-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get the new recommendation
    const newRecommendation = document.getElementById('new-recommendation').value;
    if (newRecommendation.trim() !== "") {
      // Add to the list
      const recommendationsList = document.getElementById('recommendations-list');
      const li = document.createElement('li');
      li.textContent = newRecommendation;
      recommendationsList.appendChild(li);
      const hr = document.createElement('hr');
      recommendationsList.appendChild(hr);
  
      // Show confirmation message
      alert("Thank you for your recommendation!");
  
      // Clear input
      document.getElementById('new-recommendation').value = "";
    }
  });
  