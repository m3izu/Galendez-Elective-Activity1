/**
 * Adaptive E-Learning Engine
 * Evaluates student quiz performance and study pace to tailor content delivery.
 */

// Simulated learner profiles
const learners = [
  { id: 1, name: "Alex", quizScore: 45, timeSpentMinutes: 40, consecutiveLowScores: 3 },
  { id: 2, name: "Jordan", quizScore: 92, timeSpentMinutes: 12, consecutiveLowScores: 0 },
  { id: 3, name: "Sam", quizScore: 78, timeSpentMinutes: 25, consecutiveLowScores: 0 }
];

function adaptLearningPath(learner) {
  const recommendations = [];

  // Rule 1: Remediate struggling learners with foundational material
  // IF quiz score is below 60% AND consecutive low scores >= 2
  // THEN lower difficulty tier and assign prerequisite breakdown modules
  if (learner.quizScore < 60 && learner.consecutiveLowScores >= 2) {
    recommendations.push({
      type: "REMEDIATION",
      action: "Switch module difficulty to 'Foundational' and assign interactive concept drills.",
      reason: "High struggle detected across multiple assessments."
    });
  }

  // Rule 2: Accelerate high-performing, fast learners
  // IF quiz score is 90% or above AND completion time is under 15 minutes
  // THEN unlock advanced capstone challenges and enable fast-track progression
  if (learner.quizScore >= 90 && learner.timeSpentMinutes < 15) {
    recommendations.push({
      type: "ACCELERATION",
      action: "Unlock 'Advanced Project-Based Track' and offer topic mastery skip-ahead.",
      reason: "High mastery achieved in minimal time."
    });
  }

  // Default path if no adaptation triggers
  if (recommendations.length === 0) {
    recommendations.push({
      type: "STANDARD",
      action: "Continue to next standard curriculum module.",
      reason: "Performance meets expected milestone benchmarks."
    });
  }

  return recommendations;
}

// Execution & Demonstration
console.log("=== Adaptive Learning Path Engine Output ===\n");
learners.forEach((learner) => {
  const decisions = adaptLearningPath(learner);
  console.log(`Learner: ${learner.name}`);
  console.log(`Metrics: Score: ${learner.quizScore}%, Time: ${learner.timeSpentMinutes}m, Low Score Streak: ${learner.consecutiveLowScores}`);
  decisions.forEach((d) => {
    console.log(`-> [${d.type}] ${d.action}`);
    console.log(`   Context: ${d.reason}`);
  });
  console.log("--------------------------------------------------");
});