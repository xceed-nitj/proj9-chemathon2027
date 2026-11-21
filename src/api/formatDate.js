// Copied from xceed-nitj/Proj8-Ece-MAC2027 (src/utility/formatDate.js).
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  export default formatDate
