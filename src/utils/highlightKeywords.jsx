// Helper function to highlight keywords in text
export const highlightKeywords = (text) => {
  const keywords = [
    'React Native', 'React', 'Vite', 'Tailwind CSS', 'FastAPI', 'Node.js',
    'Expo', '.NET', 'C#', 'Avalonia UI', 'Python', 'LLM', 'AI Agents', 'AI agenti',
    'AI Agenti', 'AI integrácie', 'AI integrations', 'AI', 'RAG',
    'LangGraph', 'Firebase', 'Git', 'TypeScript', 'full-stack'
  ];

  let result = [text];
  
  // Process each keyword
  keywords.forEach(keyword => {
    const newResult = [];
    result.forEach(part => {
      // Skip if already highlighted (React component)
      if (typeof part !== 'string') {
        newResult.push(part);
        return;
      }
      
      // Case-insensitive split
      const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      const parts = part.split(regex);
      
      parts.forEach((p, i) => {
        if (p && p.toLowerCase() === keyword.toLowerCase()) {
          newResult.push(
            <span key={`${keyword}-${i}-${Math.random()}`} className="font-bold text-slate-900">
              {p}
            </span>
          );
        } else if (p) {
          newResult.push(p);
        }
      });
    });
    result = newResult;
  });
  
  return result;
};
