//your JS code here. If required.
const line = document.getElementById('line');
  let rotation = 0;

  function rotateLine() {
    rotation += 1;
    line.style.transform = `rotate(${rotation}deg)`;
    requestAnimationFrame(rotateLine);
  }

  rotateLine();
it("should have the correct line properties", () => {
  cy.get('#line').should('have.css', 'position', 'absolute')
    .and(line => {
      const width = Math.round(parseFloat(line.css('width')));
      expect(width).to.eq(200);
    })
    .and('have.css', 'height', '2px')
    .and('have.css', 'background-color', 'rgb(0, 0, 0)');
});
