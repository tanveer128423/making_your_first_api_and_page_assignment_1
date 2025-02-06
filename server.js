const express = require('express');
const app = express();

// Function to get the current day of the week
const getDayMessage = () => {
  const daysOfWeek = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  };
  
  const dayIndex = new Date().getDay();  // Get current day index (0-6)
  return daysOfWeek[dayIndex];
};

// Endpoint to handle personalized greeting
app.get('/assistant/greet', (req, res) => {
  const userName = req.query.name || 'User';  // Default to 'User' if no name is provided
  const day = getDayMessage();

  let dayMessage = "Have a wonderful day!"; // Default message for other days
  
  // Customize day-specific message
  if (day === "Monday") {
    dayMessage = "Happy Monday! Start your week with energy!";
  } else if (day === "Friday") {
    dayMessage = "It's Friday! The weekend is near!";
  }

  const response = {
    welcomeMessage: `Hello, ${userName}! Welcome to our assistant app!`,
    dayMessage: dayMessage
  };

  res.json(response);  // Send the response as a JSON object
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
