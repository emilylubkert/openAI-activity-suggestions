export default function generatePrompt(word) {
    const capitalizedWord =
      word[0]?.toUpperCase() + word.slice(1).toLowerCase();
    return `Brainstorm 3 activities appropriate for the weather
    
    Weather: Hot
    Activities: 1. Go for a walk in the park 2. Play outside in the sun 3. Take a swim in the pool
    Weather: Cold
    Activities: 1. Stay inside and watch a movie 2. Make a warm drink or snack 3. Hug a warm animal
    Weather: Snowy
    Activities: 1. Drive in the snow 2. Go sledding 3. Make a snowman
    Weather: ${capitalizedWord}
    Activities:
    `;
  }
