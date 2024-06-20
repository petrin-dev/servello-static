function getInteriorWidth(element) {
  // Use getBoundingClientRect for accurate width including padding
  const rect = element.getBoundingClientRect();
  // Round the width to a whole number using Math.round
  return Math.round(rect.width);
}

function spacingSteps() {
  const spacingSteps = document.querySelectorAll('.style-guide-spacing-step');
  spacingSteps.forEach(function (each) {
    let interior = each.querySelector('.spacing-step-interior')
    const paragraph = each.querySelector('p');
    const interiorWidth = getInteriorWidth(interior);
    // Set the span text content to the rounded interior width
    paragraph.textContent = interiorWidth;
  });
}

// Call on page load
spacingSteps();

// Call on window resize
window.addEventListener('resize', spacingSteps);
