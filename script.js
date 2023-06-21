window.addEventListener('DOMContentLoaded', () => {
    const paragraphInput = document.getElementById('paragraph');
    const counter = document.getElementById('counter');
  
    // Function to count the words in the paragraph
    const countWords = () => {
      const paragraph = paragraphInput.value.trim();
      const wordCount = paragraph.split(/\s+/).length;
  
      counter.textContent = `Word Count: ${wordCount}`;
    };
  
    // Add event listener to count words on input change
    paragraphInput.addEventListener('input', countWords);
  });
  