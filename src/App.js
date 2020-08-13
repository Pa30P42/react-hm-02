import React from "react";
import Feedback from "./components/feedbacks/feedbacks";
import TotalFeedback from "./components/totalFeedback/TotalFeedback";
import RefactoredFeedback from "./components/RefactoredFeedback/RefactoredFeedback";
import Notification from "./components/notification/notification";
function App() {
  return (
    <>
      <Feedback />
      <TotalFeedback />
      <RefactoredFeedback />
      <Notification />
    </>
  );
}

export default App;
